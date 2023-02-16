import { WizardProgressButton, WizardProgressButtonProps } from '../wizard-progress-button';

export type WizardProgressProps = {
  steps: WizardProgressButtonProps[];
};

const WizardProgress = ({ steps }: WizardProgressProps) => {
  const isFirstStep = (index: number) => index === 0;
  const isLastStep = (index: number) => index === steps.length - 1;

  return (
    <nav data-test="wizard-progress" className="flex justify-evenly">
      {steps.map((step, index) => (
        <div key={step.title} className="flex w-full items-center justify-center">
          <div
            data-test="left-line"
            className={`mr-2 w-full border-t ${isFirstStep(index) ? 'border-transparent' : 'border-gray-400'}`}
          />
          <div>
            <WizardProgressButton {...step} />
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
