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

  return (
    <div>
      <h4>{t('report:forms.review.forms.personalInfo.heading')}</h4>
      <LabelledText label="Test" value="test efjilkjljnkfgj dgn, dbngmdfbg kregbher" />
      <h4>{t('report:forms.review.forms.education.heading')}</h4>
      <h4>{t('report:forms.review.forms.currentJob.heading')}</h4>
    </div>
  );
};

export default ReviewReportForm;
