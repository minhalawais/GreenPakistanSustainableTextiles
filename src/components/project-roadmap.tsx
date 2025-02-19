"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Flag, Calendar, ClipboardList, MapPin, CheckCircle, FileText, Users, ArrowRight } from "lucide-react"

const milestones = [
  {
    icon: Flag,
    color: "#00d4c8",
    date: "Jan",
    title: "Association",
    description: [
      { icon: Users, text: "Nomination of Team members" },
      { icon: FileText, text: "Final Zoom Call" },
      { icon: ClipboardList, text: "Negotiation of roadmap" },
    ],
  },
  {
    icon: ClipboardList,
    color: "#2196f3",
    date: "Feb",
    title: "Workshops (Kick off)",
    description: [
      { icon: CheckCircle, text: "Determination of objectives" },
      { icon: FileText, text: "Determination of responsibility's" },
      { icon: ClipboardList, text: "Final roadmap" },
    ],
  },
  {
    icon: Calendar,
    color: "#ff5722",
    date: "Mar-May",
    title: "Education Course I",
    description: [
      { icon: FileText, text: "Schooling" },
      { icon: CheckCircle, text: "Training" },
      { icon: Users, text: "Examination for all team members" },
    ],
  },
  {
    icon: MapPin,
    color: "#e91e63",
    date: "Oct",
    title: "Education Course II & Main Targets",
    description: [
      { icon: CheckCircle, text: "Management system for more transparencies" },
      { icon: FileText, text: "Transparencies about social and environmental aspects" },
      { icon: Users, text: "Reports about sustainability" },
      { icon: MapPin, text: "One site visits of production sites" },
      { icon: ClipboardList, text: "Documentation" },
    ],
  },
]

export default function ProjectRoadmap() {
  const [mounted, setMounted] = useState(false)
  const [activeIndex, setActiveIndex] = useState(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#1D3F8A] to-[#4f46e5] bg-clip-text text-transparent mb-2">
            Project Roadmap
          </h2>
          <p className="text-gray-600 text-base">German Importers Implementation Plan</p>
        </motion.div>

        <div className="relative">
          {/* Animated timeline line */}
          <motion.div
            className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00d4c8] via-[#2196f3] to-[#e91e63] rounded-full"
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 1 }}
          />

          {/* Milestones */}
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative flex gap-4"
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                {/* Animated Icon Circle */}
                <div className="absolute left-[24px] -translate-x-1/2">
                  <motion.div
                    className="relative"
                    animate={{
                      scale: activeIndex === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <div
                      className="w-10 h-10 rounded-full border-3 border-white flex items-center justify-center shadow-md"
                      style={{ backgroundColor: milestone.color }}
                    >
                      <milestone.icon className="w-5 h-5 text-white" />
                    </div>
                    {activeIndex === index && (
                      <div
                        className="absolute inset-0 rounded-full animate-ping opacity-20"
                        style={{ backgroundColor: milestone.color }}
                      />
                    )}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="ml-12 flex-1 flex gap-4">
                  {/* Date Block */}
                  <motion.div
                    className="w-32 h-12 rounded-lg flex items-center justify-center shadow-md backdrop-blur-sm"
                    style={{
                      background: `linear-gradient(135deg, ${milestone.color}, ${milestone.color}dd)`,
                    }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-white font-bold text-sm">{milestone.date}</span>
                  </motion.div>

                  {/* Enhanced Description Card */}
                  <motion.div
                    className="flex-1 bg-white rounded-lg shadow-md p-4 relative overflow-hidden"
                    whileHover={{ y: -3 }}
                    animate={{
                      boxShadow:
                        activeIndex === index
                          ? "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                          : "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
                    }}
                  >
                    {/* Decorative gradient bar */}
                    <div
                      className="absolute top-0 left-0 w-full h-1 rounded-t-lg"
                      style={{ backgroundColor: milestone.color }}
                    />

                    <h3 className="text-lg font-bold mb-2 text-gray-800">{milestone.title}</h3>
                    <ul className="space-y-2">
                      {milestone.description.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * i }}
                          className="flex items-center gap-2 group"
                        >
                          <div
                            className="p-1.5 rounded-md transition-colors"
                            style={{ backgroundColor: `${milestone.color}15` }}
                          >
                            <item.icon
                              className="w-4 h-4 transition-transform group-hover:scale-110"
                              style={{ color: milestone.color }}
                            />
                          </div>
                          <span className="text-gray-600 text-sm flex-1">{item.text}</span>
                          <ArrowRight
                            className="w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity"
                            style={{ color: milestone.color }}
                          />
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

