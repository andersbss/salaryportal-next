import useTranslation from 'next-translate/useTranslation';
import { useFormContext } from 'react-hook-form';
import { EducationFormInput } from '../types';

const EducationForm = () => {
  const { t } = useTranslation('report');

  const { register } = useFormContext<EducationFormInput>();

  return (
    <div className="w-full max-w-screen-lg">
      <h2 className="font-semibold text-slate-900 dark:text-white">{t('forms.education.heading')}</h2>

      <form className="mt-4 flex flex-col">
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2"></div>
      </form>
    </div>
  );
};

export default EducationForm;
