import { Modal } from '@client/ui/modal';
import React, { useMemo, useState } from 'react';
import { FieldError, FieldValues, Path, UseFormRegisterReturn } from 'react-hook-form';

export type AutoCompleteOption<TObj = unknown> = {
  id: string;
  label: string;
  value?: TObj;
};

export type FormAutocompleteProps<T extends FieldValues, TOptionObj> = {
  options: AutoCompleteOption<TOptionObj>[];
  register: UseFormRegisterReturn<Path<T>>;
  fullWidth?: boolean;
  label?: string;
  placeholder?: string;
  error?: FieldError;
  tooltip?: string;
  mode?: 'autocomplete' | 'select';

  onBlur?: () => void;
  onOptionClick?: (option: AutoCompleteOption<TOptionObj>) => void;
};

const FormAutocomplete = <T extends FieldValues, TOptionObj>({
  options,
  register,
  fullWidth,
  label,
  placeholder,
  error,
  tooltip,
  mode = 'autocomplete',
  onBlur = () => {},
  onOptionClick = () => {},
}: FormAutocompleteProps<T, TOptionObj>): JSX.Element => {
  const [tooltipIsOpen, setTooltipIsOpen] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState<AutoCompleteOption<TOptionObj>[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const sortedOptions = useMemo(() => {
    return filteredOptions.sort((a, b) => a?.label?.localeCompare?.(b.label));
  }, [filteredOptions]);

  const filterOptions = (input: string) => {
    const shouldFilter = input && mode === 'autocomplete';

    if (!shouldFilter) {
      setFilteredOptions(options);
      return;
    }

    if (shouldFilter) {
      setFilteredOptions(options.filter((option) => option.label.toLowerCase().includes(input.toLocaleLowerCase())));
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;

    filterOptions(input);

    register.onChange(event);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    onBlur();

    setIsFocused(false);
    setIsOpen(false);

    register.onBlur(event);
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    const input = event.target.value;

    setIsFocused(true);
    setIsOpen(true);

    filterOptions(input);
  };

  const handleOptionClick = (option: AutoCompleteOption<TOptionObj>) => () => {
    onOptionClick(option);
  };

  const toggleTooltip = () => {
    setTooltipIsOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      {!!label && (
        <label htmlFor={register.name} className="mb-1 block text-sm font-medium text-gray-900 dark:text-white">
          {label} {register?.required && <span className="text-slate-900 dark:text-white">*</span>}
        </label>
      )}
      <div className="flex">
        <input
          {...register}
          id={register.name}
          className={`${fullWidth ? 'w-full' : 'w-auto'} ${tooltip ? 'rounded-l-lg' : 'rounded-lg'} block 
            border border-r-0 border-gray-300 bg-gray-50 p-2.5 text-sm text-slate-900 outline-none focus:border-gray-500 dark:border-gray-600 dark:bg-zinc-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-gray-200`}
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          autoComplete="off"
          readOnly={mode === 'select'}
        />
        <div
          className={`
          ${isFocused ? 'border-gray-500 dark:border-gray-200' : 'border-gray-300 dark:border-gray-600'}
          block 
            border border-l-0 bg-gray-50 p-2.5 text-sm text-slate-900 outline-none dark:bg-zinc-700 dark:text-white dark:placeholder-gray-400`}
        >
          <span
            role="img"
            aria-label="arrow drop down"
            className={`${isOpen ? 'rotate-180' : ''} mt-0.5 block text-xs text-gray-600 dark:text-gray-500`}
          >
            ▲
          </span>
        </div>
        {tooltip && (
          <button
            onClick={(e) => {
              e.preventDefault();
              toggleTooltip();
            }}
            className="inline-flex items-center rounded-r-lg border border-l-0 border-gray-300 bg-gray-200 px-2 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-300"
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
          <ul className="list-reset scrollbar- absolute z-10 mt-2 max-h-40 w-full overflow-auto rounded-md bg-gray-100 p-2 dark:bg-zinc-700 sm:max-h-60">
            {sortedOptions.map((option, index) => (
              <li
                key={option.id}
                className={`${
                  index === 0 ? 'mt-0' : 'mt-1'
                } cursor-pointer rounded-md border border-gray-300 bg-gray-200 p-1.5 text-sm text-gray-900 hover:border-gray-500 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-300 dark:hover:border-gray-200`}
                onMouseDown={handleOptionClick(option)}
              >
                {option.label}
              </li>
            ))}
            {!sortedOptions.length && (
              <li className="bg-transparent text-sm text-slate-500 dark:text-gray-400">Ingen alternativer</li>
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
