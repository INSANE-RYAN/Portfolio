"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Home", korean: "홈", href: "#home" },
    { name: "About", korean: "소개", href: "#about" },
    { name: "Projects", korean: "프로젝트", href: "#projects" },
    { name: "Blog", korean: "블로그", href: "#blog" },
    { name: "Contact", korean: "연락", href: "#contact" },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border pattern-hanji">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <div className="flex flex-col">
              <h1 className="text-2xl font-serif font-bold text-primary tracking-tight">Sarthak</h1>
              <span className="text-xs korean-text text-muted-foreground tracking-wider">사르탁 • 창의적 개발자</span>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative text-muted-foreground hover:text-primary px-2 py-2 text-sm font-medium tracking-wide transition-all duration-300 group"
                >
                  <div className="flex flex-col items-center">
                    <span>{item.name}</span>
                    <span className="text-xs korean-text opacity-70">{item.korean}</span>
                  </div>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <div className="ml-4 pl-4 border-l border-border">
                <ThemeSwitcher />
              </div>
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <ThemeSwitcher />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="hover:bg-accent hover:text-primary"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-4 pt-4 pb-6 space-y-3 bg-card/95 backdrop-blur-sm border-t border-border pattern-dancheong">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-base font-medium text-muted-foreground hover:text-primary hover:bg-accent/50 rounded-lg transition-all duration-200 border border-transparent hover:border-primary/20"
                  onClick={() => setIsOpen(false)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-between items-center">
                    <span>{item.name}</span>
                    <span className="text-sm korean-text text-primary/70">{item.korean}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
