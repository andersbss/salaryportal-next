import { RouterContext } from 'next/dist/shared/lib/router-context';
import { NextRouter } from 'next/router';
import I18nProvider from 'next-translate/I18nProvider';
import { I18nProviderProps } from 'next-translate';

export type LocaleProviderProps = I18nProviderProps;

export const LocaleProvider = ({ children, ...props }: LocaleProviderProps) => {
  return (
    <RouterContext.Provider value={{} as NextRouter}>
      <I18nProvider {...props}>{children}</I18nProvider>
    </RouterContext.Provider>
  );
};
