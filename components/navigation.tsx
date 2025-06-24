"use client"

import * as React from "react"
import { Logo } from "@/components/logo"
import { Menu, X } from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"
import { usePathname } from "next/navigation"

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()
  const isPortuguese = pathname.startsWith("/pt")

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    
    // Close mobile menu first
    setIsOpen(false)
    
    // Then scroll to section after a small delay to allow menu to close
    setTimeout(() => {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 300)
  }

  // Prevent body scroll when mobile menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Menu items with translations (now using the same items for both mobile and desktop)
  const menuItems = [
    { id: 'home', en: 'Home', pt: 'Início' },
    { id: 'bitrix24', en: 'Bitrix24', pt: 'Bitrix24' },
    { id: 'services', en: 'Services', pt: 'Serviços' },
    { id: 'about', en: 'About', pt: 'Sobre' },
    { id: 'ai', en: 'AI Solutions', pt: 'Soluções em IA' },
    { id: 'automation', en: 'Automation', pt: 'Automação' },
    { id: 'contact', en: 'Contact', pt: 'Contato' }
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo height={40} />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
              >
                {isPortuguese ? item.pt : item.en}
              </a>
            ))}
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <LanguageSwitcher />
            <button
              onClick={(e) => {
                e.preventDefault()
                setIsOpen(!isOpen)
              }}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-colors"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`${
          isOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'
        } md:hidden fixed inset-x-0 top-20 bg-white shadow-lg z-40 transition-all duration-300 ease-in-out max-h-[calc(100vh-5rem)] overflow-y-auto`}
      >
        <div className="py-2">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              className="block px-8 py-4 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-primary transition-colors"
            >
              {isPortuguese ? item.pt : item.en}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}