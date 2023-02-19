import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { AuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import { DefaultSession } from 'next-auth';

import prismaClient from '@prisma/client';
import { prisma } from '../prisma';

declare module 'next-auth' {
  interface Session {
    user?: {
      id: string;
      roles: prismaClient.Role[];
    } & DefaultSession['user'];
  }

  interface User {
    id: string;
    roles: prismaClient.Role[];
  }
}

export const nextAuthOptions: AuthOptions = {
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID || '',
      clientSecret: process.env.GITHUB_SECRET || '',
    }),
    // ...add more providers here
  ],
  secret: process.env.AUTH_SECRET,
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
        session.user.roles = user.roles;
      }
      return session;
    },
  },
};
