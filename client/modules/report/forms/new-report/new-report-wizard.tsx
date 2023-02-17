import { Wizard } from '@client/ui/wizard/wizard';
import { useWizard, WizardProvider, WizardStep } from '@client/ui/wizard/wizard-ctx';
import { FormProvider, useForm } from 'react-hook-form';
import PersonalInfoForm from './personal-info-form';
import { PersonalInfoFormInput } from './personal-info-form-input';

const NewReportWizard = () => {
  const personalInfoForm = useForm<PersonalInfoFormInput>();

  const wizard = useWizard({
    initialSteps: [
      {
        label: 'Personal information',
      },
      {
        label: 'Education',
      },
      {
        label: 'Current job',
      },
    ],
    onNext: async (step) => {
      let isValid = true;

      switch (step.index) {
        case 0:
          isValid = await personalInfoForm.trigger();

          personalInfoForm.handleSubmit((data) => {
            console.log('TODO: Save personal info', data);
          })();
          break;

        case 1:
          console.log('TODO: Education form validation');
          break;

        case 2:
          console.log('TODO: Current job form validation');
          break;

        default:
          break;
      }

      return {
        continue: isValid,
      };
    },
    onBack: (step) => {
      console.log('back', step);

      return {
        continue: true,
      };
    },
  });

  const activeForm = (step: WizardStep) => {
    switch (step.index) {
      case 0:
        return (
          <FormProvider {...personalInfoForm}>
            <PersonalInfoForm />
          </FormProvider>
        );
      case 1:
        return <div>TODO: Education form</div>;
      case 2:
        return <div>TODO: Current job</div>;
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