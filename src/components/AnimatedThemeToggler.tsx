"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { MoonIcon, Sun } from "lucide-react"
import { flushSync } from "react-dom"
import { useTheme } from "@/components/ThemeProvider"
import { cn } from "../lib/utils"


interface AnimatedThemeTogglerProps
  extends React.ComponentPropsWithoutRef<"button"> {
  duration?: number
}

export const AnimatedThemeToggler = ({
  className,
  duration = 400,
  ...props
}: AnimatedThemeTogglerProps) => {
  const { theme, setTheme } = useTheme()
  const [isDark, setIsDark] = useState(theme == "dark")
  const [iconTheme, setIconTheme] = useState(theme)
  const [isScrolled, setIsScrolled] = useState(false)

  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleScroll)
    handleScroll() // Set initial state

    const updateTheme = () => {
      setIsDark(theme === "dark")
    }

    updateTheme()

    const observer = new MutationObserver(updateTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [])

  const toggleTheme = useCallback(async () => {
    if (!buttonRef.current) return

    // Update icon instantly
    const newTheme = isDark ? "light" : "dark"
    setIconTheme(newTheme)
    setIsDark(!isDark)

    await document.startViewTransition(() => {
      flushSync(() => {
        setTheme(newTheme)
      })
    }).ready

    const { top, left, width, height } =
      buttonRef.current.getBoundingClientRect()
    const x = left + width / 2
    const y = top + height / 2
    const maxRadius = Math.hypot(
      Math.max(left, window.innerWidth - left),
      Math.max(top, window.innerHeight - top)
    )

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    )
  }, [isDark, duration])

  return (
    <div className="rounded-full bg-background/80 backdrop-blur-sm border border-border/50 p-2 w-[42px] h-[42px] shadow-sm">
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      className={cn(className)}
      {...props}
    >
      {iconTheme === "dark" ? <Sun className="h-5 w-5 sm:h-6 sm:w-6 text-foreground" /> : <MoonIcon className="h-5 w-5 sm:h-6 sm:w-6 text-foreground" />}
    </button>
    </div>
  )
}
