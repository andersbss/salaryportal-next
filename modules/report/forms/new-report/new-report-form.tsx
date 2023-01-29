'use client';
import { FormProvider, useForm } from 'react-hook-form';

import { FormInput } from '@ui/form-input';

import { NewReportFormInput } from './new-report-form-input';
import { CtaButton } from '@ui/cta-button';

export type NewReportFormProps = {
  onSubmit: (input: NewReportFormInput) => void;
};

const NewReportForm = ({ onSubmit }: NewReportFormProps): JSX.Element => {
  const { register, formState, handleSubmit } = useForm<NewReportFormInput>({});

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-screen-lg">
        <FormInput
          label="Tittel"
          placeholder="Sykepleier"
          fullWidth
          error={formState.errors.jobTitle}
          register={register('jobTitle', { required: 'Tittel er påkrevd' })}
          tooltip="Tooltip"
        />
        <FormInput
          label="Alder"
          placeholder="28"
          fullWidth
          error={formState.errors.age}
          register={register('age', { required: 'Tittel er påkrevd' })}
        />
      </div>
      <div className="flex justify-center mt-8 md:mt-12">
        <CtaButton>Send inn anonyme data</CtaButton>
      </div>
    </form>
  );
};

export default NewReportForm;
