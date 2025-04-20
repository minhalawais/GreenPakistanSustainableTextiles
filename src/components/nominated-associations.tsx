"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

// Association logos
const associationLogos = {
  PRGMEA: "/images/prgmea_logo.png",
  PSGMEA: "/images/psgmea.jpg",
  TMA: "/images/tma_logo.png",
}

// Team members data
const teamMembers = [
  // PRGMEA Team
  {
    name: "KINZA EJAZ",
    role: "CSR & Sustainability Manager",
    organization: "CHOTTAN INDUSTRIES",
    association: "PRGMEA",
    image: "/images/team/kinza_ejaz.png",
  },
  {
    name: "HINA ASIF",
    role: "Secretary",
    organization: "PRGMEA - (NZ)",
    association: "PRGMEA",
    image: "/images/team/hina_asif.png",
  },
  {
    name: "KAMRAN JAVID",
    role: "General Secretary",
    organization: "PRGMEA",
    association: "PRGMEA",
    image: "/images/team/kamran_javid.png",
  },
  {
    name: "SHAISTA NAZ",
    role: "Secretary",
    organization: "PRGMEA (SZ)",
    association: "PRGMEA",
    image: "/images/team/shaista_naz.png",
  },
  {
    name: "M. ALI",
    role: "Sustainability Officer",
    organization: "PRGMEA -Lahore",
    association: "PRGMEA",
    image: "/images/team/ali.png",
  },
  {
    name: "M. NAEEM",
    role: "Executive Officer",
    organization: "PRGMEA- Sialkot",
    association: "PRGMEA",
    image: "/images/team/naeem.png",
  },
  {
    name: "AMINA",
    role: "Assistant manager",
    organization: "COTTON WEB",
    association: "PRGMEA",
    image: "/images/team/amina.png",
  },
  {
    name: "WALEED",
    role: "Environment and sustainability officer",
    organization: "FAAZ international",
    association: "PRGMEA",
    image: "/images/team/waleed.png",
  },
  {
    name: "ABDUL JABBAR",
    role: "GM Sustainability",
    organization: "COTTON WEB",
    association: "PRGMEA",
    image: "/images/team/abdul_jabbar.png",
  },

  // PSGMEA Team
  {
    name: "MAWRA",
    role: "Assistant General Secretary",
    organization: "PSGMEA",
    association: "PSGMEA",
    image: "/images/team/mawra.png",
  },
  {
    name: "MOHSIN MASOOD",
    role: "General Secretary",
    organization: "PSGMEA",
    association: "PSGMEA",
    image: "/images/team/mohsin_masood.png",
  },
  {
    name: "ESHA AHAMD",
    role: "Sustainability Officer",
    organization: "PSGMEA",
    association: "PSGMEA",
    image: "/images/team/esha_ahamd.png",
  },
  {
    name: "SHAHZAIB",
    role: "Sustainability Officer",
    organization: "Forward sports",
    association: "PSGMEA",
    image: "/images/team/shahzaib.png",
  },
  {
    name: "ZAIN ABBAS",
    role: "Executive Manager Sustainability",
    organization: "Forward sports",
    association: "PSGMEA",
    image: "/images/team/zain_abbas.png",
  },

  // TMA Team
  {
    name: "ARSALAN",
    role: "Vice Principal",
    organization: "SMARTI",
    association: "TMA",
    image: "/images/team/arsalan.png",
  },
  {
    name: "MUKHTAR IBRAHIM",
    role: "Deputy Secretary",
    organization: "TMA",
    association: "TMA",
    image: "/images/team/mukhtar_ibrahim.png",
  },
  {
    name: "ASIF ALI",
    role: "Lecturer",
    organization: "SMARTI",
    association: "TMA",
    image: "/images/team/asif_ali.png",
  },
  {
    name: "MUZAMIL HUSSAIN",
    role: "Director/General Secretary",
    organization: "TMA",
    association: "TMA",
    image: "/images/team/muzamil_hussain.png",
  },
]

