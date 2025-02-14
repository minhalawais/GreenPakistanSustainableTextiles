"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, User } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface Advisor {
  name: string
  role: string
  image: string
  achievements: string[]
  profile: string
}

interface PartnerAssociation {
  name: string
  team: string
  intro: string
  memberCount: number
  image: string
  teamProfiles: { name: string; role: string; image: string }[]
}

// Updated data constants
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
]

const partnerAssociations: PartnerAssociation[] = [
  {
    name: "PRGMEA-Pakistan Readymade Garment Manufacturers and Exporters Association",
    team: "Project Team: 8 Members",
    intro: "Leading association representing Pakistan's garment industry",
    memberCount: 1200,
    image: "/images/prgmea_logo.png",
    teamProfiles: [
      { name: "Dr. Ayyaz", role: "Chairman North zone", image: "" },
      { name: "Aamir Chottani", role: "Chairman South zone", image: "" },
      { name: "Shaista Naz", role: "Team Member", image: "" },
      { name: "Kinza Ejaz", role: "Team Member", image: "" },
      { name: "Kamran Javid", role: "Team Member", image: "" },
      { name: "Muhammad Ali", role: "Team Member", image: "" },
      { name: "Hina Usman", role: "Team Member", image: "" },
      { name: "Waleed Ali", role: "Team Member", image: "" },
      { name: "Ejaz Hassan", role: "Team Member", image: "" },
      { name: "Muhammad Naeem", role: "Team Member", image: "" },
    ],
  },
  {
    name: "PSGMEA-Pakistan Sports Goods Manufacturers and Exporters Association",
    team: "Project Team: 5 Members",
    intro: "Premier body for sports goods manufacturing sector",
    memberCount: 400,
    image: "/images/psgmea_logo.png",
    teamProfiles: [
      { name: "Khawaja Masood", role: "Chairman", image: "" },
      { name: "Ibrar Sandal", role: "Senior Vice Chairman", image: "" },
      { name: "Mohsin Masood", role: "Team Member", image: "" },
      { name: "Esha Ahmad", role: "Team Member", image: "" },
      { name: "Mawra", role: "Team Member", image: "" },
    ],
  },
  {
    name: "TMA-Towel Manufacturers' Association of Pakistan",
    team: "Project Team: TBA",
    intro: "Representative body for towel manufacturers",
    memberCount: 250,
    image: "/images/tma_logo.png",
    teamProfiles: [
      { name: "Athar Bari", role: "Chairman", image: "" },
      { name: "Muzammil Hussain", role: "General Secretary", image: "" },
    ],
  },
]

const Tooltip = ({ children, isVisible }: { children: React.ReactNode; isVisible: boolean }) => (
  <AnimatePresence>
    {isVisible && (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.2 }}
        className="absolute z-[9999] w-64 p-3 text-xs bg-white rounded-lg shadow-lg border border-[#E4E7EB] -top-2 left-full ml-3"
      >
        {children}
      </motion.div>
    )}
  </AnimatePresence>
)

export function AdvisoryPanel() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  return (
    <div className="max-w-3xl mx-auto p-4 bg-gradient-to-br from-[#F8F9FA] to-white rounded-xl shadow-lg border border-[#E4E7EB]">
      <h2 className="text-2xl font-bold mb-6 text-[#1D3F8A] border-b-2 border-[#30B9AD] pb-2">
        Capacity-Building & Advisory Panel
      </h2>

      <div className="space-y-4">
        {advisoryPanel.map((advisor) => (
          <div key={advisor.name} className="relative">
            <Card
              className="hover:shadow-lg transition-all duration-300 hover:translate-x-1"
              onMouseEnter={() => setHoveredItem(advisor.name)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <CardContent className="flex items-center gap-4 p-4 bg-[#D8D0BD] hover:bg-[#E4E7EB] transition-colors rounded-lg">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md flex-shrink-0">
                  {advisor.image ? (
                    <Image
                      src={advisor.image || "/placeholder.svg"}
                      alt={advisor.name}
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-[#E4E7EB]">
                      <User className="w-8 h-8 text-[#4A5568]" />
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-[#14274E] truncate">{advisor.name}</h3>
                  <p className="text-sm text-[#4A5568]">{advisor.role}</p>
                </div>
                <ChevronRight className="w-6 h-6 text-[#30B9AD] flex-shrink-0" />
              </CardContent>
            </Card>
            <Tooltip isVisible={hoveredItem === advisor.name}>
              <h4 className="font-bold mb-2 text-[#14274E] text-sm">{advisor.name}</h4>
              <p className="text-[#14274E] mb-3 text-xs leading-snug">{advisor.profile}</p>
              <div className="space-y-2">
                {advisor.achievements?.map((achievement, i) => (
                  <p key={i} className="text-[#4A5568] text-xs flex items-center">
                    <span className="mr-2 text-[#30B9AD]">•</span> {achievement}
                  </p>
                ))}
              </div>
            </Tooltip>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-6 text-[#1D3F8A] border-b-2 border-[#30B9AD] pb-2">
        Partner Associations
      </h2>

      <div className="space-y-4">
        {partnerAssociations.map((partner) => (
          <div key={partner.name} className="relative">
            <Card
              className="hover:shadow-lg transition-all duration-300 hover:translate-x-1"
              onMouseEnter={() => setHoveredItem(partner.name)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <CardContent className="flex items-start gap-4 p-4 bg-white hover:bg-[#F8F9FA] transition-colors rounded-lg">
                <div className="w-14 h-14 rounded-lg bg-[#E4E7EB] flex items-center justify-center overflow-hidden shadow-md flex-shrink-0">
                  <Image
                    src={partner.image || "/placeholder.svg"}
                    alt={partner.name}
                    width={56}
                    height={56}
                    className="object-contain"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-[#14274E] leading-tight">{partner.name}</h3>
                  <p className="text-xs text-[#30B9AD] mt-1">{partner.team}</p>
                </div>
                <ChevronRight className="w-6 h-6 text-[#C5A46D] flex-shrink-0 mt-1" />
              </CardContent>
            </Card>
            <Tooltip isVisible={hoveredItem === partner.name}>
              <h4 className="font-bold mb-2 text-[#14274E] text-sm leading-tight">{partner.name}</h4>
              <p className="text-[#14274E] mb-2 text-xs leading-snug">{partner.intro}</p>
              <p className="text-[#4A5568] mb-3 text-xs">Member Companies: {partner.memberCount}</p>
              <div className="space-y-2">
                <p className="font-bold text-xs text-[#1D3F8A]">Project Team:</p>
                {partner.teamProfiles?.map((profile, i) => (
                  <div key={i} className="flex items-center gap-2 bg-[#F8F9FA] p-2 rounded-md">
                    <div className="w-8 h-8 rounded-full bg-[#E4E7EB] overflow-hidden shadow-sm flex items-center justify-center">
                      {profile.image ? (
                        <Image
                          src={profile.image || "/placeholder.svg"}
                          alt={profile.name}
                          width={32}
                          height={32}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <User className="w-5 h-5 text-[#4A5568]" />
                      )}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#14274E]">{profile.name}</p>
                      <p className="text-[10px] text-[#4A5568]">{profile.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Tooltip>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdvisoryPanel

