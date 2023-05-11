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
      <div>
        <div className="border border-slate-500 rounded-full w-[500px] h-[500px] flex flex-col items-center justify-center">
          <div className="min-w-[200px] flex flex-col items-center justify-center">
            <Image
              src="https://avatars.githubusercontent.com/u/77005856?v=4"
              width={128}
              height={128}
              className="rounded-full"
              alt="Kris"
            />
            <div className="pt-4 text-center">
              <div
                className="text-gray-500 tracking-[10px] uppercase py-2 text-center
            "
              >
                Hi, I am
              </div>
              <div className="min-h-[50px] text-5xl font-semibold  text-white text-center">
                {text}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
