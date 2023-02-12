'use client';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';

import { trpc } from '@client/utils/trpc';

type GlobalProviderProps = {
  children: React.ReactNode;
};

const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      retry: false,
    },
    queries: {
      retry: false,
    },
  },
});

const GlobalProvider = ({ children }: GlobalProviderProps) => {
  // This is where we can wrap our app with global providers
  return <SessionProvider>{children}</SessionProvider>;
};

export default GlobalProvider;
