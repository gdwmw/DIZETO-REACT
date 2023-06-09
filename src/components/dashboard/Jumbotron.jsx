import React from "react";

export default function Jumbotron() {
  return (
    <section id="jumbotron" className="flex h-[500px] flex-col items-center justify-center text-center">
      <h1 className="text-8xl font-semibold transition-all duration-500 dark:text-white">
        <span className="text-8xl font-semibold text-red-600">DI</span>ZETO
      </h1>
      <h2 className="mx-5 text-lg font-semibold text-gray-900 transition-all duration-500 dark:text-white">PRODUCTION • ENTERTAINMENT • TALENT • MUSIC RECORD</h2>
    </section>
  );
}
