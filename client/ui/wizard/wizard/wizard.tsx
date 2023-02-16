import { ReactNode } from 'react';
import { WizardProgress, WizardProgressProps } from '../wizard-progress';
import { WizardNavigation, WizardNavigationProps } from '../wizard-navigation';

export type WizardProps = {
  /** The form component to render */
  children: ReactNode;
  /** Props passed to the progress component. If undefined, no progress component is rendered */
  progress?: WizardProgressProps;
  /** Props passed to the navigation component. If undefined, no navigation is rendered */
  navigation?: WizardNavigationProps;
};

const Wizard = ({ children, progress, navigation }: WizardProps) => {
  return (
    <div className="w-full border">
      {!!progress && <WizardProgress {...progress} />}
      <div>{children}</div>
      {!!navigation && <WizardNavigation {...navigation} />}
    </div>
  );
};

export default Wizard;
