'use client';

import { Modal } from '@ui/modal';
import { useState } from 'react';
import { FieldError, FieldValues, Path, UseFormRegisterReturn } from 'react-hook-form';

export type FormInputProps<T extends FieldValues> = {
  register: UseFormRegisterReturn<Path<T>>;
  label?: string;
  placeholder?: string;
  fullWidth?: boolean;
  error?: FieldError;
  tooltip?: string;
};

const FormInput = <T extends FieldValues>({
  register,
  label,
  placeholder,
  fullWidth,
  error,
  tooltip,
}: FormInputProps<T>): JSX.Element => {
  const [tooltipIsOpen, setTooltipIsOpen] = useState(false);

  const toggleTooltip = () => {
    setTooltipIsOpen((prev) => !prev);
  };

  return (
    <div>
      {!!label && (
        <label htmlFor={register.name} className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
          {label} {register?.required && <span className="text-slate-900 dark:text-white">*</span>}
        </label>
      )}
      <div className="flex">
        <input
          id={register.name}
          className={`${fullWidth ? 'w-full' : 'w-auto'} ${tooltip ? 'rounded-l-lg' : 'rounded-lg'} bg-gray-50 
            border border-gray-300 focus:border-gray-500 dark:focus:border-gray-200 outline-none text-slate-900 text-sm block p-2.5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white`}
          placeholder={placeholder}
          {...register}
        />
        {tooltip && (
          <button
            onClick={toggleTooltip}
            className="inline-flex items-center px-2 text-sm text-gray-900 bg-gray-200 border-l-0 border-gray-300 rounded-r-lg dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600 border"
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
      <Modal
        isOpen={tooltipIsOpen}
        title={label || 'Hjelp'}
        message={tooltip || ''}
        buttons={[{ type: 'normal', children: <>Lukk</>, onClick: toggleTooltip }]}
      />
    </div>
  );
};

export default FormInput;
