"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import links from "@/constants/navLinks";

const Header = () => {
  const path = usePathname();

  return (
    <header className="fixed bottom-0 z-[999] flex w-full justify-center p-[2rem]">
      <nav className="flex flex-col items-center justify-center rounded-full border-[1.5px] border-[#fafafa] bg-[#2a2a2a]/50 px-[2rem] py-[1rem] backdrop-blur-sm">
        <ul className="flex gap-[1.25rem]">
          {links.map((link, i) => (
            <li key={i}>
              <Link
                href={link.href}
                className={
                  path === link.href
                    ? "text-[1rem] font-semibold text-[#4fbe9f]"
                    : "text-[0.875rem] text-white"
                }
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
export default Header;
