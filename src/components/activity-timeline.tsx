"use client"

import { Circle } from "lucide-react"
import { useRef, useEffect } from "react"
import { motion } from "framer-motion"

const activities = [
  {
    date: "20th Feb",
    title: "Venue Booking for MoU signing Ceremony- Lahore",
    details: ["Prepare for MoU signing ceremony"],
  },
  {
    date: "12th Feb",
    title: "Onboarding meeting of TMA-karachi",
    details: ["MoM-Minutes of the meeting", "DTMA-Karachi Onboarding Meeting"],
  },
  {
    date: "4th Feb",
    title: "On-boarding meeting at PSGMEA",
    details: ["MoM-Minutes of the meeting", "PSGMEA-Sialkot Onboarding meeting"],
  },
  {
    date: "1st Feb",
    title: "Planning Agenda & flow of activities",
    details: ["Outline project timeline and key milestones"],
  },
]

export function ActivityTimeline() {
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (timelineRef.current) {
      const secondItem = timelineRef.current.children[1] as HTMLElement // Explicitly cast to HTMLElement
      const secondItemPosition = secondItem.offsetTop
      timelineRef.current.scrollTop = secondItemPosition - 100 // Adjust 100 as needed for positioning
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-4 bg-gradient-to-br from-[#F8F9FA] to-white rounded-xl shadow-lg border border-[#E4E7EB]"
    >
      <h2 className="text-2xl font-bold mb-8 text-[#1D3F8A] border-b-2 border-[#30B9AD] tracking-tight">Planning Agenda & Flow of Activities</h2>
      <div ref={timelineRef} className="space-y-8 max-h-[1100px] overflow-y-auto pr-4 scrollbar-none">
        {activities.map((activity, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex gap-3"
          >
            <div className="flex flex-col items-center">
              <div className="relative">
                <Circle className="w-14 h-14 text-[#30B9AD] fill-[#30B9AD] drop-shadow-md" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-semibold text-xs text-center">
                  {activity.date.split(" ")[0]}
                  <br />
                  {activity.date.split(" ")[1]}
                </div>
              </div>
              {index !== activities.length - 1 && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "100%" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="w-0.5 bg-gradient-to-b from-[#30B9AD] to-[#C5A46D] mt-2"
                />
              )}
            </div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="pt-2 bg-white p-2 rounded-lg shadow-md border border-[#E4E7EB] flex-1 transition-all duration-300 hover:shadow-lg"
            >
              <div className="font-semibold text-lg text-[#1D3F8A] mb-3">{activity.title}</div>
              {activity.details.map((detail, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.05 }}
                  className="text-sm text-[#14274E] mt-2 flex items-start"
                >
                  <span className="text-[#C5A46D] mr-2 text-lg">•</span>
                  <span>{detail}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}