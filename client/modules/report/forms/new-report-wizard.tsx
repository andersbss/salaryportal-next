import { Wizard } from '@client/ui/wizard/wizard';
import { useWizard, WizardProvider, WizardStep } from '@client/ui/wizard/wizard-ctx';
import useTranslation from 'next-translate/useTranslation';
import { FormProvider, useForm } from 'react-hook-form';
import { EMPTY_DEGREE } from '../utils';

import { PersonalInfoFormInput, EducationFormInput, CurrentJobFormInput } from '../types';

import PersonalInfoForm from './personal-info-form';
import EducationForm from './education-form';
import CurrentJobForm from './current-job-form';

const NewReportWizard = () => {
  const { t } = useTranslation();

  const personalInfoForm = useForm<PersonalInfoFormInput>({
    mode: 'onTouched',
    defaultValues: {
      //TODO: Remove
      age: 20,
      county: 'Oslo',
      countyId: '0301',
      gender: 'Male',
      genderId: 'Male',
    },
  });

  const educationForm = useForm<EducationFormInput>({
    mode: 'onTouched',
    defaultValues: {
      degrees: [{ ...EMPTY_DEGREE }],
    },
  });

  const currentJobForm = useForm<CurrentJobFormInput>({ mode: 'onTouched' });

  const wizard = useWizard({
    initialSteps: [
      { label: t('report:forms.personalInfo.label') },
      { label: t('report:forms.education.label') },
      { label: t('report:forms.currentJob.label') },
    ],
    onNext: async (step) => {
      let isValid = true;

      switch (step.index) {
        case 0:
          isValid = await personalInfoForm.trigger();

          personalInfoForm.handleSubmit((data) => {
            console.log(data);
            //TODO: Do something
          })();
          break;

        case 1:
          isValid = await educationForm.trigger();

          educationForm.handleSubmit((data) => {
            console.log(data);
            //TODO: Do something
          })();
          break;

        case 2:
          isValid = await educationForm.trigger();

          currentJobForm.handleSubmit((data) => {
            console.log(data);
            //TODO: Do something
          })();
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
        return (
          <FormProvider {...educationForm}>
            <EducationForm />
          </FormProvider>
        );
      case 2:
        return (
          <FormProvider {...currentJobForm}>
            <CurrentJobForm />
          </FormProvider>
        );
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
