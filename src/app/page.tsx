"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [text, count] = useTypewriter({
    words: ["Kristjan Thor Jonsson", "Kris"],
    delaySpeed: 2000,
  });

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <div className="min-w-[200px] flex flex-col items-center justify-center">
        <Image
          src="https://avatars.githubusercontent.com/u/77005856?v=4"
          width={128}
          height={128}
          className="rounded-full"
          alt="Kris"
        />
        <div className="min-h-[200px] font-bold text-xl uppercase text-gray-300 tracking-[5px] p-5">
          {text}
        </div>
      </div>
    </main>
  );
}
