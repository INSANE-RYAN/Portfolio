"use client"

import { useTheme } from "@/components/theme-provider"
import { useEffect, useState } from "react"

interface AnimatedBackgroundProps {
  variant?: "hero" | "section" | "subtle"
  className?: string
}

export default function AnimatedBackground({ variant = "section", className = "" }: AnimatedBackgroundProps) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const getBackgroundPattern = () => {
    switch (theme) {
      case "korean-traditional":
        return variant === "hero" ? "pattern-dancheong" : "pattern-hanji"
      case "korean-modern":
        return variant === "hero" ? "pattern-geometric-flow" : "pattern-dots"
      case "korean-vibrant":
        return variant === "hero" ? "pattern-flowing-waves" : "pattern-korean-wave"
      case "korean-minimal":
        return variant === "hero" ? "pattern-grid" : "pattern-dots"
      case "korean-sunset":
        return variant === "hero" ? "pattern-sunset-glow" : "pattern-flowing-waves"
      case "korean-ocean":
        return variant === "hero" ? "pattern-flowing-waves" : "pattern-hanji"
      case "korean-forest":
        return variant === "hero" ? "pattern-mountain-mist" : "pattern-geometric-flow"
      case "korean-cherry":
        return variant === "hero" ? "pattern-floating-petals" : "pattern-hanji"
      case "korean-autumn":
        return variant === "hero" ? "pattern-flowing-waves" : "pattern-korean-wave"
      case "korean-midnight":
        return variant === "hero" ? "pattern-aurora" : "pattern-geometric-flow"
      default:
        return "pattern-hanji"
    }
  }

  const getOpacity = () => {
    switch (variant) {
      case "hero":
        return "opacity-20"
      case "section":
        return "opacity-10"
      case "subtle":
        return "opacity-5"
      default:
        return "opacity-10"
    }
  }

  const getAnimatedElements = () => {
    if (variant !== "hero") return null

    const cherryBlossomLeaves =
      theme === "korean-cherry" ? (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Falling cherry blossom leaves */}
          <div className="absolute top-0 left-[10%] w-3 h-3 bg-primary/60 rounded-full animate-fall-1"></div>
          <div className="absolute top-0 left-[25%] w-2 h-2 bg-secondary/70 rounded-full animate-fall-2"></div>
          <div className="absolute top-0 left-[40%] w-2.5 h-2.5 bg-accent/50 rounded-full animate-fall-3"></div>
          <div className="absolute top-0 left-[60%] w-2 h-2 bg-primary/50 rounded-full animate-fall-4"></div>
          <div className="absolute top-0 left-[75%] w-3 h-3 bg-secondary/60 rounded-full animate-fall-5"></div>
          <div className="absolute top-0 left-[90%] w-2.5 h-2.5 bg-accent/40 rounded-full animate-fall-1"></div>

          {/* Additional scattered leaves */}
          <div className="absolute top-0 left-[15%] w-1.5 h-1.5 bg-primary/40 rounded-full animate-fall-2"></div>
          <div className="absolute top-0 left-[35%] w-2 h-2 bg-secondary/50 rounded-full animate-fall-3"></div>
          <div className="absolute top-0 left-[55%] w-1.5 h-1.5 bg-accent/60 rounded-full animate-fall-4"></div>
          <div className="absolute top-0 left-[70%] w-2 h-2 bg-primary/45 rounded-full animate-fall-5"></div>
          <div className="absolute top-0 left-[85%] w-1.5 h-1.5 bg-secondary/40 rounded-full animate-fall-1"></div>

          {/* More subtle background leaves */}
          <div className="absolute top-0 left-[5%] w-1 h-1 bg-primary/30 rounded-full animate-fall-3"></div>
          <div className="absolute top-0 left-[20%] w-1 h-1 bg-secondary/35 rounded-full animate-fall-4"></div>
          <div className="absolute top-0 left-[45%] w-1 h-1 bg-accent/25 rounded-full animate-fall-5"></div>
          <div className="absolute top-0 left-[65%] w-1 h-1 bg-primary/25 rounded-full animate-fall-1"></div>
          <div className="absolute top-0 left-[80%] w-1 h-1 bg-secondary/30 rounded-full animate-fall-2"></div>
          <div className="absolute top-0 left-[95%] w-1 h-1 bg-accent/35 rounded-full animate-fall-3"></div>
        </div>
      ) : null

    return (
      <>
        {cherryBlossomLeaves}

        {/* Floating particles */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-3 h-3 bg-primary/40 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-2 h-2 bg-secondary/50 rounded-full animate-float-delayed"></div>
          <div className="absolute bottom-32 left-32 w-2.5 h-2.5 bg-accent/45 rounded-full animate-float-slow"></div>
          <div className="absolute top-60 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-float"></div>
          <div className="absolute bottom-40 right-1/3 w-3 h-3 bg-secondary/35 rounded-full animate-float-delayed"></div>
          <div className="absolute top-1/3 right-1/2 w-1.5 h-1.5 bg-accent/40 rounded-full animate-float-slow"></div>
          <div className="absolute top-1/2 left-20 w-2 h-2 bg-primary/25 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-40 w-2.5 h-2.5 bg-secondary/30 rounded-full animate-float-delayed"></div>
        </div>

        {/* Geometric shapes */}
        <div className="absolute top-32 left-16 w-24 h-24 border-2 border-primary/30 rotate-45 animate-spin-slow"></div>
        <div className="absolute top-48 right-24 w-20 h-20 border-2 border-secondary/25 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-48 left-24 w-16 h-16 bg-accent/20 rotate-12 animate-bounce-slow"></div>
        <div
          className="absolute top-20 right-1/3 w-12 h-12 border border-primary/20 transform rotate-45 animate-spin-slow"
          style={{ animationDirection: "reverse" }}
        ></div>
        <div className="absolute bottom-32 right-16 w-18 h-18 border-2 border-accent/25 rotate-12 animate-pulse-slow"></div>

        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-primary/20 to-transparent rounded-full blur-xl animate-drift-right"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-gradient-to-l from-secondary/15 to-transparent rounded-full blur-2xl animate-drift-left"></div>
        <div
          className="absolute top-1/2 left-1/2 w-28 h-28 bg-gradient-to-r from-accent/25 to-transparent rounded-full blur-lg animate-drift-right"
          style={{ animationDelay: "1s" }}
        ></div>
        <div className="absolute top-16 right-1/4 w-36 h-36 bg-gradient-to-r from-primary/15 to-transparent rounded-full blur-2xl animate-drift-left"></div>

        {/* Moving lines */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent animate-slide-down"></div>
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-secondary to-transparent animate-slide-down-delayed"></div>
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-slide-right"></div>
          <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent animate-slide-right-delayed"></div>
          <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-accent to-transparent animate-slide-down"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary to-transparent animate-slide-right"></div>
        </div>
      </>
    )
  }

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Base pattern layer */}
      <div className={`absolute inset-0 ${getBackgroundPattern()} ${getOpacity()}`}></div>

      {/* Theme-specific gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>

      {/* Animated elements for hero variant */}
      {getAnimatedElements()}
    </div>
  )
}
