"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { User, Award, BookOpen, Globe, Rocket, Linkedin } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface Advisor {
  name: string
  role: string
  image: string
  achievements: string[]
  profile: string
}

const advisoryPanel: Advisor[] = [
  {
    name: "Bettina Muller",
    role: "Project Director, SEQUA",
    image: "/images/bettina_muller.jpg",
    achievements: ["Led 15+ successful projects", "Industry expert for 20+ years"],
    profile: "Specializes in sustainable manufacturing practices and quality control",
  },
  {
    name: "Michael Arretz",
    role: "Managing Director, VFI German Importers",
    image: "/images/michael_arretz.jpg",
    achievements: ["Published author", "International consultant"],
    profile: "Expert in international trade regulations and compliance",
  },
  {
    name: "Sarim Mehmood",
    role: "Project Director, Fruit of Sustainability",
    image: "/images/sarim_mehmood.jpg",
    achievements: ["Award-winning researcher", "Tech innovation leader"],
    profile: "Focuses on modernizing manufacturing processes",
  },
  {
    name: "Miqdam Junaid",
    role: "Project Lead/Auditor & CTO, Fruit of Sustainability",
    image: "/images/miqdam_image.jpeg",
    achievements: ["Certified sustainability auditor", "Tech-driven solutions expert"],
    profile: "Pioneering tech innovations for sustainable practices",
  },
  {
    name: "Saman Aslam",
    role: "Project Coordinator, Fruit of Sustainability",
    image: "/images/saman_image.jpeg",
    achievements: ["Project management specialist", "Stakeholder engagement expert"],
    profile: "Ensures seamless project execution and collaboration",
  },
  {
    name: "Jacob Arretz",
    role: "Project Coordinator, VFI German Importers",
    image: "/images/jacob_arretz.jpg",
    achievements: ["International trade facilitator", "Compliance specialist"],
    profile: "Drives cross-border trade initiatives and compliance",
  },
]

