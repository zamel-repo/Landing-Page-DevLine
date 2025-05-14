import React from "react";
import { Button } from "@/components/ui/button";
import CurvedLines from "./CurvedLines";

export default function AboutUs() {
  return (
    <section id="about" className="relative  text-black dark:text-white py-50 overflow-hidden">
      <div className="absolute top-0 left-0 h-full w-full sm:w-1/2 overflow-hidden">
        <CurvedLines className="top-0 left-0 h-full w-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">About us</h2>

          <p className="text-base md:text-md mb-8">
            Welcome to{" "}
            <span className="text-[var(--color-brand)] font-bold">
              Focus Marketing Solutions
            </span>
            ! We&apos;re a creative team dedicated to driving your business
            forward with innovative marketing strategies. From digital marketing
            to social media management, we&apos;re here to help you succeed.{" "}
            <span className="text-[var(--color-brand)] font-bold">
              Let&apos;s build something extraordinary together.
            </span>
          </p>

          <div className="w-full max-w-xs mx-auto">
          <Button
            variant="outline"
            className="rounded-full border-2 bord-col text-[#9350f2] hover:text-text-[#9350f2] sm:text-[var(--color-brand)] sm: py-5 w-full sm:w-[150px]">
            Read more
          </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
// rounded-full 
// border-[#9350f2] text-[#9350f2] 
// hover:bg-[var(--color-brand)]
// transition-all px-6 py-2 
// w-full sm:w-auto mx-auto cursor-pointer
// border-[#9350f2] max-sm:text-[#9350f2]