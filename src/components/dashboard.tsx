"use client"

import { useState, useEffect, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { EventCalendar } from "@/components/calendar-view"
import { NewsSection } from "@/components/news-section"
import { CertifiedStaff } from "@/components/certified-staff"
import { SustainabilityMeasures } from "@/components/sustainability-measures"
import { Header } from "@/components/header"
import { ComplianceChart } from "@/components/compliance-chart"
import { GenderImpactChart } from "@/components/gender-impact-chart"
import { SustainabilityReports } from "@/components/sustainability-reports"
import { FrameworkImplementation } from "@/components/framework-implementation"
import { EventAttendance } from "@/components/event-attendance"
import { InnovativeMeasures } from "@/components/innovative-measures"
import { KPITimeline } from "@/components/kpi-timeline"

// Enhanced professional color palette
const theme = {
  colors: {
    primary: "#3B82F6", // Vibrant blue
    secondary: "#8B5CF6", // Purple
    accent: "#F59E0B", // Amber
    success: "#10B981", // Emerald
    info: "#06B6D4", // Cyan
    warning: "#F97316", // Orange
    danger: "#EF4444", // Red
    dark: "#1E293B", // Slate dark
    background: "bg-gray-50",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600",
      light: "text-gray-400",
    },
    chart: {
      blue: ["#3B82F6", "#60A5FA", "#93C5FD", "#BFDBFE"],
      purple: ["#8B5CF6", "#A78BFA", "#C4B5FD", "#DDD6FE"],
      amber: ["#F59E0B", "#FBBF24", "#FCD34D", "#FDE68A"],
      emerald: ["#10B981", "#34D399", "#6EE7B7", "#A7F3D0"],
      cyan: ["#06B6D4", "#22D3EE", "#67E8F9", "#A5F3FC"],
      orange: ["#F97316", "#FB923C", "#FDBA74", "#FED7AA"],
      red: ["#EF4444", "#F87171", "#FCA5A5", "#FECACA"],
    },
  },
  spacing: {
    container: "p-8",
    section: "mb-6",
    grid: "gap-6",
  },
}

// Enhanced StatCard with gradient backgrounds and improved styling
const StatCard = ({ label, value, color, index, isMultiline = false }) => {
  // Create an array of gradient pairs for different cards
  const gradients = [
    ["from-blue-500 to-indigo-600", "#3B82F6"],
    ["from-purple-500 to-pink-600", "#8B5CF6"],
    ["from-amber-500 to-orange-600", "#F59E0B"],
    ["from-emerald-500 to-teal-600", "#10B981"],
    ["from-cyan-500 to-blue-600", "#06B6D4"],
    ["from-orange-500 to-red-600", "#F97316"],
    ["from-red-500 to-pink-600", "#EF4444"],
    ["from-slate-600 to-slate-800", "#1E293B"],
  ]

  // Use modulo to cycle through gradients
  const gradientIndex = index % gradients.length
  const [gradientClass, accentColor] = gradients[gradientIndex]

  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className={`relative rounded-xl shadow-lg overflow-hidden ${isMultiline ? "h-auto" : "h-32"} bg-gradient-to-br ${gradientClass}`}
    >
      <div className="absolute inset-0 opacity-10 bg-white mix-blend-overlay" />
      <div className="relative z-10 h-full p-4 flex flex-col justify-between">
        <div>
          <h3 className="text-xs font-medium uppercase tracking-wider mb-1 text-white/90">{label}</h3>
          <div className="w-12 h-1 rounded-full bg-white/70"></div>
        </div>
        <div className="flex flex-col mt-2">
          {isMultiline ? (
            <ul className="text-sm font-medium text-white space-y-1 list-disc pl-4 mb-2">
              {Array.isArray(value) ? (
                value.map((item, i) => <li key={i}>{item}</li>)
              ) : (
                <p className="text-lg font-bold text-white">{value}</p>
              )}
            </ul>
          ) : (
            <p className="text-2xl font-bold text-white">{value}</p>
          )}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.3, duration: 1 }}
            className="h-0.5 mt-1 rounded-full bg-white/30"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "70%" }}
              transition={{ delay: 0.5, duration: 1.5 }}
              className="h-full rounded-full bg-white/80"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

