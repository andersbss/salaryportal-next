import { trpc } from '@client/trpc';
import { AutoCompleteOption } from '@client/ui/form-autocomplete';
import { useMemo } from 'react';
import { EducationGrade } from '../types';

const useGradeAutocompleteOptions = () => {
  const { data } = trpc.reports.enums.educationGrade.useQuery();

  const options = useMemo<AutoCompleteOption<EducationGrade>[]>(() => {
    if (!data) return [];

    return Object.values(data).map((grade) => ({
      id: grade,
      label: grade.toString(),
      value: grade,
    }));
  }, [data]);

  return { options };
};

export default useGradeAutocompleteOptions;
