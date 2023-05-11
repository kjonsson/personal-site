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
                className="p-4 transition-all border border-gray-800 rounded-md hover:border-white"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/movies"
                className="p-4 transition-all border border-gray-800 rounded-md hover:border-white"
              >
                Movies
              </Link>
            </li>
            <li>
              <Link
                href="/tv"
                className="p-4 transition-all border border-gray-800 rounded-md hover:border-white"
              >
                <span className="min-w-[100px]">Tv</span>
              </Link>
            </li>
            <li>
              <Link
                href="/books"
                className="p-4 transition-all border border-gray-800 rounded-md hover:border-white"
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
