"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../atoms";
import Link from "next/link";

interface NavbarProps {
  navigation: { link: { id: string; label: string; url: string | null }[] };
}

export default function Navbar({ navigation }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav>
        <ul
          className={`w-full h-[calc(100dvh-64px)] md:h-auto text-center bg-gray-50 dark:bg-slate-900 right-0 md:flex md:gap-6 absolute md:static top-16 transition-all duration-300 ${
            !isOpen ? "-translate-x-full md:translate-x-0" : ""
          }`}
        >
          {navigation.link.map((link) => (
            <li key={link.id}>
              <Link
                className="font-semibold inline-flex py-2 px-4 rounded hover:bg-gray-200 dark:hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:dark:ring-gray-50 focus-visible:ring-slate-900 transition-colors text-gray-900 dark:text-gray-100"
                href={link.url ? `/${link.url.replace(/^\/+/, "")}` : "/"}
              >
                {link.label}
              </Link>
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
    </>
  );
}