export function NominatedAssociations() {
    const [selectedAssociation, setSelectedAssociation] = useState<string | null>(null)
  
    // Group members by association
    const groupedMembers = teamMembers.reduce(
      (acc, member) => {
        if (!acc[member.association]) {
          acc[member.association] = []
        }
        acc[member.association].push(member)
        return acc
      },
      {} as Record<string, typeof teamMembers>,
    )
  
    // Get all unique associations
    const associations = Object.keys(groupedMembers)
  
    // Filter members based on selected association or show all
    const filteredMembers = selectedAssociation ? groupedMembers[selectedAssociation] : teamMembers
  
    // Association colors mapping
    const associationColors = {
      PRGMEA: {
        primary: "#125643",
        secondary: "#30B9AD",
      },
      PSGMEA: {
        primary: "#1D3F8A",
        secondary: "#30B9AD",
      },
      TMA: {
        primary: "#C5A46D",
        secondary: "#30B9AD",
      }
    }
  
    return (
      <section className="w-full min-h-screen bg-gradient-to-b from-[#F8F9FA] to-[#EEF2F6] py-16 overflow-hidden">
        <div className="container mx-auto px-4 h-full flex flex-col">
          {/* Enhanced heading */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="bg-gradient-to-r from-[#1D3F8A]/10 to-[#30B9AD]/10 text-[#1D3F8A] px-4 py-2 rounded-full text-sm font-medium mb-3 inline-block">
              Our Network
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1D3F8A] mb-4">
              Nominated Associations & Their Sustainability Service Teams
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#30B9AD] to-[#C5A46D] mx-auto mt-4 rounded-full" />
          </motion.div>
  
          {/* Enhanced Association selection */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center gap-10 mb-12"
          >
            {associations.map((association, index) => (
              <button
                key={association}
                onClick={() => setSelectedAssociation(selectedAssociation === association ? null : association)}
                className={`relative group transition-all duration-300 focus:outline-none`}
                aria-label={`Filter by ${association}`}
              >
                <div className="flex flex-col items-center">
                  <div className={`w-28 h-28 md:w-32 md:h-32 rounded-full bg-white shadow-lg flex items-center justify-center p-3 transition-all duration-300 ${
                    selectedAssociation === association || !selectedAssociation
                      ? "opacity-100 ring-4 ring-[#30B9AD]/30 transform scale-105"
                      : "opacity-75 hover:opacity-100 hover:scale-105"
                  }`} style={{overflow: "hidden"}}>
                    <Image
                      src={associationLogos[association as keyof typeof associationLogos] || "/placeholder.svg"}
                      alt={`${association} Logo`}
                      width={110}
                      height={110}
                      className="object-contain max-w-full max-h-full"
                    />
                  </div>
                  <span className={`mt-3 text-lg font-semibold ${
                    selectedAssociation === association 
                      ? "text-[#30B9AD]" 
                      : "text-[#1D3F8A] group-hover:text-[#30B9AD]"
                  } transition-colors duration-300`}>
                    {association}
                  </span>
                  {selectedAssociation === association && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                      className="h-1 bg-[#30B9AD] mt-2"
                    />
                  )}
                </div>
              </button>
            ))}
          </motion.div>
  
          {/* Filter indicator */}
          {selectedAssociation && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-center mb-8"
            >
              <span className="inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-[#30B9AD]/20 to-[#1D3F8A]/10 text-[#1D3F8A] text-xl font-medium shadow-sm">
                {selectedAssociation} Sustainability Service Team
                <button
                  onClick={() => setSelectedAssociation(null)}
                  className="ml-3 p-1 rounded-full hover:bg-white/70 transition-colors duration-200"
                  aria-label="Clear filter"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </span>
            </motion.div>
          )}
  
          {/* Team members grid - now with improved design */}
          <div className="flex-1 overflow-y-auto pb-6 px-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4 sm:gap-6"
            >
              {filteredMembers.map((member, index) => (
                <motion.div
                  key={`${member.name}-${index}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: (index % 12) * 0.03 }}
                  className="group"
                >
                  <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white overflow-hidden h-full">
                    <CardContent className="p-0 flex flex-col h-full">
                      {/* Color bar for association - thicker */}
                      <div
                        className={`h-2 ${
                          member.association === "PRGMEA"
                            ? "bg-gradient-to-r from-[#125643] to-[#30B9AD]"
                            : member.association === "PSGMEA"
                              ? "bg-gradient-to-r from-[#1D3F8A] to-[#30B9AD]"
                              : "bg-gradient-to-r from-[#C5A46D] to-[#30B9AD]"
                        }`}
                      />
                      
                      {/* Member image - enlarged */}
                      <div className="pt-4 px-3 flex-shrink-0">
                        <div className="w-20 h-20 md:w-24 md:h-24 mx-auto rounded-full overflow-hidden border-2 border-white shadow-md relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-[#30B9AD]/10 to-[#1D3F8A]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                          <Image
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            width={100}
                            height={100}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </div>
  
                      {/* Member details */}
                      <div className="text-center p-3 flex-1 flex flex-col justify-center">
                        <h3 className="font-bold text-[#1D3F8A] text-base leading-tight mb-1 group-hover:text-[#30B9AD] transition-colors duration-200">
                          {member.name}
                        </h3>
                        <p className="font-medium text-gray-700 text-sm leading-tight mb-1">{member.role}</p>
                        <p className="text-gray-500 text-xs truncate">{member.organization}</p>
                      </div>
                      
                      {/* Enhanced Association tag */}
                      <div className={`py-2 px-3 mt-auto ${
                        member.association === "PRGMEA"
                          ? "bg-gradient-to-r from-[#125643]/10 to-[#30B9AD]/10"
                          : member.association === "PSGMEA"
                            ? "bg-gradient-to-r from-[#1D3F8A]/10 to-[#30B9AD]/10"
                            : "bg-gradient-to-r from-[#C5A46D]/10 to-[#30B9AD]/10"
                      }`}>
                        <p className={`text-sm text-center font-semibold ${
                          member.association === "PRGMEA"
                            ? "text-[#125643]"
                            : member.association === "PSGMEA"
                              ? "text-[#1D3F8A]"
                              : "text-[#C5A46D]"
                        }`}>{member.association}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    )
  }
  
  export default NominatedAssociations