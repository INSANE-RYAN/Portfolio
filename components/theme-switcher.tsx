"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "@/components/theme-provider"
import { Palette, Check } from "lucide-react"

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme()

  const themes = [
    {
      value: "korean-traditional",
      label: "전통 Traditional",
      description: "Classic Dancheong colors",
      category: "Classic",
    },
    {
      value: "korean-modern",
      label: "현대 Modern",
      description: "Contemporary Korean style",
      category: "Classic",
    },
    {
      value: "korean-vibrant",
      label: "활기 Vibrant",
      description: "Bold and energetic",
      category: "Classic",
    },
    {
      value: "korean-minimal",
      label: "간결 Minimal",
      description: "Clean and simple",
      category: "Classic",
    },
    {
      value: "korean-sunset",
      label: "석양 Sunset",
      description: "Warm sunset hues",
      category: "Nature",
    },
    {
      value: "korean-ocean",
      label: "바다 Ocean",
      description: "Deep ocean blues",
      category: "Nature",
    },
    {
      value: "korean-forest",
      label: "숲 Forest",
      description: "Lush forest greens",
      category: "Nature",
    },
    {
      value: "korean-cherry",
      label: "벚꽃 Cherry",
      description: "Cherry blossom pink",
      category: "Nature",
    },
    {
      value: "korean-autumn",
      label: "가을 Autumn",
      description: "Autumn maple colors",
      category: "Seasonal",
    },
    {
      value: "korean-midnight",
      label: "자정 Midnight",
      description: "Mystical night theme",
      category: "Seasonal",
    },
  ]

  const themesByCategory = themes.reduce(
    (acc, theme) => {
      if (!acc[theme.category]) {
        acc[theme.category] = []
      }
      acc[theme.category].push(theme)
      return acc
    },
    {} as Record<string, typeof themes>,
  )

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2 bg-transparent hover:bg-accent/50 transition-colors">
          <Palette className="h-4 w-4" />
          <span className="hidden sm:inline">테마 Theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-64 max-h-96 overflow-y-auto">
        <DropdownMenuLabel className="text-center korean-text">테마 선택 • Choose Theme</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {Object.entries(themesByCategory).map(([category, categoryThemes], categoryIndex) => (
          <div key={category}>
            {categoryIndex > 0 && <DropdownMenuSeparator />}
            <DropdownMenuLabel className="text-xs text-muted-foreground px-2 py-1">
              {category === "Classic" && "클래식 Classic"}
              {category === "Nature" && "자연 Nature"}
              {category === "Seasonal" && "계절 Seasonal"}
            </DropdownMenuLabel>
            {categoryThemes.map((themeOption) => (
              <DropdownMenuItem
                key={themeOption.value}
                onClick={() => setTheme(themeOption.value as any)}
                className={`cursor-pointer transition-colors hover:bg-accent/80 ${
                  theme === themeOption.value ? "bg-accent text-accent-foreground" : ""
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex flex-col">
                    <span className="font-medium text-sm">{themeOption.label}</span>
                    <span className="text-xs text-muted-foreground">{themeOption.description}</span>
                  </div>
                  {theme === themeOption.value && <Check className="h-4 w-4 text-primary" />}
                </div>
              </DropdownMenuItem>
            ))}
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
