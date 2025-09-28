"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../atoms";
import Logo from "../atoms/logo";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["Home", "About", "Portfolio", "Contact"];

  return (
    <header className="flex justify-between items-center py-2 md:py-3 relative">
      <Logo />
      
      <nav>
        <ul
          className={`${
            !isOpen && "-translate-x-full md:translate-x-0"
          } w-full h-[calc(100dvh-64px)] text-center md:h-auto bg-gray-50 dark:bg-slate-900 right-0 md:flex md:gap-2 absolute md:static top-16 transition-all duration-300`}
        >
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="
                  font-semibold
                  inline-flex py-2 px-4 rounded-sm
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:dark:ring-gray-50
                  focus-visible:ring-slate-900

                  transition-colors
                "
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <Button
        variant="iconOnly"
        iconStart={isOpen ? <X size={24} /> : <Menu size={24} />}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
        className="md:hidden"
      />
    </header>
  );
}
