import { ReactNode } from 'react';
import { WizardNavigation, WizardNavigationProps } from '../wizard-navigation';

export type WizardProps = {
  /** The form component to render */
  children: ReactNode;
  /** Props passed to the navigation component */
  navigationProps: WizardNavigationProps;
};

const Wizard = ({ children, navigationProps }: WizardProps) => {
  return (
    <div>
      <div>{children}</div>
      <WizardNavigation {...navigationProps} />
    </div>
  );
};

export default Wizard;