// Enhanced slide indicator with glowing effect
const SlideIndicator = ({ active, onClick }) => (
  <motion.button
    onClick={onClick}
    className="flex items-center justify-center p-1 focus:outline-none"
    whileTap={{ scale: 0.9 }}
  >
    <motion.div
      animate={{
        width: active ? "2.5rem" : "0.5rem",
        backgroundColor: active ? theme.colors.primary : "#CBD5E0",
        opacity: active ? 1 : 0.7,
        boxShadow: active ? `0 0 8px ${theme.colors.primary}` : "none",
      }}
      className="h-2 rounded-full transition-all duration-300"
    />
  </motion.button>
)

// Enhanced Navigation buttons with gradient effect
const SliderNavButton = ({ direction, onClick }) => (
  <motion.button
    whileHover={{
      scale: 1.1,
      backgroundImage: "linear-gradient(to right, #3B82F6, #8B5CF6)",
      color: "white",
    }}
    whileTap={{ scale: 0.9 }}
    onClick={onClick}
    className="absolute top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 text-gray-700 z-20 focus:outline-none transition-all duration-300 border border-gray-100"
    style={{
      [direction === "prev" ? "left" : "right"]: "-1.25rem",
    }}
  >
    {direction === "prev" ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 18l-6-6 6-6" />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 18l6-6-6-6" />
      </svg>
    )}
  </motion.button>
)

