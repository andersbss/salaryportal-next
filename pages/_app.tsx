import '../client/globals/styles/globals.css';

import { AppProps } from 'next/app';

import { DefaultLayout } from '@globals/layouts';
import { trpc } from '@client/trpc';

import GlobalProvider from './providers';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <GlobalProvider>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </GlobalProvider>
  );
};

export default trpc.withTRPC(App);
