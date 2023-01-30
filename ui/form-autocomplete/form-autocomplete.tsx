import React, { useState } from 'react';
import { FieldError, FieldValues, Path, UseFormRegisterReturn } from 'react-hook-form';

export type FormAutocompleteProps<T extends FieldValues> = {
  options: string[];
  register: UseFormRegisterReturn<Path<T>>;
  error?: FieldError;
  onBlur?: () => void;
  onOptionClick?: (option: string) => void;
};

const FormAutocomplete = <T extends FieldValues>({
  options,
  register,
  error,
  onBlur = () => {},
  onOptionClick = () => {},
}: FormAutocompleteProps<T>): JSX.Element => {
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);

  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <div className="border border-green-300 relative">
      <input
        {...register}
        id={register.name}
        className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
      {!!error?.message && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-500">
          <span className="font-medium">{error.message}</span>
        </p>
      )}
      {isOpen && (
        <ul className="list-reset absolute">
          {filteredOptions.map((option, index) => (
            <li
              key={index}
              className="border-b border-gray-200 py-2 hover:bg-gray-100 cursor-pointer"
              onMouseDown={handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FormAutocomplete;
