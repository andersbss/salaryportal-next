import { ReactNode } from 'react';
import { WizardProgress } from '../wizard-progress';
import { WizardNavigation } from '../wizard-navigation';

export type WizardProps = {
  /** The form component to render */
  children: ReactNode;
};

const Wizard = ({ children }: WizardProps) => {
  return (
    <div className="grid w-full gap-4 pt-4">
      <WizardProgress />
      <div className="flex flex-col items-center">{children}</div>
      <WizardNavigation />
    </div>
  );
};

export default Wizard;