// Enhanced Logo component with more vibrant gradient
const AssociationLogo = () => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="flex items-center justify-center mb-2"
  >
    <img src="images/psgmea.jpg" alt="Logo" width="48" height="48" className="mr-3 modern-logo" />

    <style jsx>{`
      .modern-logo {
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
      .modern-logo:hover {
        transform: scale(1.1);
        box-shadow: 0 8px 20px rgba(59, 130, 246, 0.4);
      }
    `}</style>
    <div className="flex flex-col items-start">
      <motion.span
        className="text-xs font-semibold tracking-widest text-gray-500 uppercase"
        initial={{ opacity: 0, x: -5 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Pakistan
      </motion.span>
      <motion.h1
        className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 bg-clip-text text-transparent"
        initial={{ opacity: 0, x: -5 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        PSGMEA
      </motion.h1>
      <motion.span
        className="text-xs font-medium text-gray-500"
        initial={{ opacity: 0, x: -5 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        Sports Goods Manufacturers & Exporters
      </motion.span>
    </div>
  </motion.div>
)

// Enhanced CertifiedStaff component wrapper
const EnhancedCertifiedStaffWrapper = () => (
  <motion.div
    whileHover={{ y: -5 }}
    transition={{ type: "spring", stiffness: 300, damping: 15 }}
    className="overflow-hidden rounded-xl"
  >
    <div className="relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-600 z-10 rounded-t-xl"></div>
      <CertifiedStaff />
    </div>
  </motion.div>
)

// Enhanced SustainabilityMeasures component wrapper
const EnhancedSustainabilityWrapper = () => (
  <motion.div
    whileHover={{ y: -5 }}
    transition={{ type: "spring", stiffness: 300, damping: 15 }}
    className="overflow-hidden rounded-xl"
  >
    <div className="relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-orange-600 z-10 rounded-t-xl"></div>
      <SustainabilityMeasures />
    </div>
  </motion.div>
)

// Enhanced EventCalendar component wrapper
const EnhancedEventCalendarWrapper = () => (
  <motion.div
    whileHover={{ y: -5 }}
    transition={{ type: "spring", stiffness: 300, damping: 15 }}
    className="overflow-hidden rounded-xl"
  >
    <div className="relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-600 z-10 rounded-t-xl"></div>
      <EventCalendar />
    </div>
  </motion.div>
)

// Enhanced NewsSection component wrapper
const EnhancedNewsSectionWrapper = () => (
  <motion.div
    whileHover={{ y: -5 }}
    transition={{ type: "spring", stiffness: 300, damping: 15 }}
    className="overflow-hidden rounded-xl"
  >
    <div className="relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-pink-600 z-10 rounded-t-xl"></div>
      <NewsSection />
    </div>
  </motion.div>
)

const Dashboard = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Memoized data with updated stats
  const stats = useMemo(
    () => [
      {
        label: "Total Member Companies",
        value: "2000+",
        color: theme.colors.primary,
      },
      {
        label: "Total Factories Represented",
        value: "1,000+",
        color: theme.colors.accent,
      },
      {
        label: "Total Employees in Member Companies",
        value: "550+",
        color: theme.colors.success,
      },
      {
        label: "Annual Revenue of Member Companies",
        value: "$58 Million",
        color: theme.colors.info,
      },
      {
        label: "Major Export Destinations",
        value: "Germany, EU, USA",
        color: theme.colors.warning,
      },
      {
        label: "Current Sustainability Initiatives",
        value: "5 Major Programs",
        color: theme.colors.dark,
      },
      {
        label: "Key Products Manufactured",
        value: [
          "Cricket gear (bats, balls, pads, gloves)",
          "Hockey sticks and accessories",
          "Fitness and Gym Wears",
          "Footballs (hand-stitched and machine-stitched)",
          "Sportswear and protective gear (Shoulder & Elbow Belt)",
        ],
        color: theme.colors.danger,
        isMultiline: true,
      },
    ],
    [],
  )

  const totalSlides = Math.ceil(stats.length / 3)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 5000)

    return () => clearInterval(timer)
  }, [totalSlides])

  const currentStats = stats.slice(currentSlide * 3, currentSlide * 3 + 3)

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  // Progress indicator for auto-slide
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const duration = 5000 // 5 seconds
    const interval = 50 // Update every 50ms for smoothness
    let timer
    let elapsed = 0

    timer = setInterval(() => {
      elapsed += interval
      setProgress((elapsed / duration) * 100)

      if (elapsed >= duration) {
        elapsed = 0
      }
    }, interval)

    return () => clearInterval(timer)
  }, [currentSlide])

  return (
    <div className={`min-h-screen bg-white flex flex-col ${theme.colors.background} px-6`}>
      <Header />

      <div className="flex flex-col items-center mt-4">
        <AssociationLogo />

        <div className="text-center space-y-1 mb-2">
          <motion.h1
            className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            Association Dashboard
          </motion.h1>
          <motion.div
            className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "5rem" }}
            transition={{ delay: 1.3, duration: 0.7 }}
          ></motion.div>
        </div>
      </div>

      {/* Enhanced Stats Carousel with gradient cards */}
      <div className="mb-6 mt-4">
        <div className="relative px-8">
          {/* Navigation buttons */}
          <SliderNavButton direction="prev" onClick={goToPrev} />
          <SliderNavButton direction="next" onClick={goToNext} />

          {/* Stats cards container with subtle pattern background */}
          <div className="overflow-hidden rounded-xl p-1 bg-gradient-to-r from-gray-50 to-gray-100 shadow-inner">
            <div className="p-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                  {currentStats.map((stat, i) => (
                    <StatCard key={i} {...stat} index={i + currentSlide * 3} isMultiline={stat.isMultiline} />
                  ))}
                </motion.div>
              </AnimatePresence>

              {/* Enhanced slide indicators with animation */}
              <motion.div
                className="flex justify-center mt-4 gap-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {Array.from({ length: totalSlides }).map((_, i) => (
                  <SlideIndicator key={i} active={i === currentSlide} onClick={() => setCurrentSlide(i)} />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* KPI Timeline Overview */}
      <div className="mb-6">
        <KPITimeline />
      </div>


        <SustainabilityReports />
        <FrameworkImplementation />

        <GenderImpactChart />

      <div className="mb-6">
        <InnovativeMeasures />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <EnhancedCertifiedStaffWrapper />
        <EnhancedEventCalendarWrapper />
      </div>

      {/* Additional Sections with Enhanced Styling */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4 text-gray-900 flex items-center">
          <div className="w-1 h-6 bg-gradient-to-b from-amber-500 to-orange-600 rounded-full mr-2"></div>
          Innovative Sustainability Measures
        </h2>
        <EnhancedSustainabilityWrapper />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <EnhancedNewsSectionWrapper />
      </div>
    </div>
  )
}

export default Dashboard

