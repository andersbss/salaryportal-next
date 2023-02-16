import { Wizard } from '@client/ui/wizard/wizard';
import { useWizard, WizardProvider, WizardStep } from '@client/ui/wizard/wizard-ctx';
import PersonalInfoForm from './personal-info-form';

const NewReportWizard = () => {
  const wizard = useWizard({
    initialSteps: [
      {
        label: 'Personal information',
      },
      {
        label: 'Eduction',
      },
      {
        label: 'Work experience',
      },
    ],
  });

  const activeForm = (step: WizardStep) => {
    switch (step.index) {
      case 0:
        return <PersonalInfoForm onSubmit={() => {}} />;
      case 1:
        return <div>tow</div>;
      case 2:
        return <div>three</div>;
      default:
        return <></>;
    }
  };

  return (
    <WizardProvider {...wizard}>
      <Wizard>{activeForm(wizard.activeStep)}</Wizard>
    </WizardProvider>
  );
};

export default NewReportWizard;
