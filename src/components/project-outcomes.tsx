"use client"

import { CheckCircle, Users, FileText, Building, Globe, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

const outcomes = [
  {
    text: "50+ companies supported in sustainability compliance.",
    icon: <CheckCircle className="w-5 h-5 text-emerald-500" />,
    color: "bg-emerald-50",
    impact: "High",
  },
  {
    text: "19+ companies publishing sustainability reports.",
    icon: <FileText className="w-5 h-5 text-blue-600" />,
    color: "bg-blue-50",
    impact: "Medium",
  },
  {
    text: "9 advisors trained in corporate governance & compliance.",
    icon: <Users className="w-5 h-5 text-amber-500" />,
    color: "bg-amber-50",
    impact: "High",
  },
  {
    text: "3 associations strengthened for long-term sustainability",
    icon: <Building className="w-5 h-5 text-emerald-500" />,
    color: "bg-emerald-50",
    impact: "Medium",
  },
  {
    text: "Industry-wide awareness on LkSG/EU Green Deal regulations.",
    icon: <Globe className="w-5 h-5 text-blue-600" />,
    color: "bg-blue-50",
    impact: "High",
  },
  {
    text: "Stronger global market access for Pakistan's textile sector.",
    icon: <TrendingUp className="w-5 h-5 text-amber-500" />,
    color: "bg-amber-50",
    impact: "High",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
}

export function ProjectOutcomes() {
  return (
    <div className="bg-gradient-to-br from-[#F8F9FA] to-white rounded-xl shadow-lg border border-[#E4E7EB] rounded-3xl shadow-2xl p-4 mb-8">
      <h2 className="text-2xl font-extrabold mb-8 text-[#1D3F8A] border-b-2 border-[#30B9AD] tracking-tight text-center">
        Project Outcomes
      </h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {outcomes.map((outcome, index) => (
          <motion.div
            key={index}
            className={`flex items-start space-x-3 p-4 ${outcome.color} rounded-2xl shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.02] border border-[#E4E7EB]`}
            variants={itemVariants}
          >
            <div className="p-2 bg-white rounded-full flex-shrink-0 shadow-sm border border-[#E4E7EB]">
              {outcome.icon}
            </div>
            <div className="flex-grow">
              <p className="text-[#14274E] font-semibold text-base leading-snug mb-2">
                {outcome.text}
              </p>
              <div className="flex items-center">
                <span className="text-sm text-[#4A5568] font-medium mr-2">Impact:</span>
                <span
                  className={`text-xs font-bold px-2 py-1 rounded-full ${
                    outcome.impact === "High"
                      ? "bg-[#30B9AD] text-white"
                      : "bg-[#C5A46D] text-[#1D3F8A]"
                  }`}
                >
                  {outcome.impact}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}