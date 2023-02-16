import { ReactNode } from 'react';
import { WizardProgress } from '../wizard-progress';
import { WizardNavigation } from '../wizard-navigation';
import { useWizardContext } from '../wizard-ctx';

export type WizardProps = {
  /** The form component to render */
  children: ReactNode;
};

const Wizard = ({ children }: WizardProps) => {
  return (
    <div className="w-full border">
      <WizardProgress />
      <div>{children}</div>
      <WizardNavigation />
    </div>
  );
};

export default Wizard;
