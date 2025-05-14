"use client";

import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { ThemeToggle } from "../themes/theme-toggle";
import { IoMdCloseCircle } from "react-icons/io";
import Image from "next/image";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1028) {
        setIsDrawerOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setTimeout(() => {
      setIsDrawerOpen(false);
    }, 100);
  };

  return (
    <div className="bg-white/20 dark:bg-black/20 backdrop-blur sticky top-0 py-4 z-50">
      <header className="container mx-auto flex items-center justify-between flex-row-reverse lg:flex-row">
        {/* Logo - always visible */}
        <div className="flex items-center">
        <Image
            src="/logo.png"
            alt="Logo"
            width={80}
            height={40}
            className="h-10 w-20 object-contain"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-6">
          <button onClick={() => handleNavClick("home")} className="text-sm font-medium hover:text-[var(--color-brand-light)] cursor-pointer">Home</button>
          <button onClick={() => handleNavClick("about")} className="text-sm font-medium hover:text-[var(--color-brand-light)] cursor-pointer">About Us</button>
          <button onClick={() => handleNavClick("services")} className="text-sm font-medium hover:text-[var(--color-brand-light)] cursor-pointer">Services</button>
          <button onClick={() => handleNavClick("branches")} className="text-sm font-medium hover:text-[var(--color-brand-light)] cursor-pointer">Branches</button>
          <button onClick={() => handleNavClick("jobs")} className="text-sm font-medium hover:text-[var(--color-brand-light)] flex items-center gap-1 cursor-pointer">
            Jobs
            <span className="bg-[var(--color-brand)] text-white rounded-tl-[15px] rounded-br-[15px] font-bold text-xs py-[3px] px-[8px]">12</span>
          </button>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <button onClick={() => handleNavClick("contact")} className="border border-[var(--color-border)] px-4 py-2 rounded-full hover:bg-gray-100 dark:hover:text-black transition cursor-pointer">
            Contact Us
          </button>
          <button onClick={() => handleNavClick("join")} className="bg-[var(--color-brand)] text-white px-4 py-2 rounded-full transition cursor-pointer">
            Join Us
          </button>
          <ThemeToggle />
        </div>

        {/* Mobile Drawer Trigger */}
        <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
          <DrawerTrigger asChild>
            <button className="lg:hidden text-lg cursor-pointer">
              <FaBars />
            </button>
          </DrawerTrigger>
          <DrawerContent className="bg-white dark:bg-black">
            <div className="container mx-auto px-4 py-6 h-full flex flex-col">
              <DrawerHeader className="flex justify-between items-center mb-6 px-0">
                <DrawerTitle className="sr-only">Navigation Menu</DrawerTitle>
                {/* <img src="/logo.png" alt="Logo" className="h-10 w-20 pointer-events-none select-none" /> */}
                <DrawerClose asChild>
                <IoMdCloseCircle className="text-lg focus:outline-none cursor-pointer"/>
                </DrawerClose>
              </DrawerHeader>

              {/* Nav links */}
              <nav className="flex flex-col gap-4 text-left w-full">
                <button onClick={() => handleNavClick("home")} className="text-sm font-medium hover:text-[var(--color-brand-light)] cursor-pointer">Home</button>
                <button onClick={() => handleNavClick("about")} className="text-sm font-medium hover:text-[var(--color-brand-light)] cursor-pointer">About Us</button>
                <button onClick={() => handleNavClick("services")} className="text-sm font-medium hover:text-[var(--color-brand-light)] cursor-pointer">Services</button>
                <button onClick={() => handleNavClick("branches")} className="text-sm font-medium hover:text-[var(--color-brand-light)] cursor-pointer">Branches</button>
                <button onClick={() => handleNavClick("jobs")} className="text-sm font-medium hover:text-[var(--color-brand-light)] cursor-pointer">Jobs
                  <span className="bg-[var(--color-brand)] text-white rounded-tl-[15px] rounded-br-[15px] font-bold text-xs ml-1 py-[3px] px-[8px] cursor-pointer">12</span>
                </button>
              </nav>

              {/* Buttons */}
              <DrawerFooter className="flex flex-col gap-4 items-center w-full mt-auto pb-6 px-0">
                <button onClick={() => handleNavClick("email")} className="border border-[var(--color-border)] text-[var(--color-text)] px-4 py-2 rounded-full hover:bg-gray-100 dark:hover:text-black transition cursor-pointer w-full">
                  Contact Us
                </button>
                <button onClick={() => handleNavClick("email")} className="bg-[var(--color-brand)] text-white px-4 py-2 rounded-full transition cursor-pointer w-full">
                  Join Us
                </button>
                <ThemeToggle />
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
      </header>
    </div>
  );
}
