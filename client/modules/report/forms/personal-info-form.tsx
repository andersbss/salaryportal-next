import { useEffect, useMemo } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { useFormContext } from 'react-hook-form';

import { trpc } from '@client/trpc';

import { AutoCompleteOption, FormAutocomplete } from '@client/ui/form-autocomplete';
import { FormInput } from '@client/ui/form-input';

import { Gender, PersonalInfoFormInput } from '../types';

const PersonalInfoForm = (): JSX.Element => {
  const { t } = useTranslation('report');

  const { register, formState, setValue, getValues } = useFormContext<PersonalInfoFormInput>();

  // Queries
  const { data: countiesData, refetch: refetchCountiesData } = trpc.thirdParty.kartverket.counties.useQuery(undefined, {
    enabled: false,
  });
  const { data: genderData } = trpc.reports.enums.gender.useQuery();

  useEffect(() => {
    // Fetch counties data on client side to avoid slow ssr request from third party api
    refetchCountiesData();
  }, []);

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
      <h2 className="font-semibold text-slate-900 dark:text-white">{t('forms.personalInfo.heading')}</h2>

      <form className="mt-4 flex flex-col">
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
          <FormInput
            label={t('forms.personalInfo.fields.age.label')}
            tooltip={t('forms.personalInfo.fields.age.tooltip')}
            placeholder={t('forms.personalInfo.fields.age.placeholder')}
            fullWidth
            error={formState.errors.age}
            register={register('age', { required: t('forms.personalInfo.fields.age.validation.required') })}
            type="number"
          />
          <FormAutocomplete
            label={t('forms.personalInfo.fields.gender.label')}
            tooltip={t('forms.personalInfo.fields.gender.tooltip')}
            placeholder={t('forms.personalInfo.fields.gender.placeholder')}
            options={genderOptions}
            error={formState.errors.gender}
            mode="select"
            fullWidth
            register={register('gender', {
              required: t('forms.personalInfo.fields.gender.validation.required'),
              validate: {
                isOption: (input) => {
                  const isOption = genderOptions.some((o) => o.label === input);
                  if (isOption) return;
                  return t('forms.personalInfo.fields.gender.validation.selectAlternative');
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
            label={t('forms.personalInfo.fields.county.label')}
            tooltip={t('forms.personalInfo.fields.county.tooltip')}
            placeholder={t('forms.personalInfo.fields.county.placeholder')}
            options={countyOptions}
            error={formState.errors.county}
            fullWidth
            register={register('county', {
              required: t('forms.personalInfo.fields.county.validation.required'),
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
