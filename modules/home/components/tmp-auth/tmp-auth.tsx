'use client';

import { signIn, signOut, useSession } from 'next-auth/react';

export const TmpAuth = (): JSX.Element => {
  const { data } = useSession();

  return (
    <>
      <p>Signed in as {data?.user?.email}</p>
      <button onClick={() => signIn()}>Sign in</button>
      <br />
      <button onClick={() => signOut()}>Sign out</button>
    </>
  );
};
