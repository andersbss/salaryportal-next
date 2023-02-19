import NextAuth from 'next-auth';
import { nextAuthOptions } from '@server/utils/auth';

export default NextAuth(nextAuthOptions);
