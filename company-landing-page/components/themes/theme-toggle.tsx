"use client"

import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { FaMoon, FaSun } from "react-icons/fa"

export function ThemeToggle() {
    // This component is used to toggle between light and dark themes.
    const {theme, setTheme} = useTheme()
    return (
        <Button variant="outline" size="icon" className="rounded-full cursor-pointer" onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark")
            if (typeof window !== "undefined") { 
                localStorage.setItem("theme", theme === "dark" ? "light" : "dark")
            }
        }}>
            <FaSun className="absolute h-10 w-10 rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
            <FaMoon className="absolute h-10 w-10 rotate-90 scale-0 dark:-rotate-0 dark:scale-100" />
        </Button>
    )
}