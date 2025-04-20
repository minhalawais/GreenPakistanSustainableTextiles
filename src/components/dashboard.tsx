"use client"

import type React from "react"
import { motion } from "framer-motion"
import { EventCalendar } from "@/components/calendar-view"
import { NewsSection } from "@/components/news-section"
import { CertifiedStaff } from "@/components/certified-staff"
import { SustainabilityMeasures } from "@/components/sustainability-measures"
import { Header } from "@/components/header"
import { GenderImpactChart } from "@/components/gender-impact-chart"
import { FrameworkImplementation } from "@/components/framework-implementation"
import { InnovativeMeasures } from "@/components/innovative-measures"
import { KPITimeline } from "@/components/kpi-timeline"
import { MemberCompanies } from "@/components/member-companies"
import { AssociationStats } from "@/components/associations-stats"
import { NominatedAssociationsCompact } from "@/components/associations-section"

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

// Enhanced Logo component with more vibrant gradient
const AssociationLogo = () => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="flex items-center justify-center mb-2"
  >
    <img src="images/psgmea.jpg" alt="Logo" width="60" height="60" className="mr-3 modern-logo" />

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
      <motion.h1
        className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 bg-clip-text text-transparent"
        initial={{ opacity: 0, x: -5 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        PSGMEA
      </motion.h1>
      <motion.span
        className="text-xs font-semibold tracking-widest text-gray-500 uppercase"
        initial={{ opacity: 0, x: -5 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Pakistan Sports Goods
      </motion.span>

      <motion.span
        className="text-xs font-semibold tracking-widest text-gray-500 uppercase"
        initial={{ opacity: 0, x: -5 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        Manufacturers & Exporters
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

// Section with vertical heading component
const SectionWithVerticalHeading = ({
  title,
  color = "bg-blue-600",
  children,
}: {
  title: string
  color?: string
  children: React.ReactNode
}) => (
  <div className="relative mb-6 overflow-hidden rounded-xl border border-gray-200 shadow-sm">
    <div className="flex">
      <div className={`flex-shrink-0 w-8 ${color} flex items-center justify-center`}>
        <div className="transform -rotate-90 whitespace-nowrap">
          <span className="text-white font-semibold tracking-wider uppercase text-xs">{title}</span>
        </div>
      </div>
      <div className="flex-1 bg-white">{children}</div>
    </div>
  </div>
)

const Dashboard = () => {
  return (
    <div className={`min-h-screen bg-white flex flex-col ${theme.colors.background} px-6`}>
      <Header />

      <div className="flex flex-col items-center mt-4">
        <AssociationLogo />

        <div className="text-center space-y-1 mb-6">
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


      <SectionWithVerticalHeading title="Shortlisted Member Companies" color="bg-blue-600">
        <div className="h-[280px]">
          <MemberCompanies />
        </div>
      </SectionWithVerticalHeading>
      <SectionWithVerticalHeading title="Association Stats" color="bg-purple-600">
        <div className="h-[200px]">
          <AssociationStats />
        </div>
      </SectionWithVerticalHeading>

      {/* Main sections with vertical headings */}

      <SectionWithVerticalHeading title="Nominated Sustainability Team" color="bg-green-600">
        <div className="h-[400px]">
          <NominatedAssociationsCompact />
        </div>
      </SectionWithVerticalHeading>

      {/* Keep all other existing sections */}
      <div className="mb-6">
        <KPITimeline />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <EnhancedCertifiedStaffWrapper />
        <EnhancedEventCalendarWrapper />
      </div>

      <div className="mb-6">
        <EnhancedSustainabilityWrapper />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <GenderImpactChart />
        <InnovativeMeasures />
      </div>

      <FrameworkImplementation />
    </div>
  )
}

export default Dashboard
