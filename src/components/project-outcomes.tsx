"use client"

import { CheckCircle, Users, FileText, Building, Globe, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

const outcomes = [
  {
    metric: "50+",
    text: "companies supported in sustainability compliance",
    icon: CheckCircle,
    description: "Providing comprehensive support for environmental and social compliance standards.",
  },
  {
    metric: "19+",
    text: "companies publishing sustainability reports",
    icon: FileText,
    description: "Promoting transparency and accountability in corporate sustainability practices.",
  },
  {
    metric: "9",
    text: "advisors trained in corporate governance",
    icon: Users,
    description: "Building local capacity for sustainable business practices and compliance.",
  },
  {
    metric: "3",
    text: "associations strengthened for sustainability",
    icon: Building,
    description: "Empowering industry associations to lead sustainable transformation.",
  },
  {
    metric: "100%",
    text: "industry-wide awareness on regulations",
    icon: Globe,
    description: "Ensuring comprehensive understanding of LkSG and EU Green Deal requirements.",
  },
  {
    metric: "Global",
    text: "market access for Pakistan textile sector",
    icon: TrendingUp,
    description: "Expanding international trade opportunities through compliance and sustainability.",
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
    <div className="w-full bg-[#F8F9FA] py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Enhanced Background with Texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#D8D0BD]/10 to-[#F8F9FA] opacity-80 z-0" />
      <div className="absolute inset-0 bg-[url('/subtle-pattern.png')] opacity-5 z-0" /> {/* Optional texture overlay */}

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          {/* Left Column - Heading and Description with Enhanced Styling */}
          <div className="lg:sticky lg:top-8">
            <div className="relative">
              <div className="absolute -left-4 top-2 h-16 w-2 bg-gradient-to-b from-[#30B9AD] to-[#C5A46D] rounded-full" />
              <h2 className="text-4xl md:text-5xl font-bold text-[#1D3F8A] mb-6 pl-4">
                Project Outcomes
              </h2>
            </div>
            <p className="text-lg text-[#14274E] leading-relaxed mb-8 border-l-2 border-[#E4E7EB] pl-4 py-2">
              We&apos;re accelerating Pakistan&apos;s transition to sustainable business practices. Together, we&apos;re creating
              pathways for global market access and environmental compliance.
            </p>
            <button className="bg-[#125643] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#125643] transition-all duration-300 shadow-md hover:shadow-lg hover:translate-y-[-1px]">
              View Our Priorities
            </button>
            <div className="mt-6 px-4 py-3 bg-[#D8D0BD]/20 rounded-lg border-l-4 border-[#C5A46D] text-[#4A5568] text-sm italic">
              Projects aligned with UN Sustainable Development Goals
            </div>
          </div>

          {/* Right Column - Outcomes Grid with Enhanced Card Styling */}
          <div className="lg:col-span-2">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {outcomes.map((outcome, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-[#E4E7EB] relative group hover:border-[#C5A46D]/50 hover:translate-y-[-2px]"
                  variants={itemVariants}
                >
                  {/* Enhanced Gradient Effect on Hover */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#D8D0BD]/5 via-white to-[#30B9AD]/5" />
                  
                  {/* Top Accent Border */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#30B9AD] to-[#C5A46D] rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="flex items-start gap-4 relative z-10">
                    <div className="p-3 rounded-full bg-[#D8D0BD]/20 group-hover:bg-[#D8D0BD]/40 transition-colors duration-300">
                      <outcome.icon className="w-6 h-6 text-[#30B9AD] group-hover:text-[#1D3F8A] transition-colors duration-300" />
                    </div>
                    <div>
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-3xl font-bold bg-gradient-to-r from-[#1D3F8A] to-[#30B9AD] bg-clip-text text-transparent">{outcome.metric}</span>
                        <span className="text-base font-medium text-[#14274E] group-hover:text-[#1D3F8A] transition-colors duration-300">{outcome.text}</span>
                      </div>
                      <p className="text-sm text-[#4A5568] leading-relaxed group-hover:text-[#14274E] transition-colors duration-300">{outcome.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}