"use client"

import { useEffect, useRef } from "react"

interface FadeInProps {
  children: React.ReactNode
  direction?: "up" | "down" | "left" | "right"
  delay?: number
  className?: string
}

export function FadeIn({ children, direction = "up", delay = 0, className = "" }: FadeInProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-in")
            }, delay)
          }
        })
      },
      {
        threshold: 0.1,
      }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [delay])

  const getTransformInitial = () => {
    switch (direction) {
      case "up":
        return "translate-y-10"
      case "down":
        return "-translate-y-10"
      case "left":
        return "translate-x-10"
      case "right":
        return "-translate-x-10"
      default:
        return "translate-y-10"
    }
  }

  return (
    <div
      ref={elementRef}
      className={`opacity-0 ${getTransformInitial()} transition-all duration-700 ease-out ${className}`}
    >
      {children}
    </div>
  )
}