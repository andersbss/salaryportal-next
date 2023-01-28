'use client';

import { signIn, signOut, useSession } from 'next-auth/react';

export const SignInButton = (): JSX.Element => {
  const { status } = useSession();

  const handleSignIn = () => {
    signIn();
  };

  const handleSignOut = () => {
    signOut();
  };

  const handleClick = () => {
    if (status === 'unauthenticated') {
      handleSignIn();
    }

    if (status === 'authenticated') {
      handleSignOut();
    }
  };

  return (
    <button
      onClick={handleClick}
      className="bg-transparent text-slate-800 dark:text-white hover:bg-green-500 font-semibold hover:text-white py-2 px-4 border border-slate-800 dark:border-white hover:border-transparent rounded"
    >
      {status === 'authenticated' ? 'Logg ut' : 'Logg inn'}
    </button>
  );
};
