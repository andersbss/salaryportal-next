import { createContext, ReactNode, useContext, useState } from 'react';

export type WizardEventReturn = {
  continue: boolean;
};

export type WizardStep = {
  index: number;
  number: number;
  variant: 'active' | 'inactive' | 'completed';
  label?: string;
};

export type InitialStep = Omit<WizardStep, 'variant' | 'number' | 'index'>;

export type UseWizardProps = {
  initialSteps: InitialStep[];

  onBack?: (currentStep: WizardStep) => Promise<WizardEventReturn> | WizardEventReturn;
  onNext?: (currentStep: WizardStep) => Promise<WizardEventReturn> | WizardEventReturn;
  onDone?: () => Promise<WizardEventReturn> | WizardEventReturn;
};

export type UseWizardReturn = {
  steps: WizardStep[];
  activeStep: WizardStep;
  next: () => void;
  back: () => void;
  goTo: (index: number) => void;
  done: () => void;
};

export type WizardContextReturn = UseWizardReturn;

export type WizardProviderProps = UseWizardReturn & {
  children: ReactNode;
};

const getInitialSteps = (initialSteps: InitialStep[]): WizardStep[] => {
  const steps: WizardStep[] = initialSteps.map((step, index) => {
    return {
      index,
      number: index + 1,
      variant: index === 0 ? 'active' : 'inactive',
      label: step.label,
    };
  });

  return steps;
};

export const useWizard = ({ initialSteps, onNext, onBack, onDone }: UseWizardProps): UseWizardReturn => {
  const [steps, setSteps] = useState<WizardStep[]>(getInitialSteps(initialSteps));
  const [activeStep, setActiveStep] = useState<WizardStep>(getInitialSteps(initialSteps)[0]);

  const next = async () => {
    const options = await onNext?.(activeStep);

    if (!options?.continue) {
      return;
    }

    setSteps((prev) => {
      const newSteps = [...prev];

      newSteps[activeStep.index].variant = 'completed';
      newSteps[activeStep.index + 1].variant = 'active';

      return newSteps;
    });

    setActiveStep(steps[activeStep.index + 1]);
  };

  const back = async () => {
    const options = await onBack?.(activeStep);

    if (!options?.continue) {
      return;
    }

    setSteps((prev) => {
      const newSteps = [...prev];

      newSteps[activeStep.index].variant = 'inactive';
      newSteps[activeStep.index - 1].variant = 'active';

      return newSteps;
    });

    setActiveStep(steps[activeStep.index - 1]);
  };

  const done = async () => {
    await onDone?.();

    setSteps((prev) => {
      const newSteps = [...prev];

      newSteps[activeStep.index].variant = 'completed';

      return newSteps;
    });
  };

  const goTo = (index: number) => {
    setSteps((prev) => {
      const newSteps = [...prev];

      newSteps[activeStep.index].variant = 'inactive';
      newSteps[index].variant = 'active';

      return newSteps;
    });

    setActiveStep(steps[index]);
  };

  return {
    activeStep,
    steps,
    next,
    back,
    goTo,
    done,
  };
};

export const WizardContext = createContext<WizardContextReturn>({} as WizardContextReturn);

export const WizardProvider = ({ children, ...props }: WizardProviderProps) => (
  <WizardContext.Provider value={props}>{children}</WizardContext.Provider>
);

export const useWizardContext = () => {
  const context = useContext(WizardContext);

  if (!Object.keys(context).length) {
    throw new Error('useWizardContext must be used within a WizardProvider');
  }

  return context;
};
