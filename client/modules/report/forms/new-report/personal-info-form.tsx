import { AutoCompleteOption, FormAutocomplete } from '@client/ui/form-autocomplete';
import { FormInput } from '@client/ui/form-input';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { Gender, PersonalInfoFormInput } from './personal-info-form-input';

import { trpc } from '@client/trpc';

export type PersonalInfoFormProps = {
  onSubmit: (input: PersonalInfoFormInput) => void;
};

export const PersonalInfoForm = ({ onSubmit }: PersonalInfoFormProps): JSX.Element => {
  const { register, formState, handleSubmit, setValue, getValues } = useForm<PersonalInfoFormInput>({
    mode: 'onTouched',
  });

  const { data: countiesData } = trpc.thirdParty.kartverket.counties.useQuery();

  const { data: genderData } = trpc.enums.gender.useQuery();

  const { mutate } = trpc.reports.create.useMutation();

  const countyOptions = useMemo<AutoCompleteOption[]>(() => {
    if (!countiesData) return [];

    return countiesData.map((county) => {
      return {
        id: county.id,
        label: county.name,
        value: county.name,
      };
    });
  }, [countiesData]);

  const genderOptions = useMemo<AutoCompleteOption<Gender>[]>(() => {
    if (!genderData) return [];

    return Object.values(genderData).map((gender) => {
      return {
        id: gender,
        label: gender.toString(),
        value: gender,
      };
    });
  }, [genderData]);

  const handleGenderValues = (id: Gender | null, label: string) => {
    setValue('genderId', id, { shouldValidate: true });
    setValue('gender', label, { shouldValidate: true });
  };

  const handleCountyValues = (id: string, label: string) => {
    setValue('countyId', id, { shouldValidate: true });
    setValue('county', label, { shouldValidate: true });
  };

  return (
    <div className="w-full max-w-screen-lg">
      <h2 className="font-semibold text-slate-900 dark:text-white">Vi trenger litt informasjon om deg</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-4 flex flex-col">
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
          <FormInput
            label="Hvor gammel er du?"
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
            label="Hvilket kjønn har du?"
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
            onOptionClick={({ value, label }) => {
              handleGenderValues(value || null, label);
            }}
          />
          <FormAutocomplete
            options={countyOptions}
            error={formState.errors.county}
            label="I hvilket fylke bor du?"
            tooltip="Her må du velge fylke. Eksempelvis: Oslo, Akershus, etc."
            fullWidth
            placeholder="Oslo"
            register={register('county', {
              required: 'Felt er påkrevd',
              validate: {
                isOption: (input) => {
                  const isOption = countyOptions.some((o) => o.label === input);
                  if (isOption) return;
                  return 'Velg et av alternativene';
                },
              },
            })}
            onBlur={() => {
              const isOption = countyOptions.some((o) => o.label === getValues('county'));
              if (isOption) return;
              handleCountyValues('', '');
            }}
            onOptionClick={({ id, label }) => {
              handleCountyValues(id, label);
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default PersonalInfoForm;
