import NextAuth, { AuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

import { connectDB } from '@api/utils';
import UserService from '@api/users';

export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID || '',
      clientSecret: process.env.GITHUB_SECRET || '',
    }),
    // ...add more providers here
  ],
  callbacks: {
    async signIn({ user: { id, email, name, image } }) {
      try {
        if (!email || !name) {
          throw new Error('Email or name is missing from the provider response');
        }

        const dbConnected = await connectDB();

        if (!dbConnected) {
          throw new Error('Database connection failed');
        }

        const existingUser = await UserService.getByProviderId(id, { internal: true });

        if (!existingUser) {
          const newUser = await UserService.create({
            providerId: id,
            username: name,
            email: email,
            imageUrl: image || null,
          });

          if (!newUser) {
            throw new Error('Failed to create user');
          }
        }

        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
  },
};

export default NextAuth(authOptions);
