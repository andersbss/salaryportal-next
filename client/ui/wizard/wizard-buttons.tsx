export type WizardButtonsProps = {
  step: number;
  onBack?: () => void;
  onNext?: () => void;
  onDone?: () => void;
};

const WizardButtons = ({ step, onBack, onDone, onNext }: WizardButtonsProps) => {};

export default WizardButtons;
