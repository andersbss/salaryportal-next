export type WizardProgressButtonVariant = 'active' | 'inactive' | 'completed';

export type WizardProgressButtonProps = {
  variant: WizardProgressButtonVariant;
  number: number;
  onClick: () => void;
};

const WizardProgressButton = ({ number, variant, onClick }: WizardProgressButtonProps) => {
  if (variant === 'active') {
    return (
      <button disabled className="h-8 w-8 rounded-full bg-green-500 text-slate-900 shadow-md">
        <>{number}</>
      </button>
    );
  }

  if (variant === 'inactive') {
    return (
      <button disabled className="h-6 w-6 rounded-full bg-gray-300 shadow-md">
        <>{number}</>
      </button>
    );
  }

  if (variant === 'completed') {
    return (
      <button className="h-6 w-6 rounded-full bg-green-500 text-slate-900 shadow-md" onClick={onClick}>
        <>{number}</>
      </button>
    );
  }

  return <></>;
};

export default WizardProgressButton;
