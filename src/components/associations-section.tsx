"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Only PSGMEA team members
const teamMembers = [
  {
    name: "MAWRA",
    role: "Assistant General Secretary",
    organization: "PSGMEA",
    association: "PSGMEA",
    image: "/images/team/mawra.png",
  },
  {
    name: "MOHSIN MASOOD",
    role: "General Secretary",
    organization: "PSGMEA",
    association: "PSGMEA",
    image: "/images/team/mohsin_masood.png",
  },
  {
    name: "ESHA AHAMD",
    role: "Sustainability Officer",
    organization: "PSGMEA",
    association: "PSGMEA",
    image: "/images/team/esha_ahamd.png",
  },
  {
    name: "SHAHZAIB",
    role: "Sustainability Officer",
    organization: "Forward sports",
    association: "PSGMEA",
    image: "/images/team/shahzaib.png",
  },
  {
    name: "ZAIN ABBAS",
    role: "Executive Manager Sustainability",
    organization: "Forward sports",
    association: "PSGMEA",
    image: "/images/team/zain_abbas.png",
  },
]

export function NominatedAssociationsCompact() {
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

  return (
    <div className="relative py-8 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        
        <div className="relative">
          {/* Fixed navigation arrows - improved visibility and positioning */}
          <div className="absolute top-1/2 left-0 right-0 flex justify-between z-20 px-0 -translate-y-1/2 pointer-events-none w-full">
            <button
              onClick={scrollLeft}
              className="p-3 rounded-full bg-white/90 shadow-lg hover:bg-green-50 transition-all pointer-events-auto border border-green-100 group"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-6 w-6 text-green-600 group-hover:text-green-800" />
            </button>
            <button
              onClick={scrollRight}
              className="p-3 rounded-full bg-white/90 shadow-lg hover:bg-green-50 transition-all pointer-events-auto border border-green-100 group"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-6 w-6 text-green-600 group-hover:text-green-800" />
            </button>
          </div>

          {/* Members slider */}
          <div
            ref={sliderRef}
            className="flex overflow-x-auto  gap-6 scrollbar-hide pb-8 -mx-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none",justifyContent: "center" }}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={`${member.name}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="flex-shrink-0 w-64"
              >
                <Card className="border border-green-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full overflow-hidden rounded-xl group">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="relative h-32 w-32 rounded-full overflow-hidden border-4 border-white shadow-lg mb-5 group-hover:scale-105 transition-transform duration-300">
                        <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 to-green-500/20" />
                        <Image
                          src={member.image || "/placeholder.svg?height=128&width=128"}
                          alt={member.name}
                          width={128}
                          height={128}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-800 group-hover:text-green-700 transition-colors">
                        {member.name}
                      </h3>
                      
                      <p className="text-sm text-green-700 font-medium mt-1">
                        {member.role}
                      </p>
                      
                      <p className="text-sm text-gray-600 mt-1">
                        {member.organization}
                      </p>
                      
                      <span className="mt-4 text-sm font-medium px-4 py-1.5 rounded-full bg-green-100 text-green-800 group-hover:bg-green-200 transition-colors">
                        PSGMEA
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Gradient masks for scroll indication */}
      <div className="absolute pointer-events-none left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-green-50 to-transparent z-10"></div>
      <div className="absolute pointer-events-none right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-green-50 to-transparent z-10"></div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}