'use client';

import { NextPage } from 'next';
import { useCallback, useState } from 'react';

import { NewReportForm, NewReportFormInput } from '../forms';
import NewReportWizard from '../forms/new-wizard/new-report-wizard';
import PersonalInfoForm from '../forms/new-wizard/personal-info-form';
import { PersonalInfoFormInput } from '../forms/new-wizard/types/personal-info-form-input';

const NewReportPage: NextPage = () => {
  const [step, setStep] = useState(0);

  const handlePersonalInfoSubmit = useCallback((input: PersonalInfoFormInput) => {
    // Store in local storage
    localStorage.setItem('personalInfo', JSON.stringify(input));
    setStep((prev) => prev + 1);
  }, []);

  const handleSubmit = useCallback((input: NewReportFormInput) => {
    console.log(input);
  }, []);

  return (
    <>
      <NewReportWizard />
    </>
  );
};

export default NewReportPage;