export function CapacityBuildingPanel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleAdvisors, setVisibleAdvisors] = useState<Advisor[]>([])

  const updateVisibleAdvisors = useCallback(() => {
    const newVisibleAdvisors = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % advisoryPanel.length
      newVisibleAdvisors.push(advisoryPanel[index])
    }
    setVisibleAdvisors(newVisibleAdvisors)
  }, [currentIndex])

  useEffect(() => {
    updateVisibleAdvisors()
  }, [updateVisibleAdvisors])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % advisoryPanel.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? advisoryPanel.length - 1 : prevIndex - 1))
  }

  return (
    <div className="w-full bg-gradient-to-b from-[#F8F9FA] to-white min-h-screen flex items-center justify-center px-4 md:px-8 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-5 z-0" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#D8D0BD]/20 to-transparent opacity-70 z-0" />
      <div className="absolute right-0 top-0 h-64 w-64 bg-[#30B9AD]/5 rounded-full filter blur-3xl" />
      <div className="absolute left-0 bottom-0 h-64 w-64 bg-[#C5A46D]/5 rounded-full filter blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Compact Heading with Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 relative"
        >
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-8 w-1 h-8 bg-gradient-to-b from-transparent to-[#C5A46D] opacity-30" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D3F8A] mb-4 relative inline-block">
            Capacity-Building & Advisory Panel
          </h2>
          <p className="text-base text-[#14274E] max-w-2xl mx-auto leading-relaxed">
            Our expert panel brings together diverse experience in sustainability, compliance, and international trade.
          </p>
          <div className="mt-4 flex justify-center space-x-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#30B9AD] opacity-50" />
            <span className="inline-block w-2 h-2 rounded-full bg-[#1D3F8A] opacity-70" />
            <span className="inline-block w-2 h-2 rounded-full bg-[#C5A46D] opacity-50" />
          </div>
        </motion.div>

        {/* Slider Controls */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-[#30B9AD]/10 hover:bg-[#30B9AD]/20 transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[#1D3F8A]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-[#30B9AD]/10 hover:bg-[#30B9AD]/20 transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[#1D3F8A]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Slider Container */}
        <div className="relative overflow-hidden w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {visibleAdvisors.map((advisor, index) => (
                <motion.div
                  key={advisor.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="relative group h-full"
                >
                  <Card className="h-full overflow-hidden bg-white border border-[#E4E7EB] hover:border-[#C5A46D]/30 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 relative flex flex-col">
                    {/* Enhanced Hover Effects */}
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#125643]/10 via-white to-[#30B9AD]/5" />
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#125643] to-[#125643] rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <CardContent className="p-0 flex flex-col flex-grow">
                      {/* Compact Profile Image Section */}
                      <div className="bg-gradient-to-br from-[#D8D0BD]/20 to-[#F8F9FA] p-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-[#30B9AD]/5 rounded-full translate-x-1/2 -translate-y-1/2" />
                        <div className="absolute bottom-0 left-0 w-12 h-12 bg-[#C5A46D]/5 rounded-full -translate-x-1/2 translate-y-1/2" />
                        <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg mb-4 relative z-10 group-hover:border-[#30B9AD]/20 transition-all duration-300">
                          {advisor.image ? (
                            <Image
                              src={advisor.image || "/placeholder.svg"}
                              alt={advisor.name}
                              width={96}
                              height={96}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-[#E4E7EB]">
                              <User className="w-8 h-8 text-[#4A5568]" />
                            </div>
                          )}
                        </div>
                        <div className="text-center relative z-10">
                          <h3 className="text-lg font-bold bg-gradient-to-r from-[#1D3F8A] to-[#30B9AD] bg-clip-text text-transparent transition-all duration-300 group-hover:from-[#30B9AD] group-hover:to-[#1D3F8A] mb-1">
                            {advisor.name}
                          </h3>
                          <p className="text-xs text-[#4A5568] mb-1">{advisor.role}</p>
                          <div className="w-8 h-0.5 bg-gradient-to-r from-[#30B9AD] to-[#C5A46D] mx-auto opacity-60 rounded-full" />
                        </div>
                      </div>

                      {/* Compact Profile Details Section */}
                      <div className="p-4 flex-grow relative">
                        <p className="text-xs text-[#14274E] mb-4 leading-relaxed italic border-l-2 border-[#E4E7EB] pl-2 py-1">
                          &quot;{advisor.profile}&quot;
                        </p>

                        <div className="space-y-2">
                          {advisor.achievements.map((achievement, i) => (
                            <div
                              key={i}
                              className="flex items-center text-xs text-[#4A5568] group-hover:text-[#14274E] transition-colors duration-300 p-1.5 rounded-lg group-hover:bg-[#F8F9FA]/80"
                            >
                              <div className="mr-2 p-1 bg-[#D8D0BD]/10 rounded-full group-hover:bg-[#30B9AD]/10 transition-colors duration-300">
                                {i === 0 && (
                                  <Award className="w-3 h-3 text-[#30B9AD] group-hover:text-[#1D3F8A] transition-colors duration-300" />
                                )}
                                {i === 1 && (
                                  <BookOpen className="w-3 h-3 text-[#30B9AD] group-hover:text-[#1D3F8A] transition-colors duration-300" />
                                )}
                                {i === 2 && (
                                  <Globe className="w-3 h-3 text-[#30B9AD] group-hover:text-[#1D3F8A] transition-colors duration-300" />
                                )}
                                {i === 3 && (
                                  <Rocket className="w-3 h-3 text-[#30B9AD] group-hover:text-[#1D3F8A] transition-colors duration-300" />
                                )}
                              </div>
                              {achievement}
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button className="flex items-center gap-1 text-xs text-[#1D3F8A] font-medium hover:text-[#30B9AD] bg-[#F8F9FA] hover:bg-[#E4E7EB] px-3 py-1 rounded-full transition-all duration-300 border border-[#E4E7EB] hover:border-[#30B9AD]/30">
                            <Linkedin className="w-3 h-3" />
                            Connect
                          </button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

