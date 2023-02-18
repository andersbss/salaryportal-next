import { FormAutocomplete } from '@client/ui/form-autocomplete';
import { FormInput } from '@client/ui/form-input';
import useTranslation from 'next-translate/useTranslation';
import { useFormContext } from 'react-hook-form';

import { AverageGrade, EducationFormInput, EducationGrade } from '../types';
import { useAverageGradeAutocompleteOptions, useGradeAutocompleteOptions } from '../hooks';

const now = new Date();

type EducationRowProps = {
  index: number;
  onRemove?: (index: number) => void;
};

export const EducationRow = ({ index, onRemove }: EducationRowProps) => {
  const { t } = useTranslation('report');

  const { register, formState, setValue } = useFormContext<EducationFormInput>();

  const { options: averageGradeOptions } = useAverageGradeAutocompleteOptions();
  const { options: gradeOptions } = useGradeAutocompleteOptions();

  const handleGradeValues = (id: EducationGrade | null, label: string) => {
    setValue(`degrees.${index}.gradeId`, id, { shouldValidate: true });
    setValue(`degrees.${index}.grade`, label, { shouldValidate: true });
  };

  const handleAverageGradeValues = (id: AverageGrade | null, label: string) => {
    setValue(`degrees.${index}.averageGradeId`, id, { shouldValidate: true });
    setValue(`degrees.${index}.averageGrade`, label, { shouldValidate: true });
  };

  const handleRemoveDegree = (index: number) => () => {
    onRemove?.(index);
  };

  const isFirst = index === 0;

  return (
    <div className="grid w-full grid-cols-1 gap-4 rounded-lg p-0 shadow-none md:grid-cols-2 md:p-4 md:shadow-lg">
      <div className="mt-4 flex justify-between md:col-span-2">
        <h4 className="font-semibold text-slate-900 dark:text-white ">{`${index + 1}.`}</h4>
        {!isFirst && (
          <button className="text-red-800" onClick={handleRemoveDegree(index)}>
            &#x274C;
          </button>
        )}
      </div>
      <FormInput
        label={t('forms.education.fields.title.label')}
        placeholder={t('forms.education.fields.title.placeholder')}
        tooltip={t('forms.education.fields.title.tooltip')}
        error={formState.errors?.degrees?.[index]?.name}
        fullWidth
        register={register(`degrees.${index}.name`, {
          required: t('forms.education.fields.title.validation.required'),
        })}
      />
      <FormAutocomplete
        label={t('forms.education.fields.grade.label')}
        placeholder={t('forms.education.fields.grade.placeholder')}
        tooltip={t('forms.education.fields.grade.tooltip')}
        mode="select"
        error={formState.errors?.degrees?.[index]?.grade}
        fullWidth
        options={gradeOptions}
        register={register(`degrees.${index}.grade`, {
          required: t('forms.education.fields.grade.validation.required'),
        })}
        onOptionClick={({ value, label }) => {
          handleGradeValues(value || null, label);
        }}
      />
      <FormInput
        label={t('forms.education.fields.graduateYear.label')}
        placeholder={t('forms.education.fields.graduateYear.placeholder')}
        tooltip={t('forms.education.fields.graduateYear.tooltip')}
        type="number"
        error={formState.errors?.degrees?.[index]?.graduateYear}
        fullWidth
        register={register(`degrees.${index}.graduateYear`, {
          required: t('forms.education.fields.graduateYear.validation.required'),
          validate: {
            isInteger: (value) => {
              if (!value) return;
              if (value % 1 !== 0) {
                return t('forms.education.fields.graduateYear.validation.integer');
              }
            },
            isMax: (value) => {
              if (!value) return;
              if (value > now.getFullYear()) {
                return t('forms.education.fields.graduateYear.validation.max');
              }
            },
            isMin: (value) => {
              if (!value) return;
              if (value < 1900) {
                return t('forms.education.fields.graduateYear.validation.min');
              }
            },
          },
        })}
      />
      <FormInput
        label={t('forms.education.fields.yearsInSchool.label')}
        placeholder={t('forms.education.fields.yearsInSchool.placeholder')}
        tooltip={t('forms.education.fields.yearsInSchool.tooltip')}
        type="number"
        error={formState.errors?.degrees?.[index]?.yearsInSchool}
        fullWidth
        register={register(`degrees.${index}.yearsInSchool`, {
          required: t('forms.education.fields.yearsInSchool.validation.required'),
          validate: {
            isInteger: (value) => {
              if (!value) return;
              if (value % 1 !== 0) {
                return t('forms.education.fields.graduateYear.validation.integer');
              }
            },
            isMax: (value) => {
              if (!value) return;
              if (value > 30) {
                return t('forms.education.fields.yearsInSchool.validation.max');
              }
            },
            isMin: (value) => {
              if (!value) return;
              if (value < 1) {
                return t('forms.education.fields.yearsInSchool.validation.min');
              }
            },
          },
        })}
      />
      <p className=" w-full text-sm text-slate-900 dark:text-gray-400 md:col-span-2">
        {t('forms.education.paragraphZ.text')}
      </p>
      <FormInput
        label={t('forms.education.fields.graduateSchool.label')}
        placeholder={t('forms.education.fields.graduateSchool.placeholder')}
        tooltip={t('forms.education.fields.graduateSchool.tooltip')}
        fullWidth
        register={register(`degrees.${index}.graduateSchool`)}
        error={formState.errors?.degrees?.[index]?.graduateSchool}
      />
      <FormAutocomplete
        label={t('forms.education.fields.averageGrade.label')}
        placeholder={t('forms.education.fields.averageGrade.placeholder')}
        tooltip={t('forms.education.fields.averageGrade.tooltip')}
        mode="select"
        error={formState.errors?.degrees?.[index]?.averageGrade}
        fullWidth
        options={averageGradeOptions}
        register={register(`degrees.${index}.averageGrade`)}
        onOptionClick={({ value, label }) => {
          handleAverageGradeValues(value || null, label);
        }}
      />
    </div>
  );
};
