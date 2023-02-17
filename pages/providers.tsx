import { SessionProvider } from 'next-auth/react';

type GlobalProviderProps = {
  children: React.ReactNode;
};

const GlobalProvider = ({ children }: GlobalProviderProps) => {
  // This is where we can wrap our app with global providers
  return <SessionProvider>{children}</SessionProvider>;
};

export default GlobalProvider;
