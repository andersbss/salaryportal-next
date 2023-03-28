import { LabelledText } from '@client/ui/labelled-text ';
import useTranslation from 'next-translate/useTranslation';
import { CurrentJobFormInput, EducationFormInput, PersonalInfoFormInput } from '../types';

type ReviewReportForm = {
  personalInfoFields: PersonalInfoFormInput;
  educationFields: EducationFormInput;
  currentJobFields: CurrentJobFormInput;
};

const ReviewReportForm = ({ personalInfoFields, educationFields, currentJobFields }: ReviewReportForm) => {
  const { t } = useTranslation();

  const handleEditClick = () => {
    console.log('Edit');
  };

  return (
    <div className="mt-4 w-full">
      <div className="mt-2 flex items-center justify-between">
        <h4 className="text-gray-900  dark:text-white">{t('report:forms.review.forms.personalInfo.heading')}</h4>
        <button onClick={handleEditClick}>
          <span className="edit-icon text-green-500">&#x270E;</span>
        </button>
      </div>
      <hr className="mt-1 w-full border-t border-gray-300 dark:border-gray-600" />
      <div className="mt-2 flex flex-col gap-2">
        <LabelledText label={t('report:forms.review.forms.personalInfo.fields.age')} value={personalInfoFields.age} />
        <LabelledText
          label={t('report:forms.review.forms.personalInfo.fields.gender')}
          value={personalInfoFields.gender}
        />
        <LabelledText
          label={t('report:forms.review.forms.personalInfo.fields.county')}
          value={personalInfoFields.county}
        />
      </div>

      <div className="mt-4 flex items-center justify-between">
        <h4 className="text-gray-900  dark:text-white">{t('report:forms.review.forms.education.heading')}</h4>
        <button onClick={handleEditClick}>
          <span className="edit-icon text-green-500">&#x270E;</span>
        </button>
      </div>
      <hr className="mt-1 w-full border-t border-gray-300 dark:border-gray-600" />
      <div className="mt-1 flex flex-col gap-2">
        {educationFields.degrees.map((degree, index) => {
          const isLast = index === educationFields.degrees.length - 1;

          return (
            <div key={index} className="flex flex-col gap-2">
              <LabelledText label={t('report:forms.review.forms.education.fields.name')} value={degree.name} />
              <LabelledText label={t('report:forms.review.forms.education.fields.grade')} value={degree.grade} />
              <LabelledText
                label={t('report:forms.review.forms.education.fields.graduateYear')}
                value={degree.graduateYear}
              />
              <LabelledText
                label={t('report:forms.review.forms.education.fields.yearsInSchool')}
                value={degree.yearsInSchool}
              />
              <LabelledText
                label={t('report:forms.review.forms.education.fields.graduateSchool')}
                value={degree.graduateSchool}
              />
              <LabelledText
                label={t('report:forms.review.forms.education.fields.averageGrade')}
                value={degree.averageGrade}
              />
              {!isLast && <hr className="w-full border-t border-gray-200  dark:border-gray-700" />}
            </div>
          );
        })}
      </div>

      <div className="mt-4 flex items-center justify-between">
        <h4 className="text-gray-900  dark:text-white">{t('report:forms.review.forms.currentJob.heading')}</h4>
        <button onClick={handleEditClick}>
          <span className="edit-icon text-green-500">&#x270E;</span>
        </button>
      </div>
      <hr className="mt-1 w-full border-t border-gray-300 dark:border-gray-600" />
      <div className="mt-1 flex flex-col gap-2">
        <LabelledText
          label={t('report:forms.review.forms.currentJob.fields.jobTitle')}
          value={currentJobFields.jobTitle}
        />
        <LabelledText
          label={t('report:forms.review.forms.currentJob.fields.estimatedYearlySalary')}
          value={currentJobFields.estimatedTotalYearlySalary.toString()}
        />
        <LabelledText label={t('report:forms.review.forms.currentJob.fields.field')} value={currentJobFields.field} />
        <LabelledText label={t('report:forms.review.forms.currentJob.fields.county')} value={currentJobFields.county} />
      </div>
    </div>
  );
};

export default ReviewReportForm;
