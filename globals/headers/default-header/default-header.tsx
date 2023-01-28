export const DefaultHeader = () => {
  return (
    <header>
      <nav className="bg-white px-4 lg:px-6 py-2.5 dark:bg-zinc-800 shadow-md">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="https://flowbite.com" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap text-slate-800 dark:text-white">
              Hvor mye tjener en_?
            </span>
          </a>
          <div className="flex items-center lg:order-2">
            <button className="bg-transparent text-slate-800 dark:text-white hover:bg-green-500 font-semibold hover:text-white py-2 px-4 border border-slate-800 dark:border-white hover:border-transparent rounded">
              Sign in
            </button>
          </div>
          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
