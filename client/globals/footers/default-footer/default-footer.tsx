export const DefaultFooter = (): JSX.Element => {
  return (
    <footer className="p-4 rounded-lg md:flex md:items-center md:justify-between md:p-6 dark:bg-zinc-800 shadow-md">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © {new Date().getFullYear()}{' '}
        <a href="https://flowbite.com/" className="hover:underline">
          Company name
        </a>
        . Alle rettigheter reservert.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6 ">
            About
          </a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">
            Licensing
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default DefaultFooter;