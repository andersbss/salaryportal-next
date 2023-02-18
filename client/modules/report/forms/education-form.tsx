import { trpc } from '@client/trpc';
import { AutoCompleteOption, FormAutocomplete } from '@client/ui/form-autocomplete';
import { FormInput } from '@client/ui/form-input';
import useTranslation from 'next-translate/useTranslation';
import { useCallback, useMemo } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { EducationFormInput, EducationGrade } from '../types';
import { EMPTY_DEGREE } from '../utils';

const now = new Date();

const EducationForm = () => {
  const { t } = useTranslation('report');

  const { register } = useFormContext<EducationFormInput>();

  const { fields, append, remove } = useFieldArray<EducationFormInput>({ name: 'degrees' });

  const handleRemoveDegree = useCallback((index: number) => {
    remove(index);
  }, []);

  const handleAppendDegree = () => {
    append({ ...EMPTY_DEGREE });
  };

  return (
    <div className="w-full max-w-screen-lg">
      <h2 className="text-lg font-bold text-slate-900 dark:text-white">{t('forms.education.heading')}</h2>

      <form className="mt-4 flex flex-col">
        <div className="flex w-full flex-col gap-8">
          <section className="flex flex-col">
            <h3 className="font-semibold text-slate-900 dark:text-white">{t('forms.education.paragraphX.title')}</h3>
            <p className="text-sm text-slate-900 dark:text-gray-200">{t('forms.education.paragraphX.text')} </p>
            <div className="mt-4">{fields[0] && <EducationRow index={0} />}</div>
          </section>

          <section>
            <h3 className="font-semibold text-slate-900 dark:text-white">{t('forms.education.paragraphY.title')}</h3>
            <p className="text-sm text-slate-900 dark:text-gray-200">{t('forms.education.paragraphY.text')}</p>
            <div>
              {fields.slice(1).map((field, index) => (
                <EducationRow key={field.id} index={index + 1} />
              ))}
            </div>
          </section>

          <div className="flex justify-center">
            <button
              className="text-md rounded-full border border-green-500 bg-transparent p-2 font-medium text-slate-900 shadow-md transition duration-100 ease-in hover:border-transparent hover:bg-green-500 hover:text-white dark:text-white hover:dark:text-white"
              onClick={(e) => {
                e.preventDefault();
                handleAppendDegree();
              }}
            >
              Legg til ekstra utdanningsnivå
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EducationForm;

type EducationRowProps = {
  index: number;
};

const EducationRow = ({ index }: EducationRowProps) => {
  const { t } = useTranslation('report');

  const { register, formState, setValue } = useFormContext<EducationFormInput>();

  const { data: educationGradeData } = trpc.reports.enums.educationGrade.useQuery();

  const gradeOptions = useMemo<AutoCompleteOption<EducationGrade>[]>(() => {
    if (!educationGradeData) return [];

    return Object.values(educationGradeData).map((grade) => ({
      id: grade,
      label: grade.toString(),
      value: grade,
    }));
  }, [educationGradeData]);

  const handleGradeValues = (id: EducationGrade | null, label: string) => {
    setValue(`degrees.${index}.gradeId`, id, { shouldValidate: true });
    setValue(`degrees.${index}.grade`, label, { shouldValidate: true });
  };

  return (
    <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
      <FormInput
        label={t('forms.education.fields.title.label')}
        placeholder={t('forms.education.fields.title.placeholder')}
        tooltip={t('forms.education.fields.title.tooltip')}
        fullWidth
        register={register(`degrees.${index}.name`, {
          required: 'required',
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
                console.log('not integer');
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
    </div>
  );
};
