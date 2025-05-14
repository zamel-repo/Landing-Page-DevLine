// components/HeroSection.tsx

import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section id="home" className="container text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-black dark:text-white text-center sm:text-start">
            Transform your business<br />
            with our <span className="text-[var(--color-brand-light)]">Creative</span> <br />
            <span className="text-[var(--color-brand)]">Marketing Solutions!</span>
          </h1>

          <p className="text-sm text-center sm:text-start text-gray-400 max-w-lg">
            Welcome to Focus Marketing Solutions! We’re a creative team dedicated to driving your business forward with innovative marketing strategies. From digital marketing to social media management, we’re here to help you succeed. Let’s build something extraordinary together.
          </p>

          <div className="flex gap-4 flex-wrap flex-col sm:flex-row">
            <Button className="rounded-full px-6 py-5 cursor-pointer bg-[var(--color-brand)] hover:bg-[var(--color-brand)] text-white font-bold">Join Us</Button>
            <Button variant="outline" className="rounded-full px-6 py-5 border-black text-black dark:text-white dark:border-white  cursor-pointer">
              Contact Us
            </Button>
          </div>

          {/* Bottom Left Image */}
          <div className="mt-6 max-w-md">
            <ImageWithOverlay src="/news/6.png" className="h-[150px] w-full hidden sm:block" faded  />
          </div>
        </div>

        {/* Right Side Images */}
        <div className="flex flex-col gap-4 justify-center items-center lg:items-start">
          <ImageWithOverlay src="/news/5.png" className="h-[300px] md:h-[350px] w-full hidden sm:block" />
          <ImageWithOverlay src="/news/7.png" className="h-[150px] w-[50%] hidden sm:block" faded  />
        </div>
      </div>
    </section>
  )
}

// Image with optional bottom-only overlay
function ImageWithOverlay({
    src,
    className = "",
    faded = false,
  }: {
    src: string
    className?: string
    faded?: boolean
  }) {
    return (
      <div className={`relative overflow-hidden rounded-xl ${className}`}>
        <Image
          src={src}
          alt=""
          width={500}
          height={300}
          className={`w-full h-full object-cover transition-transform duration-500 hover:scale-105 ${faded ? "faded-mask" : ""}`}
        />
      </div>
    )
  }
  