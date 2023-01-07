import '../globals/styles/globals.css';

import { Poppins } from '@next/font/google';
import { DefaultLayout } from '@globals';

type RootLayoutProps = {
  children: React.ReactNode;
};

const poppins = Poppins({ weight: '600', subsets: ['latin'] });

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html className={poppins.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Hva tjener en _?</title>
        <link rel="shortcut icon" href="/dollar-sign-icon.svg" />
      </head>
      <body>
        <DefaultLayout>{children}</DefaultLayout>
      </body>
    </html>
  );
}
