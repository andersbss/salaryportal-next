import { FormInput } from '@client/ui/form-input';
import useTranslation from 'next-translate/useTranslation';
import { useCallback } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { EducationFormInput } from '../types';
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

  const { register, formState } = useFormContext<EducationFormInput>();

  return (
    <div className="flex flex-col gap-2">
      <FormInput
        label={t('forms.education.fields.title.label')}
        placeholder={t('forms.education.fields.title.placeholder')}
        tooltip={t('forms.education.fields.title.tooltip')}
        fullWidth
        register={register(`degrees.${index}.name`, {
          required: 'required',
        })}
      />
      <FormInput
        label={t('forms.education.fields.graduateYear.label')}
        placeholder={t('forms.education.fields.graduateYear.placeholder')}
        tooltip={t('forms.education.fields.graduateYear.tooltip')}
        type="number"
        error={formState.errors?.degrees?.[index]?.graduateYear}
        fullWidth
        register={register(`degrees.${index}.graduateYear`, {
          required: 'hello',
          validate: {
            isMax: (value) => {
              if (!value) return;

              if (value > now.getFullYear()) {
                return 'Year cannot be in the future';
              }
            },
            isMin: (value) => {
              if (!value) return;

              if (value < 1900) {
                return 'Year cannot be before 1900';
              }
            },
          },
        })}
      />
    </div>
  );
};
