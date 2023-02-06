'use client';

import { AutoCompleteOption, FormAutocomplete } from '@ui/form-autocomplete';
import { FormInput } from '@ui/form-input';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { PersonalInfoFormInput } from './personal-info-form-input';

import { Gender } from '@api/reports/dto';

export type PersonalInfoFormProps = {
  onSubmit: (input: PersonalInfoFormInput) => void;
};

export const PersonalInfoForm = ({ onSubmit }: PersonalInfoFormProps): JSX.Element => {
  const { register, formState, handleSubmit, setValue, getValues } = useForm<PersonalInfoFormInput>({
    mode: 'onTouched',
  });

  const genderOptions = useMemo<AutoCompleteOption<Gender>[]>(() => {
    return Object.values(Gender).map((gender) => {
      return {
        id: gender,
        label: gender.toString(),
        value: gender,
      };
    });
  }, []);

  const handleGenderValues = (id: Gender | null, label: string) => {
    setValue('genderId', id, { shouldValidate: true });
    setValue('gender', label, { shouldValidate: true });
  };

  return (
    <div>
      <h2 className="font-semibold text-slate-900 dark:text-white">Vi trenger litt informasjon om deg:</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-4 flex flex-col">
        <div className="grid max-w-screen-lg grid-cols-1 gap-4 md:grid-cols-2">
          <FormInput
            label="Alderen din"
            placeholder="31"
            fullWidth
            error={formState.errors.age}
            register={register('age', { required: 'Alder er påkrevd' })}
            tooltip="Her kan du skrive inn alderen din. Eksempelvis: 31, 32, 33, etc."
            type="number"
          />
          <FormAutocomplete
            options={genderOptions}
            error={formState.errors.gender}
            label="Kjønn"
            tooltip="Her kan du velge kjønn. Eksempelvis: Mann, Kvinne, etc."
            mode="select"
            fullWidth
            placeholder="Kvinne"
            register={register('gender', {
              required: 'Felt er påkrevd',
              validate: {
                isOption: (input) => {
                  const isOption = genderOptions.some((o) => o.label === input);
                  if (isOption) return;
                  return 'Velg et av alternativene';
                },
              },
            })}
            onBlur={() => {
              const isOption = genderOptions.some((o) => o.label === getValues('gender'));
              if (isOption) return;
              handleGenderValues(null, '');
            }}
            onOptionClick={(value) => {
              handleGenderValues(value.value || null, value.label);
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default PersonalInfoForm;
