import { ReactNode } from 'react';

export type WizardProgressButtonVariant = 'active' | 'inactive' | 'completed';

export type WizardProgressButtonProps = {
  title: string;
  variant: WizardProgressButtonVariant;
  icon?: ReactNode;
};

const WizardProgressButton = ({ title, variant }: WizardProgressButtonProps) => {
  if (variant === 'active') {
    return (
      <button className="h-8 w-8 rounded-full bg-green-500 text-slate-900 shadow-md">
        <>{title}</>
      </button>
    );
  }

  if (variant === 'inactive') {
    return (
      <button className="h-6 w-6 rounded-full bg-gray-300 shadow-md">
        <>{title}</>
      </button>
    );
  }

  if (variant === 'completed') {
    return (
      <button className="h-6 w-6 rounded-full bg-green-500 text-slate-900 shadow-md">
        <>{title}</>
      </button>
    );
  }

  return <></>;
};

export default WizardProgressButton;
