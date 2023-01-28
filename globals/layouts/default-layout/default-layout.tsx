import { ReactNode } from 'react';
import { DefaultFooter } from '../../footers';
import { DefaultHeader } from '../../headers';

export type DefaultLayoutProps = {
  children: ReactNode;
};

export const DefaultLayout = ({ children }: DefaultLayoutProps): JSX.Element => {
  return (
    <div className="flex flex-col h-screen justify-between bg-white dark:bg-zinc-800">
      <DefaultHeader />
      <main className="mb-auto">{children}</main>
      <DefaultFooter />
    </div>
  );
};

export default DefaultLayout;
