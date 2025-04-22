"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { User } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface Advisor {
  name: string
  role: string
  image: string
}

const advisoryPanel: Advisor[] = [
  {
    name: "Bettina Muller",
    role: "Project Director, SEQUA",
    image: "/images/bettina_muller.jpg",
  },
  {
    name: "Michael Arretz",
    role: "Managing Director, VFI German Importers",
    image: "/images/michael_arretz.jpg",
  },
  {
    name: "Sarim Mehmood",
    role: "Project Director, Fruit of Sustainability",
    image: "/images/sarim_mehmood.jpg",
  },
  {
    name: "Jakob Arretz",
    role: "Project Coordinator, VFI German Importers",
    image: "/images/jakob_arretz.png",
  },
  {
    name: "Miqdam Junaid",
    role: "Project Lead/Auditor & CTO, Fruit of Sustainability",
    image: "/images/miqdam_image.jpeg",
  },
  {
    name: "Saman Aslam",
    role: "Project Coordinator, Fruit of Sustainability",
    image: "/images/saman_image.jpeg",
  },

]

export function CapacityBuildingPanel() {
  // Calculate total number of pages
  const cardsPerPage = 3;
  const totalPages = Math.ceil(advisoryPanel.length / cardsPerPage);
  
  const [currentPage, setCurrentPage] = useState(0);
  const [visibleAdvisors, setVisibleAdvisors] = useState<Advisor[]>([]);

  // Update visible advisors whenever the page changes
  useEffect(() => {
    const startIndex = currentPage * cardsPerPage;
    const endIndex = Math.min(startIndex + cardsPerPage, advisoryPanel.length);
    const newVisibleAdvisors = advisoryPanel.slice(startIndex, endIndex);
    
    // If we have fewer than 3 cards on the last page, fill from the beginning
    if (newVisibleAdvisors.length < cardsPerPage) {
      const remaining = cardsPerPage - newVisibleAdvisors.length;
      const fillAdvisors = advisoryPanel.slice(0, remaining);
      setVisibleAdvisors([...newVisibleAdvisors, ...fillAdvisors]);
    } else {
      setVisibleAdvisors(newVisibleAdvisors);
    }
  }, [currentPage]);

  const nextSlide = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  }

  const prevSlide = () => {
    setCurrentPage((prevPage) => (prevPage === 0 ? totalPages - 1 : prevPage - 1));
  }

  return (
    <div className="w-full bg-gradient-to-b from-[#F8F9FA] to-white min-h-screen flex items-center justify-center px-4 md:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-5 z-0" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#D8D0BD]/20 to-transparent opacity-70 z-0" />
      <div className="absolute right-0 top-0 h-64 w-64 bg-[#30B9AD]/5 rounded-full filter blur-3xl" />
      <div className="absolute left-0 bottom-0 h-64 w-64 bg-[#C5A46D]/5 rounded-full filter blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4 relative"
        >
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-8 w-1 h-8 bg-gradient-to-b from-transparent to-[#C5A46D] opacity-30" />
          <h2 className="text-4xl md:text-5xl font-bold text-[#1D3F8A] mb-4 mt-8 relative inline-block">
            Capacity-Building & Advisory Panel
          </h2>
          <p className="text-lg text-[#14274E] max-w-2xl mx-auto leading-relaxed">
            Our expert panel brings together diverse experience in sustainability, compliance, and international trade.
          </p>
        </motion.div>

        {/* Slider Controls */}
        <div className="flex justify-center gap-8 mb-4">
          <button
            onClick={prevSlide}
            className="p-4 rounded-full bg-[#30B9AD]/10 hover:bg-[#30B9AD]/20 transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-[#1D3F8A]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="p-4 rounded-full bg-[#30B9AD]/10 hover:bg-[#30B9AD]/20 transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-[#1D3F8A]"
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
              key={currentPage}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {visibleAdvisors.map((advisor, index) => (
                <motion.div
                  key={`${currentPage}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="relative group h-full"
                >
                  <Card className="overflow-hidden bg-white border border-[#E4E7EB] hover:border-[#C5A46D]/30 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 h-[400px]">
                    {/* Enhanced Hover Effects */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#125643]/10 via-white to-[#30B9AD]/5" />
                    <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#125643] to-[#30B9AD] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <CardContent className="p-0 h-full flex flex-col">
                      {/* Image Section */}
                      <div className="bg-gradient-to-br from-[#D8D0BD]/30 to-[#F8F9FA] p-8 relative overflow-hidden flex-grow-0">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#30B9AD]/5 rounded-full translate-x-1/2 -translate-y-1/2" />
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#C5A46D]/5 rounded-full -translate-x-1/2 translate-y-1/2" />
                        
                        <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-8 border-white shadow-xl relative z-10 group-hover:border-[#30B9AD]/20 transition-all duration-300">
                          {advisor.image ? (
                            <Image
                              src={advisor.image || "/placeholder.svg"}
                              alt={advisor.name}
                              width={160}
                              height={160}
                              className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-[#E4E7EB]">
                              <User className="w-16 h-16 text-[#4A5568]" />
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Details Section */}
                      <div className="p-8 text-center flex-grow flex flex-col justify-center">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-[#1D3F8A] to-[#30B9AD] bg-clip-text text-transparent transition-all duration-300 group-hover:from-[#30B9AD] group-hover:to-[#1D3F8A] mb-3">
                          {advisor.name}
                        </h3>
                        <div className="w-16 h-1 bg-gradient-to-r from-[#30B9AD] to-[#C5A46D] mx-auto opacity-60 rounded-full mb-3" />
                        <p className="text-lg text-[#4A5568] font-medium group-hover:text-[#14274E] transition-colors duration-300">
                          {advisor.role}
                        </p>
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

export default CapacityBuildingPanel