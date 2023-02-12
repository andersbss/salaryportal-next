'use client';
import { useForm } from 'react-hook-form';

import { FormInput } from '@client/ui/form-input';
import { CtaButton } from '@client/ui/cta-button';
import { AutoCompleteOption, FormAutocomplete } from '@client/ui/form-autocomplete';

import { NewReportFormInput } from './new-report-form-input';

export type NewReportFormProps = {
  onSubmit: (input: NewReportFormInput) => void;
};

const NewReportForm = ({ onSubmit }: NewReportFormProps): JSX.Element => {
  const { register, formState, handleSubmit, setValue, getValues } = useForm<NewReportFormInput>({ mode: 'onTouched' });

  const testOptions: AutoCompleteOption[] = [
    { id: '1', label: 'Helse' },
    { id: '2', label: 'IT' },
    { id: '3', label: 'Bygg' },
  ];

  const handleFieldValues = (id: string, label: string) => {
    setValue('fieldId', id, { shouldValidate: true });
    setValue('field', label, { shouldValidate: true });
  };

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
          options={testOptions}
          error={formState.errors.field}
          fullWidth
          label="Fagområde"
          placeholder="Helse"
          tooltip='Dette er fagområdet du jobber i. Eksempelvis: "Helse", "IT", "Bygg", etc.'
          register={register('field', {
            required: 'Felt er påkrevd',
            validate: {
              isOption: (input) => {
                const isOption = testOptions.some((o) => o.label === input);
                if (isOption) return;
                return 'Velg et av alternativene';
              },
            },
          })}
          onBlur={() => {
            const isOption = testOptions.some((o) => o.label === getValues('field'));
            if (isOption) return;
            handleFieldValues('', '');
          }}
          onOptionClick={(value) => {
            handleFieldValues(value.id, value.label);
          }}
        />
      </div>
      <div className="mt-8 flex justify-center md:mt-12">
        <CtaButton>Send inn anonyme data</CtaButton>
      </div>
    </form>
  );
};

export default NewReportForm;
