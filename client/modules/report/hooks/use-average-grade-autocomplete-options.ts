import { trpc } from '@client/trpc';
import { AutoCompleteOption } from '@client/ui/form-autocomplete';
import { useMemo } from 'react';
import { AverageGrade } from '../types';

const useAverageGradeAutocompleteOptions = () => {
  const { data } = trpc.reports.enums.averageGrade.useQuery();

  const options = useMemo<AutoCompleteOption<AverageGrade>[]>(() => {
    if (!data) return [];

    const grades = Object.values(data);

    return grades.map((grade, index) => ({
      id: grade,
      label: `${grade} (${grades.length - index})`,
      value: grade,
    }));
  }, [data]);

  return { options };
};

export default useAverageGradeAutocompleteOptions;
