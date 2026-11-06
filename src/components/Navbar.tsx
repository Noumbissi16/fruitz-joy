import { Button } from "@/components/ui/button";
import Image from "next/image";

const links = [
  { href: "#jus", label: "Nos jus" },
  { href: "#pourquoi", label: "Pourquoi nous" },
  { href: "#histoire", label: "Notre histoire" },
];

const Navbar = () => {
  return (
    <nav
      aria-label="Navigation principale"
      className="absolute inset-x-0 top-0 z-20"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#" aria-label="Fruitzy-Joy, accueil">
          <Image
            src="/images/logo.png"
            alt="Fruitzy-Joy"
            width={520}
            height={400}
            priority
            className="h-16 w-auto"
          />
        </a>
        <div className="flex items-center gap-8">
          <ul className="hidden items-center gap-8 font-medium md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="underline-offset-4 hover:underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button asChild className="h-10 rounded-full px-5">
            <a href="#contact">Commander</a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
