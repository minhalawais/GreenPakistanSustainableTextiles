"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { User } from "lucide-react"

interface Advisor {
  name: string
  role: string
  image: string
}

interface PartnerAssociation {
  name: string
  team: string
  image: string
}

// Simplified data constants - keeping only name, role, and image
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
]

const partnerAssociations: PartnerAssociation[] = [
  {
    name: "PRGMEA-Pakistan Readymade Garment Manufacturers and Exporters Association",
    team: "Project Team: 8 Members",
    image: "/images/prgmea_logo.png",
  },
  {
    name: "PSGMEA-Pakistan Sports Goods Manufacturers and Exporters Association",
    team: "Project Team: 5 Members",
    image: "/images/psgmea_logo.png",
  },
  {
    name: "TMA-Towel Manufacturers' Association of Pakistan",
    team: "Project Team: TBA",
    image: "/images/tma_logo.png",
  },
]

export function AdvisoryPanel() {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl">
      <h2 className="text-3xl font-bold mb-10 text-[#1D3F8A] border-b-2 border-[#30B9AD] pb-3">
        Capacity-Building & Advisory Panel
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {advisoryPanel.map((advisor) => (
          <Card
            key={advisor.name}
            className="overflow-hidden transition-all duration-300 hover:shadow-2xl hover:translate-y-1 group"
          >
            <div className="h-48 bg-gradient-to-br from-[#30B9AD] to-[#1D3F8A] relative">
              <div className="absolute inset-0 flex items-center justify-center">
                {advisor.image ? (
                  <Image
                    src={advisor.image}
                    alt={advisor.name}
                    width={160}
                    height={160}
                    className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-lg"
                  />
                ) : (
                  <div className="w-32 h-32 rounded-full flex items-center justify-center bg-white">
                    <User className="w-16 h-16 text-[#4A5568]" />
                  </div>
                )}
              </div>
            </div>
            <CardContent className="p-6 text-center bg-white group-hover:bg-gray-50 transition-colors">
              <h3 className="text-xl font-bold text-[#14274E] mb-2">{advisor.name}</h3>
              <p className="text-[#4A5568]">{advisor.role}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <h2 className="text-3xl font-bold mt-16 mb-10 text-[#1D3F8A] border-b-2 border-[#30B9AD] pb-3">
        Partner Associations
      </h2>

      <div className="grid grid-cols-1 gap-6">
        {partnerAssociations.map((partner) => (
          <Card
            key={partner.name}
            className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-x-2 group"
          >
            <CardContent className="flex items-center gap-6 p-6 bg-white group-hover:bg-gray-50">
              <div className="w-24 h-24 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden shadow-md flex-shrink-0">
                <Image
                  src={partner.image || "/placeholder.svg"}
                  alt={partner.name}
                  width={96}
                  height={96}
                  className="object-contain p-2"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-[#14274E] leading-tight mb-2">{partner.name}</h3>
                <p className="text-[#30B9AD] font-medium">{partner.team}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default AdvisoryPanel