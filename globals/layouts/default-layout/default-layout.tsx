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
      <main className="w-full mb-auto mx-auto max-w-screen-2xl">{children}</main>
      <div className="mx-auto w-full max-w-screen-2xl relative">
        <div className="absolute bottom-20 right-0">
          {/**
           * <Fab />
           */}
        </div>
      </div>
      <DefaultFooter />
    </div>
  );
};

export default DefaultLayout;
