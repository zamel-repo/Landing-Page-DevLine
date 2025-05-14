"use client"

import { useState } from "react"
import { toast } from "sonner"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa"
import CurvedLines from "./CurvedLines"
import Image from "next/image"

export default function Footer() {
  const [email, setEmail] = useState("")

  const handleRegister = () => {
    if (!email.trim()) {
      toast("Please enter your email", {
        description: "The email field cannot be empty.",
      })
      return
    }

    toast("Confirmation email is on its way", {
      description: "Check your inbox to verify your registration.",
    })

    setEmail("")
  }

  return (
    <footer className="bg-[var(--color-brand)] text-white">
      <div className="container max-w-7xl mx-auto px-4 py-12 space-y-12">
        {/* Call to Action */}
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">What are you waiting for?</h2>
          <p className="text-sm md:text-base mb-15">
            Register now to get the best delivery experience for you and your clients in Iraq!
          </p>
          <div className="flex flex-col sm:flex-row justify-start items-center gap-4 mt-4">
            <Input
              id="email"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="max-w-sm rounded-full px-6 py-4 bg-white dark:bg-white text-black placeholder:text-gray-500"
            />
            <Button
              onClick={handleRegister}
              className="max-w-sm w-full sm:w-auto rounded-full bg-black text-white px-6 py-4 hover:bg-black/80 transition cursor-pointer"
            >
              register now
            </Button>
          </div>
          <div className="mb-40"></div>
        </div>

        {/* Footer layout container */}
        <div className="flex flex-col md:flex-row justify-between gap-8 text-sm">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image src="/logo.png" alt="Taint Logo" width={80} height={80} className="w-20 h-auto" />
          </div>

          {/* Company + Help Center - in one div, split into 2 columns */}
          <div className="grid grid-cols-2 gap-8 flex-1">
            {/* The Company */}
            <div className="space-y-2">
              <h4 className="font-semibold font-bold text-[16px]">The company</h4>
              <ul className="space-y-1">
                <li className="text-gray-200">Who are we</li>
                <li className="text-gray-200">Services</li>
                <li className="text-gray-200 flex items-center gap-1">
                  Jobs <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">12</span>
                </li>
                <li className="text-gray-200">Branches</li>
              </ul>
            </div>

            {/* Help Center */}
            <div className="space-y-2">
              <h4 className="font-semibold font-bold text-[16px]">Help center</h4>
              <ul className="space-y-1">
                <li className="text-gray-200">Common questions</li>
                <li className="text-gray-200">Contact us</li>
                <li className="text-gray-200">Register as merchant</li>
              </ul>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex flex-col gap-3 flex-shrink-0">
            <SocialButton icon={<FaFacebookF />} label="Facebook" />
            <SocialButton icon={<FaInstagram />} label="Instagram" />
            <SocialButton icon={<FaLinkedinIn />} label="LinkedIn" />
            <div className="relative w-full overflow-hidden">
              <CurvedLines className="bottom-0 left-0 h-full w-full" />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-center text-xs opacity-70">
          © 2025 Leader Express Delivery Company. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

// Social Button Component
function SocialButton({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="flex items-center w-[150px] md:w-[200px] gap-3 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition text-white cursor-pointer">
      <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-black text-base">
        {icon}
      </span>
      <span className="text-sm">{label}</span>
    </button>
  )
}
