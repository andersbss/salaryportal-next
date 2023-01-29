'use client';

import { FieldError, FieldValues, Path, UseFormRegisterReturn } from 'react-hook-form';

export type FormInputProps<T extends FieldValues> = {
  register: UseFormRegisterReturn<Path<T>>;
  label?: string;
  placeholder?: string;
  fullWidth?: boolean;
  error?: FieldError;
};

const FormInput = <T extends FieldValues>({
  register,
  label,
  placeholder,
  fullWidth,
  error,
}: FormInputProps<T>): JSX.Element => {
  return (
    <>
      {!!label && (
        <label htmlFor={register.name} className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
          {label} {register?.required && <span className="text-slate-900 dark:text-white">*</span>}
        </label>
      )}
      <input
        id={register.name}
        className={`${fullWidth ? 'w-full' : 'w-auto'} bg-gray-50 
            border border-gray-300 focus:border-gray-500 dark:focus:border-gray-200 outline-none text-slate-900 text-sm rounded-lg block p-2.5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white`}
        placeholder={placeholder}
        {...register}
      />
      {!!error?.message && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-500">
          <span className="font-medium">{error.message}</span>
        </p>
      )}
    </>
  );
};

export default FormInput;
