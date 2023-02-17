import useTranslation from 'next-translate/useTranslation';
import { useWizardContext } from '../wizard-ctx';
import { WizardNavigationButton } from '../wizard-navigation-button';

const WizardNavigation = () => {
  const { t } = useTranslation('common');

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
          {t('wizard.navigation.back')}
        </WizardNavigationButton>
      )}
      {showNextButton && (
        <WizardNavigationButton variant="next" onClick={next}>
          {t('wizard.navigation.next')}
        </WizardNavigationButton>
      )}
      {showDoneButton && (
        <WizardNavigationButton variant="done" onClick={done}>
          {t('wizard.navigation.done')}
        </WizardNavigationButton>
      )}
    </nav>
  );
};

export default WizardNavigation;
