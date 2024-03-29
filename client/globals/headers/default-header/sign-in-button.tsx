import { signIn, signOut, useSession } from 'next-auth/react';
import useTranslation from 'next-translate/useTranslation';

export const SignInButton = (): JSX.Element => {
  const { t } = useTranslation();

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
      className="rounded border border-slate-900 bg-transparent py-2 px-4 font-semibold text-slate-900 hover:border-transparent hover:bg-green-500 hover:text-white dark:border-white dark:text-white"
    >
      {status === 'authenticated' ? t('common:auth.signOut') : t('common:auth.signIn')}
    </button>
  );
};
