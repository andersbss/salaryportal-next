import { initTRPC, inferRouterInputs, inferRouterOutputs, TRPCError } from '@trpc/server';
import { CreateNextContextOptions } from '@trpc/server/adapters/next';
import prismaClient from '@prisma/client';

import { getServerAuthSession } from '../auth';

export type { inferRouterInputs, inferRouterOutputs };

export const createContext = async (ctx: CreateNextContextOptions) => {
  const { req, res } = ctx;

  const session = await getServerAuthSession({ req, res });

  return {
    session,
  };
};

const t = initTRPC.context<typeof createContext>().create();

// Base router and procedure helpers
export const router = t.router;

export const publicProcedure = t.procedure;

export const authenticatedProcedure = publicProcedure.use(async ({ ctx, next }) => {
  if (!ctx.session || !ctx.session.user) {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }

  return next({
    ctx: {
      session: { ...ctx.session, user: ctx.session.user },
    },
  });
});

export const adminProcedure = authenticatedProcedure.use(async ({ ctx, next }) => {
  if (!ctx.session?.user?.roles.includes(prismaClient.Role.ADMIN)) {
    throw new TRPCError({ code: 'FORBIDDEN' });
  }

  return next({
    ctx: {
      session: { ...ctx.session, user: ctx.session.user },
    },
  });
});
