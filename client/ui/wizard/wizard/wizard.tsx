import { ReactNode } from 'react';
import { WizardProgress } from '../wizard progress';
import { WizardNavigation, WizardNavigationProps } from '../wizard-navigation';

export type WizardProps = {
  /** The form component to render */
  children: ReactNode;
  progress?: ReactNode; //TODO: add progress component
  /** Props passed to the navigation component. If undefined, no navigat*/
  navigation?: WizardNavigationProps;
};

const Wizard = ({ children, progress, navigation }: WizardProps) => {
  return (
    <div className="w-full border">
      {!!progress && <WizardProgress />}
      <div>{children}</div>
      {!!navigation && <WizardNavigation {...navigation} />}
    </div>
  );
};

export default Wizard;
