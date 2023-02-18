import { ReactNode } from 'react';
import { DefaultFooter } from '../../footers';
import { DefaultHeader } from '../../headers';

export type DefaultLayoutProps = {
  children: ReactNode;
};

export const DefaultLayout = ({ children }: DefaultLayoutProps): JSX.Element => {
  return (
    <div className="flex h-screen flex-col justify-between bg-white dark:bg-zinc-800">
      <DefaultHeader />
      <main className="mx-auto mb-auto w-full max-w-screen-2xl bg-white px-4 pt-4 dark:bg-zinc-800 lg:px-0">
        {children}
      </main>
      <DefaultFooter />
    </div>
  );
};

export default DefaultLayout;
