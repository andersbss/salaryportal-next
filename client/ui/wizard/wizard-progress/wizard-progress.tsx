import { useWizardContext } from '../wizard-ctx';
import { WizardProgressButton } from '../wizard-progress-button';

const WizardProgress = () => {
  const { steps, goTo } = useWizardContext();

  const isFirstStep = (index: number) => index === 0;
  const isLastStep = (index: number) => index === steps.length - 1;

  const handleStepClick = (index: number) => () => {
    goTo(index);
  };

  return (
    <nav data-test="wizard-progress" className="flex justify-evenly">
      {steps.map((step, index) => (
        <div key={step.number} className="relative flex w-full items-center justify-center">
          <div
            data-test="left-line"
            className={`mr-2 w-full border-t ${isFirstStep(index) ? 'border-transparent' : 'border-gray-400'}`}
          />
          <div className="pointer-events-auto">
            <WizardProgressButton variant={step.variant} number={step.number} onClick={handleStepClick(index)} />
          </div>
          <div
            data-test="right-line"
            className={`ml-2 w-full border-t ${isLastStep(index) ? 'border-transparent' : 'border-gray-400'}`}
          />
          <div className="pointer-events-none absolute flex text-xs text-white">
            <span data-test="label" className="mt-14 block">
              {step.label}
            </span>
          </div>
        </div>
      ))}
    </nav>
  );
};

export default WizardProgress;
