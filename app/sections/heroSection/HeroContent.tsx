import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export default function HeroContent() {
  return (
    <>
      <div className="relative mx-auto flex w-full max-w-2xl flex-col items-center gap-6 px-4 text-center">
        <Link
          href="#"
          className="group relative flex items-center justify-between rounded-2xl border-[1.2px] border-neutral-300 bg-white pr-1.5 pl-4 text-xs font-bold drop-shadow-xs transition-all hover:bg-neutral-50"
        >
          <div className="py-1.5 pr-2.5 md:border-r md:border-neutral-300 md:pr-3">
            <span>Introducing Dub Partners</span>
          </div>
          <div className="hidden py-1.5 pr-[7px] pl-3 text-neutral-500 md:inline-block">
            <span>Read more</span>
          </div>
          <span className="inline-flex h-[16px] w-[16px] items-center justify-center rounded-full bg-neutral-100 text-neutral-500">
            <FiArrowUpRight className="inline-block stroke-4 text-[10px] transition-all group-hover:translate-x-[1.3px] group-hover:-translate-y-[1.3px]" />
          </span>
        </Link>
        <h1 className="text-4xl font-semibold text-neutral-900 lg:text-5xl">
          Turn clicks into revenue
        </h1>
        <p className="max-w-xl text-base text-pretty text-neutral-600 lg:text-[21px]">
          Dub is the modern link attribution platform for short links,
          conversion tracking, and affiliate programs.
        </p>
      </div>
      <div className="relative mt-10 flex items-center justify-center gap-4">
        <PrimaryButton customStyle="h-[38px] px-5">
          Start for free
        </PrimaryButton>
        <SecondaryButton customStyle="h-[38px] px-5">
          Get a demo
        </SecondaryButton>
      </div>
    </>
  );
}
