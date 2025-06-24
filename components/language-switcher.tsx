"use client"

import { usePathname, useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  
  const switchLanguage = (locale: string) => {
    // Get the current path without the locale prefix
    const currentPath = pathname.replace(/^\/pt/, '') || '/'
    
    // Construct the new path based on the selected locale
    const newPath = locale === 'pt' ? `/pt${currentPath}` : currentPath
    
    // Navigate to the new path
    router.push(newPath)
  }

  const isPortuguese = pathname.startsWith("/pt")

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => switchLanguage("en")}
        className={`w-8 h-8 ${!isPortuguese ? "opacity-100" : "opacity-50 hover:opacity-75"}`}
        title="English"
      >
        <Image
          src="https://flagcdn.com/w40/us.png"
          alt="English"
          width={20}
          height={20}
          className="rounded-sm"
        />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => switchLanguage("pt")}
        className={`w-8 h-8 ${isPortuguese ? "opacity-100" : "opacity-50 hover:opacity-75"}`}
        title="Português"
      >
        <Image
          src="https://flagcdn.com/w40/br.png"
          alt="Português"
          width={20}
          height={20}
          className="rounded-sm"
        />
      </Button>
    </div>
  )
}