import Image from 'next/image';
import Link from 'next/link';

import routes from '../../routes';

import { SignInButton } from './sign-in-button';

export const DefaultHeader = () => {
  return (
    <header>
      <nav className="bg-white px-4 lg:px-6 py-2.5 dark:bg-zinc-800 shadow-md">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-2xl">
          <Link href={routes.home()} className="flex items-center">
            <span className="hidden sm:block self-center text-xl font-semibold whitespace-nowrap text-slate-900 dark:text-white">
              Hvor mye tjener en_?
            </span>
            <Image className="block sm:hidden" src="/money.png" alt="" width={45} height={45} priority />
          </Link>
          <div className="flex items-center lg:order-2">
            <SignInButton />
          </div>
          {/**
             *    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  href={routes.reports.new()}
                  className="bg-green-500 hover:bg-green-400 text-white dark:text-whit font-semibold py-3 px-4 border border-white dark:border-none hover:border-transparent rounded"
                >
                  Rapporter din lønn anonymt
                </Link>
              </li>
            </ul>
          </div>
             */}
        </div>
      </nav>
    </header>
  );
};