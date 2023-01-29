'use client';
import { FormProvider, useForm } from 'react-hook-form';

import { FormInput } from '@ui/form-input';

import { NewReportFormInput } from './new-report-form-input';

export type NewReportFormProps = {
  onSubmit: (input: NewReportFormInput) => void;
};

const NewReportForm = ({ onSubmit }: NewReportFormProps): JSX.Element => {
  const { register, formState, handleSubmit } = useForm<NewReportFormInput>({});

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-screen-lg">
      <FormInput
        label="Tittel"
        placeholder="Sykepleier"
        fullWidth
        error={formState.errors.jobTitle}
        register={register('jobTitle', { required: 'Tittel er påkrevd' })}
      />
      <FormInput
        label="Alder"
        placeholder="28"
        fullWidth
        error={formState.errors.age}
        register={register('age', { required: 'Tittel er påkrevd' })}
      />
      <button type="submit">Send inn</button>
    </form>
  );
};

export default NewReportForm;
