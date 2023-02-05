'use client';

import { NextPage } from 'next';
import { useCallback } from 'react';

import { NewReportForm, NewReportFormInput } from '../forms';

const NewReportPage: NextPage = () => {
  const handleSubmit = useCallback((input: NewReportFormInput) => {
    console.log(input);
  }, []);

  return (
    <>
      <NewReportForm onSubmit={handleSubmit} />
    </>
  );
};

export default NewReportPage;
