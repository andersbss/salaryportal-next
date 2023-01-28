import NextAuth, { AuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import FacebookProvider from 'next-auth/providers/facebook';

import { connectDB } from '@api/utils';
import UserService from '@api/users';

export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID || '',
      clientSecret: process.env.FACEBOOK_SECRET || '',
    }),
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
          return false;
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