"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, FileText } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const activities = [
  {
    date: "20th Feb",
    title: "Venue Booking for MoU signing Ceremony- Lahore",
    details: ["Prepare for MoU signing ceremony"],
    pdf: "/pdfs/mou-signing-ceremony.pdf",
  },
  {
    date: "12th Feb",
    title: "Onboarding meeting of TMA-karachi",
    details: ["MoM-Minutes of the meeting", "DTMA-Karachi Onboarding Meeting"],
    pdf: "/pdfs/tma-karachi-onboarding.pdf",
  },
  {
    date: "4th Feb",
    title: "On-boarding meeting at PSGMEA",
    details: ["MoM-Minutes of the meeting", "PSGMEA-Sialkot Onboarding meeting"],
    pdf: "/pdfs/psgmea-sialkot-onboarding.pdf",
  },
  {
    date: "1st Feb",
    title: "Planning Agenda & flow of activities",
    details: ["Outline project timeline and key milestones"],
    pdf: "/pdfs/planning-agenda.pdf",
  },
]

const ActivityCard = ({ activity }) => (
  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-500/20 h-full flex flex-col">
    <div className="text-emerald-400 font-semibold mb-2">{activity.date}</div>
    <h3 className="text-[#C5A46D] text-lg font-bold mb-4">{activity.title}</h3>
    <ul className="text-white/80 text-sm space-y-2 flex-grow">
      {activity.details.map((detail, index) => (
        <li key={index} className="flex items-start">
          <span className="mr-2 mt-1 text-emerald-400">•</span>
          {detail}
        </li>
      ))}
    </ul>
    {activity.pdf && (
      <a
        href={activity.pdf}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center text-sm text-emerald-400 hover:text-emerald-300 transition-colors duration-300"
      >
        <FileText size={16} className="mr-2" />
        Download PDF
      </a>
    )}
  </div>
)

export function FlowOfActivities() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === activities.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? activities.length - 1 : prevIndex - 1))
  }

  return (
    <div className="bg-[#0A2E2A] py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#C5A46D] mb-8 text-center">Flow of Activities</h2>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {[
                activities[currentIndex],
                activities[(currentIndex + 1) % activities.length],
                activities[(currentIndex + 2) % activities.length],
              ].map((activity, index) => (
                <ActivityCard key={index} activity={activity} />
              ))}
            </motion.div>
          </AnimatePresence>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-emerald-500/20 hover:bg-emerald-500/30 text-white p-2 rounded-full transition-colors duration-300"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-emerald-500/20 hover:bg-emerald-500/30 text-white p-2 rounded-full transition-colors duration-300"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default FlowOfActivities

