"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function MilestoneRoad() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const milestones = [
    {
      step: "01",
      title: "Project Initiation",
      description: ["Define project scope", "Set clear objectives", "Identify key stakeholders"],
      color: "#00d4c8",
      position: { left: "37%", bottom: "3%" },
      textAlign: "left",
      size: 1.0,
      month: "Feb",
    },
    {
      step: "02",
      title: "Planning Phase",
      description: ["Develop project roadmap", "Create detailed timelines", "Allocate resources"],
      color: "#ff5722",
      position: { left: "47%", bottom: "29%" },
      textAlign: "left",
      size: 0.85,
      month: "Mar",
    },
    {
      step: "03",
      title: "Execution",
      description: ["Implement project deliverables", "Monitor progress", "Manage team performance"],
      color: "#2196f3",
      position: { left: "37%", bottom: "59%" },
      textAlign: "left",
      size: 0.7,
      month: "Apr",
    },
    {
      step: "04",
      title: "Monitoring & Control",
      description: ["Track project progress", "Make necessary adjustments", "Ensure quality standards"],
      color: "#e91e63",
      position: { left: "54%", bottom: "80%" },
      textAlign: "left",
      size: 0.55,
      month: "May",
    },
  ]

  return (
    <div className="relative w-full bg-gradient-to-br from-[#F8F9FA] to-white rounded-xl shadow-lg border border-[#E4E7EB] mb-4">
      <div className="mx-auto max-w-5xl">
        <div className="relative h-[400px] w-full overflow-visible rounded-xl bg-gradient-to-br from-[#F8F9FA] to-white rounded-xl shadow-lg border border-[#E4E7EB] p-6 shadow-inner">
          {/* Curved Path Background */}
          <div
            className="absolute inset-0 bg-center bg-no-repeat opacity-70"
            style={{
              backgroundImage: "url('/images/roadmap_path.png')",
              backgroundSize: "contain",
            }}
          />

          {/* Milestones */}
          <div className="relative h-full">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="absolute"
                style={{
                  left: milestone.position.left,
                  bottom: milestone.position.bottom,
                }}
              >
                {/* Flag and Stick */}
                <div className="flex flex-col items-center group relative">
                  {/* Hover Text - Positioned above flag */}
                  <div className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20">
                    <div
                      className={`p-1 rounded-lg shadow-lg bg-white border ${
                        milestone.textAlign === "right" ? "text-right" : "text-left"
                      }`}
                      style={{
                        borderColor: milestone.color,
                        width: "220px",
                        height: `${140 * milestone.size}px`,
                        maxHeight: "140px",
                        transform: `translateX(${milestone.textAlign === "right" ? "0%" : "-0%"})`,
                      }}
                    >
                      <h3 className="text-sm font-medium mb-2" style={{ color: milestone.color }}>
                        {milestone.title}
                      </h3>
                      <ul className="text-xs text-gray-600 space-y-1 list-disc list-inside">
                        {milestone.description.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="mr-2 text-xs" style={{ color: milestone.color }}>
                              •
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* Arrow pointing down */}
                    <div
                      className="w-3 h-3 transform rotate-45 mx-auto -mt-1.5 border-r border-b"
                      style={{
                        backgroundColor: "white",
                        borderColor: milestone.color,
                      }}
                    />
                  </div>

                  {/* Flag */}
                  <motion.div
                    className="shadow-lg relative cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      backgroundColor: milestone.color,
                      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%, 25% 50%)",
                      height: `${milestone.size * 40}px`,
                      width: `${milestone.size * 72}px`,
                      transform: `translateX(-${milestone.size * 8}px)`,
                    }}
                  >
                    {/* Month name on flag */}
                    <span
                      className="absolute inset-0 flex items-center justify-center text-white font-bold"
                      style={{ fontSize: `${milestone.size * 14}px` }}
                    >
                      {milestone.month}
                    </span>
                  </motion.div>
                  {/* Stick */}
                  <div
                    className="bg-gray-400 mt-0 shadow-md"
                    style={{
                      height: `${milestone.size * 64}px`,
                      width: "2px",
                    }}
                  />
                  {/* Shadow at the bottom of the stick */}
                  <div
                    className="absolute top-full w-12 h-4 bg-black/10 blur-sm rounded-full"
                    style={{
                      transform: `scale(${milestone.size})`,
                    }}
                  />
                </div>
              </div>
            ))}

            {/* Title */}
            <div className="absolute top-2 left-2 bg-white bg-opacity-80 p-2 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold tracking-tight text-[#1D3F8A] border-b-2 border-[#30B9AD]">
                Project Roadmap
              </h2>
              <p className="text-sm font-medium text-gray-600 mt-1">Textile Sector Growth</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

