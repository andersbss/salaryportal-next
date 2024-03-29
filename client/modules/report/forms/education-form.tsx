import useTranslation from 'next-translate/useTranslation';
import { useCallback } from 'react';
import { useFieldArray } from 'react-hook-form';
import { EducationRow } from '../components';
import { EducationFormInput } from '../types';
import { EMPTY_DEGREE } from '../utils';

const EducationForm = () => {
  const { t } = useTranslation('report');

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
                <EducationRow key={field.id} index={index + 1} onRemove={handleRemoveDegree} />
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
              {t('forms.education.buttons.addEducation')}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EducationForm;
