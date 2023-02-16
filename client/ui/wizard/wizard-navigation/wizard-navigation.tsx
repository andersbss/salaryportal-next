import { useWizardContext } from '../wizard-ctx';
import { WizardNavigationButton } from '../wizard-navigation-button';

const WizardNavigation = () => {
  const { activeStep, steps, back, next, done } = useWizardContext();

  const maxSteps = steps.length - 1;

  const showBackButton = activeStep.index > 0;
  const showNextButton = activeStep.index < maxSteps;
  const showDoneButton = activeStep.index === maxSteps;

  const multipleButtonsAreVisible = (showBackButton && showNextButton) || (showBackButton && showDoneButton);

  return (
    <nav
      data-test="wizard-navigation"
      className={`flex ${multipleButtonsAreVisible ? 'justify-between' : 'justify-end'}`}
    >
      {showBackButton && (
        <WizardNavigationButton variant="back" onClick={back}>
          Previous
        </WizardNavigationButton>
      )}
      {showNextButton && (
        <WizardNavigationButton variant="next" onClick={next}>
          Next
        </WizardNavigationButton>
      )}
      {showDoneButton && (
        <WizardNavigationButton variant="done" onClick={done}>
          Done
        </WizardNavigationButton>
      )}
    </nav>
  );
};

export default WizardNavigation;
