"use client"

import { useEffect, useState } from "react"

export default function BuildingPage() {
  const [dots, setDots] = useState(".")

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "." : prev + "."))
    }, 600)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-light tracking-tight mb-8">Servera Sandbox</h1>

        <div className="flex items-center justify-center gap-3 text-gray-400 mb-8">
          <div className="w-5 h-5 border-2 border-gray-700 border-t-white rounded-full animate-spin"></div>
          <p className="text-sm md:text-base font-light tracking-wider">SITE UNDER CONSTRUCTION{dots}</p>
        </div>

        <p className="text-gray-400 text-sm md:text-base font-extralight mb-8">
          We&apos;re building something amazing.
        </p>
      </div>
    </div>
  )
}
