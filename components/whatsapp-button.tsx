"use client"

import { MessageCircle } from "lucide-react"
import { usePathname } from 'next/navigation'

export function WhatsAppButton() {
  const pathname = usePathname()
  const isPortuguese = pathname?.startsWith('/pt')
  
  const whatsappLinks = {
    pt: "https://wa.me/5511937334632?text=Ol%C3%A1%21+Quero+conhecer+a+Crivo+%3D%29",
    en: "https://wa.me/5511937334632?text=Hello!%20I%20want%20to%20know%20more%20about%20Crivo%20%3D%29"
  }
  
  const whatsappLink = isPortuguese ? whatsappLinks.pt : whatsappLinks.en
  const label = isPortuguese ? "Fale conosco" : "Chat with us"
  const ariaLabel = isPortuguese ? "Fale conosco pelo WhatsApp" : "Contact us on WhatsApp"

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-colors z-50 flex items-center justify-center group"
      aria-label={ariaLabel}
    >
      <MessageCircle className="h-6 w-6 md:h-8 md:w-8" />
      <span className="absolute right-full mr-3 bg-gray-900 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        {label}
      </span>
    </a>
  )
}