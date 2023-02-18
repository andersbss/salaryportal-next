import { WizardProviderProps } from '../../wizard-ctx';

export type OmitWizardProviderProps = Omit<WizardProviderProps, 'children'>;

export const defaultProviderProps: OmitWizardProviderProps = {
  activeStep: {
    index: 0,
    number: 1,
    variant: 'active',
    label: 'Label 1',
  },
  steps: [
    {
      index: 0,
      number: 1,
      variant: 'active',
      label: 'Label 1',
    },
    {
      index: 1,
      number: 2,
      variant: 'inactive',
      label: 'Label 2',
    },
    {
      index: 2,
      number: 3,
      variant: 'inactive',
      label: 'Label 3',
    },
  ],
  back: () => {},
  next: () => {},
  done: () => {},
};

/**
 * Returns a new provider props object with the active step set to the step at the given index.
 */
export const getProviderPropsWithActiveStep = (index: number): OmitWizardProviderProps => {
  const step = defaultProviderProps.steps[index];

  return {
    ...defaultProviderProps,
    activeStep: step,
  };
};
