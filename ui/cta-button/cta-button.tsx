'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

export type CtaButtonProps = {
  children: ReactNode;
  /** Url or function. Component rendered as link if a string is provided. */
  action?: string | (() => void);
};

const CtaButton = ({ children, action = () => {} }: CtaButtonProps): JSX.Element => {
  if (typeof action === 'string') {
    return (
      <Link
        href={action}
        className="text-white hover:text-slate-900 hover:dark:text-white dark:text-white bg-green-500 hover:bg-transparent border border-transparent hover:border-green-500 rounded-full shadow-md font-semibold text-xl p-4 transition ease-in duration-100"
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={action}
      className="text-white hover:text-slate-900 hover:dark:text-white dark:text-white bg-green-500 hover:bg-transparent border border-transparent hover:border-green-500 rounded-full shadow-md font-semibold text-xl p-4 transition ease-in duration-100"
    >
      {children}
    </button>
  );
};

export default CtaButton;
