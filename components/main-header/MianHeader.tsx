"use client";

import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import LogoContainer from "./LogoContainer";
import CTA from "./CTA";
import HambergurMenu from "./HambergurMenu";

export default function MianHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky inset-x-0 top-0 z-30 w-full">
      <div
        className={`pointer-events-none absolute inset-0 border-b transition-all ${scrolled ? "border-neutral-100 bg-white/75 backdrop-blur-lg" : "border-transparent"}`}
      ></div>
      <div className="mx-auto w-full max-w-screen-lg px-3 lg:px-4 xl:px-0">
        <div className="flex h-14 items-center justify-between gap-3.5 lg:gap-0">
          <LogoContainer />
          <Navbar />
          <CTA />
          <HambergurMenu />
        </div>
      </div>
    </header>
  );
}
