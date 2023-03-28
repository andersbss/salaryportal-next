export type LabelledTextProps = {
  label: string;
  value?: string | number | null;
};

const LabelledText = ({ label, value }: LabelledTextProps) => {
  const isEmptyValue = value === null || value === undefined || value === '';

  return (
    <>
      {!isEmptyValue && (
        <div className="flex flex-col md:flex-row">
          <>
            <span className="mr-4 text-xs font-normal text-gray-900 opacity-80 dark:text-white">{`${label}: `}</span>
            <span className="text-sm font-medium text-gray-900 dark:text-white">{value}</span>
          </>
        </div>
      )}
    </>
  );
};

export default LabelledText;
