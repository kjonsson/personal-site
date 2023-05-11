"use client";

import Link from "next/link";

import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 p-8 mx-auto max-w-7xl">
      <motion.div
        initial={{ x: -500 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap items-center justify-between"
      >
        <div className="items-center justify-between w-full" id="mobile-menu-2">
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <Link
                href=""
                className="block py-2 pl-3 pr-4 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 "
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/movies"
                className="block py-2 pl-3 pr-4 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
              >
                Movies
              </Link>
            </li>
            <li>
              <Link
                href="/tv"
                className="block py-2 pl-3 pr-4 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
              >
                Tv
              </Link>
            </li>
            <li>
              <Link
                href="/books"
                className="block py-2 pl-3 pr-4 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
              >
                Books
              </Link>
            </li>
          </ul>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
