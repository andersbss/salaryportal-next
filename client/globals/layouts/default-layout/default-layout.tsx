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
      <main className="mx-auto mb-auto w-full max-w-screen-2xl px-4 lg:px-0">{children}</main>
      <div className="relative mx-auto w-full max-w-screen-2xl">
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
