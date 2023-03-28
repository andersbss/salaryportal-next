export type LabelledTextProps = {
  label: string;
  value: string;
};

const LabelledText = ({ label, value }: LabelledTextProps) => {
  return (
    <div className="flex flex-col md:flex-row">
      <span className="mr-4 text-sm font-normal text-gray-900 opacity-80 dark:text-white">{`${label}: `}</span>
      <span className="text-base font-medium text-gray-900 dark:text-white">{value}</span>
    </div>
  );
};

export default LabelledText;
