'use client';
import { FormProvider, useForm } from 'react-hook-form';

import { FormInput } from '@ui/form-input';

import { NewReportFormInput } from './new-report-form-input';

export type NewReportFormProps = {
  onSubmit: (input: NewReportFormInput) => void;
};

const NewReportForm = ({ onSubmit }: NewReportFormProps): JSX.Element => {
  const { register, formState, handleSubmit } = useForm<NewReportFormInput>({ mode: 'all' });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        label="Tittel"
        placeholder="Sykepleier"
        fullWidth
        error={formState.errors.title}
        register={register('title', { required: 'Tittel er påkrevd' })}
      />
      <button type="submit">Send inn</button>
    </form>
  );
};

export default NewReportForm;
