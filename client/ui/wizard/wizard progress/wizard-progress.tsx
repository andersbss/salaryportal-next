import { ReactNode } from 'react';

export type WizardProgressStep = {
  title: string;
  icon?: ReactNode;
};

export type WizardProgressProps = {
  step: number;
  steps: WizardProgressStep[];
};

const WizardProgress = ({ step, steps }: WizardProgressProps) => {
  return (
    <div>
      <div>Wizard Progress</div>
    </div>
  );
};

export default WizardProgress;
