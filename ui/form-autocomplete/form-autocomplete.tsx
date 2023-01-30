import { Modal } from '@ui/modal';
import React, { useMemo, useState } from 'react';
import { FieldError, FieldValues, Path, UseFormRegisterReturn } from 'react-hook-form';

export type FormAutocompleteProps<T extends FieldValues> = {
  options: string[];
  register: UseFormRegisterReturn<Path<T>>;
  fullWidth?: boolean;
  label?: string;
  placeholder?: string;
  error?: FieldError;
  tooltip?: string;
  onBlur?: () => void;
  onOptionClick?: (option: string) => void;
};

const FormAutocomplete = <T extends FieldValues>({
  options,
  register,
  fullWidth,
  label,
  placeholder,
  error,
  tooltip,
  onBlur = () => {},
  onOptionClick = () => {},
}: FormAutocompleteProps<T>): JSX.Element => {
  const [tooltipIsOpen, setTooltipIsOpen] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const sortedOptions = useMemo(() => {
    const sorted = filteredOptions.sort((a, b) => a.localeCompare(b));
    return sorted;
  }, [filteredOptions]);

  const filterOptions = (input: string) => {
    if (!input) {
      setFilteredOptions(options);
    } else {
      setFilteredOptions(options.filter((option) => option.includes(input.toLocaleLowerCase())));
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;

    filterOptions(input);

    register.onChange(event);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    onBlur();
    setIsOpen(false);

    register.onBlur(event);
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    const input = event.target.value;

    setIsOpen(true);

    filterOptions(input);
  };

  const handleOptionClick = (option: string) => () => {
    onOptionClick(option);
  };

  const toggleTooltip = () => {
    setTooltipIsOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      {!!label && (
        <label htmlFor={register.name} className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
          {label} {register?.required && <span className="text-slate-900 dark:text-white">*</span>}
        </label>
      )}
      <div className="flex">
        <input
          {...register}
          id={register.name}
          className={`${fullWidth ? 'w-full' : 'w-auto'} ${tooltip ? 'rounded-l-lg' : 'rounded-lg'} bg-gray-50 
            border border-gray-300 focus:border-gray-500 dark:focus:border-gray-200 outline-none text-slate-900 text-sm block p-2.5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white`}
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          autoComplete="off"
        />
        {tooltip && (
          <button
            onClick={toggleTooltip}
            className="inline-flex items-center px-2 text-sm text-gray-900 bg-gray-200 border-l-0 border-gray-300 rounded-r-lg dark:bg-gray-600 dark:text-gray-300 dark:border-gray-600 border"
          >
            ?
          </button>
        )}
      </div>

      {!!error?.message && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-500">
          <span className="font-medium">{error.message}</span>
        </p>
      )}
      {isOpen && (
        <>
          <ul className="list-reset absolute w-full dark:bg-zinc-700 p-2 rounded-md mt-2 overflow-auto max-h-40 sm:max-h-60 scrollbar-">
            {sortedOptions.map((option, index) => (
              <li
                key={index}
                className={`${
                  index === 0 ? 'mt-0' : 'mt-1'
                } border text-sm text-gray-900 bg-gray-200 border-gray-300 dark:bg-gray-600 dark:text-gray-300 dark:border-gray-600 cursor-pointer p-1.5 rounded-md hover:border-gray-500 dark:hover:border-gray-200`}
                onMouseDown={handleOptionClick(option)}
              >
                {option}
              </li>
            ))}
            {!sortedOptions.length && (
              <li className="bg-transparent text-slate-900 dark:text-white text-sm text-opacity-80">
                Ingen alternativer
              </li>
            )}
          </ul>
        </>
      )}
      {!!tooltip && (
        <Modal
          isOpen={tooltipIsOpen}
          title={label || 'Hjelp'}
          message={tooltip || ''}
          buttons={[{ type: 'normal', children: <>Lukk</>, onClick: toggleTooltip }]}
        />
      )}
    </div>
  );
};

export default FormAutocomplete;
