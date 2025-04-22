"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, ExternalLink, MapPin, Package2 } from "lucide-react"

const companies = [
  {
    name: "Lali Industries (Pvt) Ltd.",
    productLine: "Sports Goods",
    location: "Sialkot",
    url: "https://www.laligroup.com/",
  },
  {
    name: "IBSONS PRIVATE LIMITED",
    productLine: "SOCCER BALLS",
    location: "Sialkot",
    url: "https://ibsons.com/",
  },
  {
    name: "Anwar Sons",
    productLine: "Sportswear, Goal Keeper Gloves, Soccer Balls",
    location: "Sialkot",
    url: "https://www.anwarsons.com.pk/",
  },
  {
    name: "Forward Sports Pvt Ltd",
    productLine: "Soccer Balls and Sports Bags",
    location: "Sialkot",
    url: "https://sports.forward.pk/",
  },
  {
    name: "BROMELY SPORTS",
    productLine: "SUBLIMATION CUSTOM SPORTS WEAR & BONDED SPORTS GARMENTS",
    location: "Sialkot",
    url: "https://bromelysports.com/",
  },
  {
    name: "SIX STARS SPORTS APPAREL PVT LTD",
    productLine: "SPORTS APPAREL",
    location: "Sialkot",
    url: "https://www.sixstars.com.pk/",
  },
  {
    name: "SWISSPO SPORTS MFG CO PVT LTD",
    productLine: "LEATHER GLOVES + TEXTILE GARMENTS",
    location: "Sialkot",
    url: "https://www.swisspo.com/",
  },
  {
    name: "Matrix Intech",
    productLine: "Goal keeper gloves, Active wears, Gym wears",
    location: "Daska",
    url: "https://psgmea.org.pk/members/matrix-intech/",
  },
  {
    name: "Eclipse Sports (Pvt) Ltd",
    productLine: "Sports & Fashion wear",
    location: "Sialkot",
    url: "https://www.eclipsesports.club/",
  },
  {
    name: "SILVER STAR ENTERPRISES PVT LTD",
    productLine: "Soocer Balls, Apparel, Bags, Goal Keeper Gloves",
    location: "Sialkot",
    url: "https://s-stargroup.com/",
  },
  {
    name: "LEATHERWARE PVT LIMITED",
    productLine: "DIFFERENT TYPES OF SOCCER BALLS, MOTOR BIKE SHOES, FOOTBALL GLOVES",
    location: "Sialkot",
    url: "https://leatherwarepvtltd.enic.pk/",
  },
  {
    name: "Helicon Enterprises",
    productLine: "Sports wear",
    location: "Sialkot",
    url: "https://sialkotmade.com/helicon-enterprises",
  },
  {
    name: "Rasco Impex",
    productLine: "SPORTS GOODS AND SPORTS WAER",
    location: "Sialkot",
    url: "https://rascoimpex.com/",
  },
  {
    name: "Orpheus Enterprises (Pvt) Ltd",
    productLine: "Soccer Balls, Goal Keeper Gloves",
    location: "Sialkot",
    url: "https://www.orpheus.com.pk/",
  },
  {
    name: "sheikhansports",
    productLine: "goal keeper gloves / fitness",
    location: "Sialkot",
    url: "https://www.sheikhangroup.com/",
  },
  {
    name: "ACELIN SPORTS",
    productLine: "LEATHER GARMENTS,LEATHER CRICKET BALL,HOCKEY BALL",
    location: "Sialkot",
    url: "https://acelinsports.enic.pk/",
  },
  {
    name: "Treue Sports",
    productLine: "Sports Good (Goalkeeper Gloves and Goalkeeper Textiles)",
    location: "Sialkot",
    url: "http://treuesports.com/blocked.php",
  },
  {
    name: "Ziha Industries",
    productLine: "Composite Sports goods, like Padel tennis, Beach Tennis, Pickleball paddles, Field hockey",
    location: "Sialkot",
    url: "https://zihasports.com/",
  },
  {
    name: "ASHRAF INDUSTRIES (PVT) LTD",
    productLine: "MARTIAL ART WEARS",
    location: "Sialkot",
    url: "https://ashrafindustriespvtltd.enic.pk/",
  },
  {
    name: "CABALLO INDUSTRIES",
    productLine: "SPORTS GOODS, SPORTS GLOVES, SPORTSWEAR",
    location: "Sialkot",
    url: "https://psgmea.org.pk/members/caballo-industries/",
  },
]

