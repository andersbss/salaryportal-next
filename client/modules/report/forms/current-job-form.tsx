import { trpc } from '@client/trpc';
import { AutoCompleteOption, FormAutocomplete } from '@client/ui/form-autocomplete';
import { FormInput } from '@client/ui/form-input';
import useTranslation from 'next-translate/useTranslation';
import { useEffect, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { CurrentJobFormInput } from '../types/current-job-form-input';

const CurrentJobForm = () => {
  const { t } = useTranslation('report');

  const { register, formState, setValue, getValues } = useFormContext<CurrentJobFormInput>();

  // Queries
  const { data: countiesData, refetch: refetchCountiesData } = trpc.thirdParty.kartverket.counties.useQuery(undefined, {
    enabled: false,
  });

  useEffect(() => {
    // Fetch counties data on client side to avoid slow ssr request from third party api
    refetchCountiesData();
  }, []);

  const countyOptions = useMemo<AutoCompleteOption[]>(
    () =>
      countiesData?.map((county) => ({
        id: county.id,
        label: county.name,
        value: county.name,
      })) || [],
    [countiesData]
  );

  //TODO: Fetch fields from backend
  const fieldOptions = useMemo<AutoCompleteOption[]>(() => [], []);

  const handleCountyValues = (id: string, label: string) => {
    setValue('countyId', id, { shouldValidate: true });
    setValue('county', label, { shouldValidate: true });
  };

  const handleFieldValues = (id: string, label: string) => {
    setValue('fieldId', id, { shouldValidate: true });
    setValue('field', label, { shouldValidate: true });
  };

  return (
    <div className="w-full max-w-screen-lg">
      <h2 className="text-lg font-bold text-slate-900 dark:text-white">{t('forms.currentJob.heading')}</h2>

      <form className="mt-4 flex flex-col">
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
          <FormInput
            label={t('forms.currentJob.fields.jobTitle.label')}
            tooltip={t('forms.currentJob.fields.jobTitle.tooltip')}
            placeholder={t('forms.currentJob.fields.jobTitle.placeholder')}
            fullWidth
            error={formState.errors.jobTitle}
            register={register('jobTitle', {
              required: t('forms.currentJob.fields.jobTitle.validation.required'),
            })}
          />
          <FormInput
            label={t('forms.currentJob.fields.estimatedYearlySalary.label')}
            tooltip={t('forms.currentJob.fields.estimatedYearlySalary.tooltip')}
            placeholder={t('forms.currentJob.fields.estimatedYearlySalary.placeholder')}
            fullWidth
            error={formState.errors.estimatedTotalYearlySalary}
            register={register('estimatedTotalYearlySalary', {
              required: t('forms.currentJob.fields.estimatedYearlySalary.validation.required'),
              validate: {
                isInteger: (value) => {
                  if (!value) return;
                  if (value % 1 !== 0) {
                    return t('forms.currentJob.fields.estimatedYearlySalary.validation.integer');
                  }
                },
                isPositive: (value) => {
                  if (!value) return;
                  if (value < 0) {
                    return t('forms.currentJob.fields.estimatedYearlySalary.validation.positive');
                  }
                },
              },
            })}
            type="number"
          />
          <FormAutocomplete
            label={t('forms.currentJob.fields.field.label')}
            tooltip={t('forms.currentJob.fields.field.tooltip')}
            placeholder={t('forms.currentJob.fields.field.placeholder')}
            options={fieldOptions}
            error={formState.errors.field}
            fullWidth
            register={register('field', {
              required: t('forms.currentJob.fields.field.validation.required'),
              validate: {
                isOption: (input) => {
                  const isOption = fieldOptions.some((o) => o.label === input);
                  if (isOption) return;
                  return t('forms.currentJob.fields.field.validation.selectAlternative');
                },
              },
            })}
            onBlur={() => {
              const isOption = fieldOptions.some((o) => o.label === getValues('county'));
              if (isOption) return;
              handleFieldValues('', '');
            }}
            onOptionClick={({ id, label }) => {
              handleFieldValues(id, label);
            }}
          />
          <FormAutocomplete
            label={t('forms.currentJob.fields.county.label')}
            tooltip={t('forms.currentJob.fields.county.tooltip')}
            placeholder={t('forms.currentJob.fields.county.placeholder')}
            options={countyOptions}
            error={formState.errors.county}
            fullWidth
            register={register('county', {
              required: t('forms.currentJob.fields.county.validation.required'),
              validate: {
                isOption: (input) => {
                  const isOption = countyOptions.some((o) => o.label === input);
                  if (isOption) return;
                  return t('forms.currentJob.fields.county.validation.selectAlternative');
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

export default CurrentJobForm;
