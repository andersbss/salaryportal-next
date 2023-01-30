'use client';
import { useForm } from 'react-hook-form';

import { FormInput } from '@ui/form-input';
import { CtaButton } from '@ui/cta-button';
import { FormAutocomplete } from '@ui/form-autocomplete';

import { NewReportFormInput } from './new-report-form-input';

export type NewReportFormProps = {
  onSubmit: (input: NewReportFormInput) => void;
};

const NewReportForm = ({ onSubmit }: NewReportFormProps): JSX.Element => {
  const { register, formState, handleSubmit, setValue, getValues } = useForm<NewReportFormInput>({ mode: 'onChange' });

  const testOptions = ['it', 'bygg', 'test3', 'it', 'bygg', 'test3', 'it', 'bygg', 'test3', 'it', 'bygg', 'test3'];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <div className="grid max-w-screen-lg grid-cols-1 gap-4 md:grid-cols-2">
        <FormInput
          label="Stillingstittel i arbeidskontrakten"
          placeholder="Sykepleier"
          fullWidth
          error={formState.errors.jobTitle}
          register={register('jobTitle', { required: 'Tittel er påkrevd' })}
          tooltip="Dette er tittelen du har på jobben. Eksempelvis: sykepleier, lege, helsefagarbeider, etc. Her kan du skrive inn tittelen din slik den står i arbeidskontrakten din."
        />
        <FormInput
          label="Total årslønn (brutto/før skatt)"
          placeholder="500 000"
          fullWidth
          error={formState.errors.totalYearlySalary}
          register={register('totalYearlySalary', { required: 'Årslønn er påkrevd' })}
          tooltip="Her kan du skrive inn din totale årslønn, før skatt. Eksempelvis: 500 000, 1 000 000, 2 000 000, etc. Dette er tallene du finner på lønnsslippet ditt. Vi holder alle tallene anonyme."
        />
        <FormAutocomplete
          register={register('field', {
            required: 'Felt er påkrevd',
            validate: {
              isOption: (value) => {
                if (testOptions.includes(value)) return undefined;
                return 'Velg en av alternativene';
              },
            },
          })}
          options={testOptions}
          error={formState.errors.field}
          onBlur={() => {
            if (!testOptions.includes(getValues('field'))) setValue('field', '', { shouldValidate: true });
          }}
          onOptionClick={(value) => {
            setValue('field', value, { shouldValidate: true });
          }}
          fullWidth
          label="Fagområde"
          placeholder="Helse"
          tooltip='Dette er fagområdet du jobber i. Eksempelvis: "Helse", "IT", "Bygg", etc.'
        />
      </div>
      <div className="mt-8 flex justify-center md:mt-12">
        <CtaButton>Send inn anonyme data</CtaButton>
      </div>
    </form>
  );
};

export default NewReportForm;
