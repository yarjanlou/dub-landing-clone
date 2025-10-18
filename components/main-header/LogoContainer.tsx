import Link from "next/link";
import Logo from "@/public/dub-logo-md.svg";

export default function LogoContainer() {
  return (
    <div className="flex h-14 grow basis-0 items-center justify-start">
      <Link href="/">
        <Logo className="block h-[40px]" />
      </Link>
    </div>
  );
}