// Define color variations for cards
const cardColors = [
  {
    gradient: "from-blue-500 to-blue-600",
    bgHover: "from-blue-600/5",
    text: "text-blue-600",
    textDark: "text-blue-800",
    border: "border-blue-100",
    hover: "hover:bg-blue-50",
    iconBg: "bg-blue-100",
  },
  {
    gradient: "from-purple-500 to-purple-600",
    bgHover: "from-purple-600/5",
    text: "text-purple-600",
    textDark: "text-purple-800",
    border: "border-purple-100",
    hover: "hover:bg-purple-50",
    iconBg: "bg-purple-100",
  },
  {
    gradient: "from-cyan-500 to-cyan-600",
    bgHover: "from-cyan-600/5",
    text: "text-cyan-600",
    textDark: "text-cyan-800",
    border: "border-cyan-100",
    hover: "hover:bg-cyan-50",
    iconBg: "bg-cyan-100",
  },
]

export function MemberCompanies() {
  const sliderRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(-1)

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
      
      // Check if we're touching a link
      const target = e.target as HTMLElement
      if (target.closest('a')) {
        return // Allow link clicks
      }
      
      const x = e.touches[0].pageX - slider.offsetLeft
      const walk = (x - startX) * 2
      slider.scrollLeft = scrollLeft - walk
      e.preventDefault()
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

  // Get color for a specific index
  const getColorForIndex = (index: number) => {
    return cardColors[index % cardColors.length]
  }

  return (
    <div className="relative py-2 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="relative">
          {/* Navigation arrows - fixed position with better visibility */}
          <div className="absolute top-1/2 left-0 right-0 flex justify-between z-20 px-0 -translate-y-1/2 pointer-events-none w-full">
            <button
              onClick={scrollLeft}
              className="p-3 rounded-full bg-white/90 shadow-lg hover:bg-blue-50 transition-all pointer-events-auto border border-blue-100 group"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-6 w-6 text-blue-600 group-hover:text-blue-800" />
            </button>
            <button
              onClick={scrollRight}
              className="p-3 rounded-full bg-white/90 shadow-lg hover:bg-blue-50 transition-all pointer-events-auto border border-blue-100 group"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-6 w-6 text-blue-600 group-hover:text-blue-800" />
            </button>
          </div>

          {/* Slider container */}
          <div
            ref={sliderRef}
            className="flex overflow-x-auto gap-6 scrollbar-hide pb-8 -mx-4"
            style={{ 
              scrollbarWidth: "none", 
              msOverflowStyle: "none",
              touchAction: 'pan-y'
            }}
          >
            {companies.map((company, index) => {
              const colors = getColorForIndex(index)

              return (
                <motion.div
                  key={company.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="flex-shrink-0 w-72"
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(-1)}
                >
                  <Card
                    className={`h-full hover:shadow-xl transition-all duration-300 ${colors.border} overflow-hidden bg-white rounded-xl group`}
                  >

                    <CardContent className="p-6">
                      <div className="mb-4">
                        <h3
                          className={`text-lg font-bold ${colors.textDark} line-clamp-1 group-hover:text-blue-700 transition-colors`}
                        >
                          {company.name}
                        </h3>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-start">
                          <div className={`p-2 rounded-lg ${colors.iconBg} ${colors.text} mr-3 flex-shrink-0`}>
                            <Package2 className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 mb-1">Products</p>
                            <p className="font-medium text-gray-700 line-clamp-2 text-sm">{company.productLine}</p>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className={`p-2 rounded-lg ${colors.iconBg} ${colors.text} mr-3 flex-shrink-0`}>
                            <MapPin className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 mb-1">Location</p>
                            <p className="font-medium text-gray-700 text-sm">{company.location}</p>
                          </div>
                        </div>

                        <motion.div
                          className="mt-4 pt-3 border-t border-gray-100"
                          initial={{ opacity: 0.8 }}
                          animate={{ opacity: activeIndex === index ? 1 : 0.8 }}
                        >
                          <a
                            href={company.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center ${colors.text} hover:text-blue-800 transition-colors font-medium text-sm group-hover:underline`}
                          >
                            Visit Website
                            <ExternalLink className="h-4 w-4 ml-1.5" />
                          </a>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Gradient masks for scroll indication */}
      <div className="absolute pointer-events-none left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-blue-50 to-transparent z-10"></div>
      <div className="absolute pointer-events-none right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-blue-50 to-transparent z-10"></div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}
