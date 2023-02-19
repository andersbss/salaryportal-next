'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

export type CtaButtonProps = {
  children: ReactNode;
  /** Url or function. Component rendered as link if a string is provided. */
  action?: string | (() => void);
};

const CtaButton = ({ children, action = () => {} }: CtaButtonProps): JSX.Element => {
  const className =
    'rounded-full border border-transparent bg-green-500 p-4 text-xl font-semibold text-white shadow-md transition duration-100 ease-in hover:border-green-500 hover:bg-transparent hover:text-slate-900 dark:text-white hover:dark:text-white ';

  if (typeof action === 'string') {
    return (
      <Link href={action} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={action} className={className}>
      {children}
    </button>
  );
};

export default CtaButton;
