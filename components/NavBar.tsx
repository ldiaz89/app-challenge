"use client";
import Image from "next/image";
import HamburgerMenu from "./HamburgerMenu";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { NavBarProps } from "@/types";

export default function NavBar({ navItems }: NavBarProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between  items-center border-b px-5 w-full h-[60px]">
      <div className="text-xl font-bold m-[2px] md:m-5">
        <Image src="/Logo.svg" alt="Logo" width={50} height={50} />
      </div>

      <div className="hidden md:flex md:flex-1">
        {navItems.map((item, index) => (
          <Link
            key={`${item.label}-${index}`}
            href={item.route}
            className="relative mx-2 px-5 hover:border-b-[3px] hover:cursor-pointer hover:text-red-600 hover:border-red-600 pb-[25px] mt-[10px] h-full flex items-center justify-center group"
          >
            <p className="text-black group-hover:text-red-600">{item.label}</p>
          </Link>
        ))}
      </div>

      <HamburgerMenu isOpen={isOpen} toggleMenu={() => setIsOpen(!isOpen)} />
    </nav>
  );
}
