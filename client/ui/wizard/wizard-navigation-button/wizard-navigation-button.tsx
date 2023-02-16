import { ReactNode } from 'react';

export type WizardNavigationButtonVariant = 'back' | 'next' | 'done';

export type WizardNavigationButtonProps = {
  children: ReactNode;
  variant: WizardNavigationButtonVariant;
  disabled?: boolean;
  onClick?: () => void;
};

const WizardNavigationButton = ({ children, variant, onClick }: WizardNavigationButtonProps) => {
  if (variant === 'next') {
    return (
      <button
        onClick={onClick}
        className="rounded-full border border-transparent bg-green-500 p-2 text-lg font-semibold text-white shadow-md transition duration-100 ease-in hover:border-green-500 hover:bg-transparent hover:text-slate-900 dark:hover:text-white"
      >
        {children}
      </button>
    );
  }

  if (variant === 'back') {
    return (
      <button
        onClick={onClick}
        className="rounded-full border border-green-500 bg-transparent p-2 text-lg font-semibold text-slate-900 shadow-md transition duration-100 ease-in hover:border-transparent hover:bg-green-500 hover:text-white dark:border-white dark:text-white"
      >
        {children}
      </button>
    );
  }

  if (variant === 'done') {
    return (
      <button
        onClick={onClick}
        className="min-w-100 rounded-full border border-transparent bg-green-500 p-2 text-lg font-semibold text-white shadow-md transition duration-100 ease-in hover:border-green-500 hover:bg-transparent hover:text-slate-900"
      >
        {children}
      </button>
    );
  }

  return <></>;
};

export default WizardNavigationButton;
