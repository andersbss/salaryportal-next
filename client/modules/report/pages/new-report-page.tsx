'use client';

import { NextPage } from 'next';
import { useCallback, useState } from 'react';

import { NewReportForm, NewReportFormInput } from '../forms';
import PersonalInfoForm from '../forms/new-report/personal-info-form';
import { PersonalInfoFormInput } from '../forms/new-report/personal-info-form-input';

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
      {step === 0 && <PersonalInfoForm onSubmit={handlePersonalInfoSubmit} />}
      {step === 1 && <div></div>}
    </>
  );
};

export default NewReportPage;
