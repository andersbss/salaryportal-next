import '../client/globals/styles/globals.css';

import { DefaultLayout } from '@globals';
import GlobalProvider from './providers';

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Hvor mye tjener en _?</title>
        <link rel="shortcut icon" href="/money.png" />
      </head>
      <body>
        <GlobalProvider>
          <DefaultLayout>{children}</DefaultLayout>
        </GlobalProvider>
      </body>
    </html>
  );
};

export default RootLayout;
