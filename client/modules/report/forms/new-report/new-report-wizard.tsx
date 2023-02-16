import { Wizard } from '@client/ui/wizard/wizard';
import { useWizard, WizardProvider } from '@client/ui/wizard/wizard-ctx';

const NewReportWizard = () => {
  const wizard = useWizard({
    initialSteps: [
      {
        label: 'Personal Info',
      },
    ],
  });

  return (
    <WizardProvider {...wizard}>
      <Wizard>
        <div>content</div>
      </Wizard>
    </WizardProvider>
  );
};

export default NewReportWizard;
