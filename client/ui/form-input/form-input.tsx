'use client';

import { Modal } from '@client/ui/modal';
import { useState } from 'react';
import { FieldError, FieldValues, Path, UseFormRegisterReturn } from 'react-hook-form';

export type FormInputProps<T extends FieldValues> = {
  register: UseFormRegisterReturn<Path<T>>;
  label?: string;
  placeholder?: string;
  type?: 'text' | 'number' | 'email' | 'password';
  fullWidth?: boolean;
  error?: FieldError;
  tooltip?: string;
};

const FormInput = <T extends FieldValues>({
  register,
  label,
  placeholder,
  type = 'text',
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
        <label htmlFor={register.name} className="mb-1 block text-sm font-medium text-gray-900 dark:text-white">
          {label} {register?.required && <span className="text-slate-900 dark:text-white">*</span>}
        </label>
      )}
      <div className="flex">
        <input
          {...register}
          id={register.name}
          className={`${fullWidth ? 'w-full' : 'w-auto'} ${tooltip ? 'rounded-l-lg' : 'rounded-lg'} block 
            border border-gray-300 bg-gray-50 p-2.5 text-sm text-slate-900 outline-none focus:border-gray-500 dark:border-gray-600 dark:bg-zinc-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-gray-200`}
          placeholder={placeholder}
          type={type}
        />
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

export default FormInput;
