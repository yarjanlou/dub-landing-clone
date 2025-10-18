import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="hidden lg:block">
      <ul className="flex text-sm font-bold text-neutral-700">
        <li>
          <Link href="#" className="navlink">
            Product
          </Link>
        </li>
        <li>
          <Link href="#" className="navlink">
            Solutions
          </Link>
        </li>
        <li>
          <Link href="#" className="navlink">
            Resources
          </Link>
        </li>
        <li>
          <Link href="#" className="navlink">
            Enterprise
          </Link>
        </li>
        <li>
          <Link href="#" className="navlink">
            Customers
          </Link>
        </li>
        <li>
          <Link href="#" className="navlink">
            Pricing
          </Link>
        </li>
      </ul>
    </nav>
  );
}
