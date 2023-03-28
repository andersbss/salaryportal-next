import { useState } from 'react';
import { Wizard } from '@client/ui/wizard/wizard';
import { useWizard, WizardProvider, WizardStep } from '@client/ui/wizard/wizard-ctx';
import useTranslation from 'next-translate/useTranslation';
import { FormProvider, useForm } from 'react-hook-form';
import { EMPTY_DEGREE } from '../utils';

import { PersonalInfoFormInput, EducationFormInput, CurrentJobFormInput } from '../types';

import PersonalInfoForm from './personal-info-form';
import EducationForm from './education-form';
import CurrentJobForm from './current-job-form';
import ReviewReportForm from './review-report-form';

import { Modal } from '@client/ui/modal';

const NewReportWizard = () => {
  const { t } = useTranslation();

  const [reviewIsOpen, setReviewIsOpen] = useState(false);

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
      //degrees: [{ ...EMPTY_DEGREE }],
      //TOOD: Remove
      degrees: [
        {
          name: 'Bachelor of Science',
          averageGrade: 'A',
          averageGradeId: 'A',
          grade: 'Bachelor',
          graduateSchool: 'NTNU',
          graduateYear: 2019,
          yearsInSchool: 4,
        },
        {
          name: 'Bachelor of Science',
          averageGrade: 'A',
          averageGradeId: 'A',
          grade: 'Bachelor',
          graduateSchool: 'NTNU',
          graduateYear: 2019,
          yearsInSchool: 4,
        },
      ],
    },
  });

  const currentJobForm = useForm<CurrentJobFormInput>({
    mode: 'onTouched',
    //TODO: Remove
    defaultValues: {
      county: 'Oslo',
      countyId: '0301',
      estimatedTotalYearlySalary: 100000,
      field: 'IT',
      fieldId: 'IT',
      jobTitle: 'Software Engineer',
    },
  });

  const toggleReviewModal = () => {
    setReviewIsOpen((prev) => !prev);
  };

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

        default:
          break;
      }

      return {
        continue: isValid,
      };
    },
    onBack: () => {
      return {
        continue: true,
      };
    },
    onDone: async () => {
      let isValid = true;

      isValid = await currentJobForm.trigger();

      currentJobForm.handleSubmit((data) => {
        console.log(data);
        //TODO: Do something
      })();

      if (!isValid) {
        //TODO: Uncomment
        //return { continue: false };
      }

      toggleReviewModal();

      return {
        continue: true,
      };
    },
  });

  const onSubmit = () => {};

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
    <>
      <WizardProvider {...wizard}>
        <Wizard>{activeForm(wizard.activeStep)}</Wizard>
      </WizardProvider>
      <Modal
        isOpen={reviewIsOpen}
        title={t('report:forms.review.heading')}
        body={
          <ReviewReportForm
            personalInfoFields={personalInfoForm.getValues()}
            educationFields={educationForm.getValues()}
            currentJobFields={currentJobForm.getValues()}
          />
        }
        buttons={[{ type: 'cta', children: <>SEND INN ANONYME DATA</>, onClick: onSubmit }]}
      />
    </>
  );
};

export default NewReportWizard;
