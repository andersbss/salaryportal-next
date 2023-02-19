import { GetServerSidePropsContext } from 'next';
import { unstable_getServerSession } from 'next-auth';
import { nextAuthOptions } from './next-auth-options';

export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext['req'];
  res: GetServerSidePropsContext['res'];
}) => {
  return unstable_getServerSession(ctx.req, ctx.res, nextAuthOptions);
};
