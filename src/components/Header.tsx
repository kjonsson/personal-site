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
            <li className="text-center min-w-[100px] p-4 transition-all border border-gray-800 rounded-md hover:border-white hover:cursor-pointer">
              <Link href="/">Home</Link>
            </li>
            <li className="text-center min-w-[100px] p-4 transition-all border border-gray-800 rounded-md hover:border-white hover:cursor-pointer">
              <Link href="/movies">Movies</Link>
            </li>
            <li className="text-center min-w-[100px] p-4 transition-all border border-gray-800 rounded-md hover:border-white hover:cursor-pointer">
              <Link href="/tv">
                <span className="min-w-[100px]">Tv</span>
              </Link>
            </li>
            <li className="text-center min-w-[100px] p-4 transition-all border border-gray-800 rounded-md hover:border-white hover:cursor-pointer">
              <Link href="/books">Books</Link>
            </li>
          </ul>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
