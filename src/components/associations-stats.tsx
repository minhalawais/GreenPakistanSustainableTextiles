"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function AssociationStats() {
  const sliderRef = useRef<HTMLDivElement>(null)

  // Add touch event handlers for mobile swiping
  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    let startX: number
    let scrollLeft: number

    const onTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].pageX - slider.offsetLeft
      scrollLeft = slider.scrollLeft
    }

    const onTouchMove = (e: TouchEvent) => {
      if (!startX) return
      const x = e.touches[0].pageX - slider.offsetLeft
      const walk = (x - startX) * 2 // Scroll speed multiplier
      slider.scrollLeft = scrollLeft - walk
    }

    slider.addEventListener("touchstart", onTouchStart)
    slider.addEventListener("touchmove", onTouchMove)

    return () => {
      slider.removeEventListener("touchstart", onTouchStart)
      slider.removeEventListener("touchmove", onTouchMove)
    }
  }, [])

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" })
    }
  }

  const stats = [
    {
      label: "Total Member Companies",
      value: "2000+",
      change: "+5.2%",
      color: "bg-blue-500",
      textColor: "text-blue-600",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
    {
      label: "Total Registered Employees",
      value: "82,500+",
      change: "+3.8%",
      color: "bg-purple-500",
      textColor: "text-purple-600",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      label: "Total Export Volume",
      value: "$58 Million",
      change: "+12.1%",
      color: "bg-green-500",
      textColor: "text-green-600",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      label: "Export Volume to Germany",
      value: "$1.52 Billion",
      change: "+8.4%",
      color: "bg-cyan-500",
      textColor: "text-cyan-600",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      ),
    },
    {
      label: "Export Volume to France",
      value: "$484.79 Million",
      change: "+6.7%",
      color: "bg-amber-500",
      textColor: "text-amber-600",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z"
          />
        </svg>
      ),
    },
    {
      label: "Export Volume to Italy",
      value: "$1.15 Billion",
      change: "+9.3%",
      color: "bg-pink-500",
      textColor: "text-pink-600",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      label: "Key Products Manufactured (Part 1)",
      value: ["Cricket gear (bats, balls, pads, gloves)", "Hockey sticks and accessories"],
      color: "bg-gray-700",
      textColor: "text-gray-700",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
      ),
    },
    {
      label: "Key Products Manufactured (Part 2)",
      value: ["Fitness and Gym Wears", "Footballs (hand-stitched and machine-stitched)"],
      color: "bg-gray-700",
      textColor: "text-gray-700",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      label: "Key Products Manufactured (Part 3)",
      value: ["Sportswear and protective gear (Shoulder & Elbow Belt)"],
      color: "bg-gray-700",
      textColor: "text-gray-700",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ]

  return (
    <div className="relative py-4 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4">
        
        <div className="relative">
          {/* Fixed navigation arrows - Enhanced for better visibility */}
          <div className="absolute top-1/2 left-0 right-0 flex justify-between z-20 px-0 -translate-y-1/2 pointer-events-none w-full">
            <button
              onClick={scrollLeft}
              className="p-3 rounded-full bg-white/90 shadow-lg hover:bg-purple-50 transition-all pointer-events-auto border border-purple-100 group"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-6 w-6 text-purple-600 group-hover:text-purple-800" />
            </button>
            <button
              onClick={scrollRight}
              className="p-3 rounded-full bg-white/90 shadow-lg hover:bg-purple-50 transition-all pointer-events-auto border border-purple-100 group"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-6 w-6 text-purple-600 group-hover:text-purple-800" />
            </button>
          </div>

          {/* Stats slider */}
          <div
            ref={sliderRef}
            className="flex overflow-x-auto px-4 gap-6 scrollbar-hide -mx-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="flex-shrink-0 w-72 bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 group"
                style={{height:"166px"}}
              >
                <div className={`h-2.5 ${stat.color}`}></div>
                <div className="p-6">
                  <div className="flex items-start">
                    <div className={`p-3 rounded-lg ${stat.color}/15 ${stat.textColor} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      {stat.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-bold text-gray-700 mb-2">{stat.label}</h3>
                      {Array.isArray(stat.value) ? (
                        <ul className="list-disc pl-5 space-y-2 mt-3">
                          {stat.value.map((item, i) => (
                            <li key={i} className="text-sm font-medium text-gray-800">
                              {item}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <div className="flex items-baseline">
                          <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                          {stat.change && (
                            <span className="ml-2 text-sm font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                              {stat.change}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Gradient masks for scroll indication */}
      <div className="absolute pointer-events-none left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-purple-50 to-transparent z-10"></div>
      <div className="absolute pointer-events-none right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-purple-50 to-transparent z-10"></div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}