import { WizardNavigationButton } from '../wizard-navigation-button';

export type WizardButtonsProps = {
  /** The current active step (0 indexed) */
  step: number;
  /** The total number of steps in the wizard */
  totalSteps: number;
  /** Function triggered when the previous button is clicked */
  onBack?: () => void;
  /** Function triggered when the next button is clicked */
  onNext?: () => void;
  /** Function triggered when the done button is clicked */
  onDone?: () => void;
};

const WizardNavigation = ({ step, totalSteps, onBack, onDone, onNext }: WizardButtonsProps) => {
  const maxSteps = totalSteps - 1;

  const showBackButton = step > 0;
  const showNextButton = step < maxSteps;
  const showDoneButton = step === maxSteps;

  return (
    <nav className="flex justify-between">
      {showBackButton && (
        <WizardNavigationButton variant="back" onClick={onBack}>
          Previous
        </WizardNavigationButton>
      )}
      {showNextButton && (
        <WizardNavigationButton variant="next" onClick={onNext}>
          Next
        </WizardNavigationButton>
      )}
      {showDoneButton && (
        <WizardNavigationButton variant="done" onClick={onDone}>
          Done
        </WizardNavigationButton>
      )}
    </nav>
  );
};

export default WizardNavigation;
