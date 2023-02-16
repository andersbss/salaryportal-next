import { useWizardContext } from '../wizard-ctx';
import { WizardProgressButton } from '../wizard-progress-button';

const WizardProgress = () => {
  const { steps } = useWizardContext();

  const isFirstStep = (index: number) => index === 0;
  const isLastStep = (index: number) => index === steps.length - 1;

  return (
    <nav data-test="wizard-progress" className="flex justify-evenly">
      {steps.map((step, index) => (
        <div key={step.number} className="flex w-full items-center justify-center">
          <div
            data-test="left-line"
            className={`mr-2 w-full border-t ${isFirstStep(index) ? 'border-transparent' : 'border-gray-400'}`}
          />
          <div>
            <WizardProgressButton variant={step.variant} number={step.number} />
          </div>
          <div
            data-test="right-line"
            className={`ml-2 w-full border-t ${isLastStep(index) ? 'border-transparent' : 'border-gray-400'}`}
          />
        </div>
      ))}
    </nav>
  );
};

export default WizardProgress;
