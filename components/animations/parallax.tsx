"use client"

import { useEffect, useRef } from "react"

interface ParallaxProps {
  children: React.ReactNode
  speed?: number
  className?: string
}

export function Parallax({ children, speed = 0.5, className = "" }: ParallaxProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return

      const scrolled = window.scrollY
      const rect = elementRef.current.getBoundingClientRect()
      const elementTop = rect.top + scrolled

      const offset = (scrolled - elementTop) * speed
      elementRef.current.style.transform = `translateY(${offset}px)`
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return (
    <div ref={elementRef} className={`will-change-transform ${className}`}>
      {children}
    </div>
  )
}