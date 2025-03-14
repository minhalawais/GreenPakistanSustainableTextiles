"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Lightbulb,
  FileText,
  Calendar,
  CheckCircle,
  Clock,
  Building,
  ArrowRight,
  Target,
  Award,
  TrendingUp,
  Users,
  Leaf,
  X,
} from "lucide-react"

// Custom Badge Component
interface BadgeProps {
  children: React.ReactNode
  className?: string
  variant?: "default" | "outline" | "secondary"
}

function Badge({ children, className = "", variant = "default" }: BadgeProps) {
  const baseStyles = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors"
  const variantStyles = {
    default: "bg-primary text-primary-foreground hover:bg-primary/80",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
  }

  return <span className={`${baseStyles} ${variantStyles[variant]} ${className}`}>{children}</span>
}

// Custom Dialog Components
interface DialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  children: React.ReactNode
}

function Dialog({ open, onOpenChange, children }: DialogProps) {
  if (!open) return null

  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
        onClick={() => onOpenChange(false)}
        aria-hidden="true"
      />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">{children}</div>
    </>
  )
}

interface DialogContentProps {
  children: React.ReactNode
  className?: string
}

function DialogContent({ children, className = "" }: DialogContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 10 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`relative max-h-[90vh] overflow-auto rounded-lg border border-border bg-background p-6 shadow-lg ${className}`}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </motion.div>
  )
}

function DialogHeader({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mb-4 ${className}`}>{children}</div>
}

function DialogTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <h2 className={`text-xl font-semibold ${className}`}>{children}</h2>
}

function DialogDescription({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`text-sm text-muted-foreground ${className}`}>{children}</p>
}

function DialogClose({ onClick, className = "" }: { onClick: () => void; className?: string }) {
  return (
    <button
      className={`absolute right-4 top-4 rounded-full bg-white/90 p-2 text-gray-700 shadow-md opacity-90 hover:opacity-100 transition-opacity z-20 ${className}`}
      onClick={onClick}
      aria-label="Close"
    >
      <X className="h-5 w-5" />
      <span className="sr-only">Close</span>
    </button>
  )
}

interface Publication {
  title: string
  company: string
  date: string | null
  status: "published" | "in-progress" | "planned"
  type: "case-study" | "success-story" | "report"
  imageUrl: string
  summary: string
  challenges: string[]
  solutions: string[]
  results: string[]
  implementationDate: string | null
  teamSize: number
  impact: string
  sustainabilityScore: number
  keyTechnologies: string[]
}

const enhancedPublications: Publication[] = [
  {
    title: "Water Conservation in Manufacturing",
    company: "Forward Sports",
    date: "2024-01-15",
    status: "published",
    type: "case-study",
    imageUrl: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=500&auto=format&fit=crop&q=60",
    summary:
      "Implementation of advanced water recycling systems in the manufacturing process, reducing water consumption by 60%.",
    challenges: [
      "High water consumption in traditional manufacturing processes",
      "Contaminated wastewater requiring extensive treatment",
      "Increasing water costs and environmental regulations",
      "Seasonal water scarcity affecting production",
    ],
    solutions: [
      "Installation of closed-loop water recycling systems",
      "Implementation of rainwater harvesting infrastructure",
      "Redesign of manufacturing processes to minimize water usage",
      "Employee training on water conservation practices",
    ],
    results: [
      "60% reduction in water consumption",
      "85% decrease in wastewater discharge",
      "Annual cost savings of $120,000",
      "Compliance with ISO 14001 environmental standards",
    ],
    implementationDate: "2023-08-10",
    teamSize: 12,
    impact:
      "The water conservation initiative has not only reduced operational costs but also strengthened the company's position as an environmentally responsible manufacturer in the sports goods industry.",
    sustainabilityScore: 85,
    keyTechnologies: ["Reverse Osmosis Systems", "Ultrafiltration", "IoT Water Monitoring", "Smart Metering"],
  },
  {
    title: "Renewable Energy Implementation",
    company: "Anwar Khawaja Industries",
    date: "2024-02-10",
    status: "published",
    type: "success-story",
    imageUrl: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&auto=format&fit=crop&q=60",
    summary:
      "Transition to 100% renewable energy sources through solar panel installation and energy efficiency measures.",
    challenges: [
      "High energy costs affecting production profitability",
      "Unreliable grid electricity causing production disruptions",
      "Carbon footprint concerns from stakeholders",
      "Initial capital investment requirements",
    ],
    solutions: [
      "Installation of 500kW rooftop solar panel system",
      "Energy-efficient machinery upgrades across production lines",
      "Smart energy management system implementation",
      "Employee awareness program on energy conservation",
    ],
    results: [
      "70% reduction in grid electricity consumption",
      "Annual CO2 emissions reduced by 450 tons",
      "ROI achieved within 3.5 years",
      "Enhanced brand reputation among eco-conscious customers",
    ],
    implementationDate: "2023-06-22",
    teamSize: 18,
    impact:
      "The renewable energy project has transformed the company's energy profile, providing both environmental benefits and significant cost advantages in an increasingly competitive market.",
    sustainabilityScore: 92,
    keyTechnologies: [
      "Photovoltaic Solar Panels",
      "Battery Storage",
      "Smart Grid Integration",
      "Energy Management Software",
    ],
  },
  {
    title: "Waste Reduction Strategies",
    company: "Capital Sports",
    date: "2024-03-05",
    status: "published",
    type: "case-study",
    imageUrl: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=500&auto=format&fit=crop&q=60",
    summary:
      "Comprehensive waste management program that achieved 90% waste diversion from landfills through recycling and upcycling initiatives.",
    challenges: [
      "High volume of manufacturing waste going to landfill",
      "Increasing disposal costs and environmental regulations",
      "Material inefficiencies in production processes",
      "Limited local recycling infrastructure",
    ],
    solutions: [
      "Implementation of zero-waste manufacturing principles",
      "Development of material recovery facility on-site",
      "Redesign of products for recyclability and longevity",
      "Partnerships with specialized recycling companies",
    ],
    results: [
      "90% waste diversion from landfill achieved",
      "Creation of new revenue stream from recovered materials",
      "30% reduction in raw material costs",
      "Winner of National Sustainability Award 2023",
    ],
    implementationDate: "2023-09-15",
    teamSize: 14,
    impact:
      "The waste reduction program has transformed waste from a cost center to a value-added component of the business, while significantly reducing environmental impact.",
    sustainabilityScore: 88,
    keyTechnologies: [
      "Material Recovery Systems",
      "Waste-to-Energy Conversion",
      "Automated Sorting",
      "Circular Economy Software",
    ],
  },
  {
    title: "Gender Equality in Manufacturing",
    company: "Talon Sports",
    date: null,
    status: "in-progress",
    type: "report",
    imageUrl: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=500&auto=format&fit=crop&q=60",
    summary:
      "Comprehensive initiative to achieve gender parity across all levels of manufacturing operations and management.",
    challenges: [
      "Historically male-dominated manufacturing environment",
      "Skills gap for women in technical manufacturing roles",
      "Work-life balance challenges affecting female retention",
      "Cultural barriers to women in leadership positions",
    ],
    solutions: [
      "Implementation of gender-balanced recruitment practices",
      "Technical skills development program for women",
      "Flexible work arrangements and family support policies",
      "Mentorship program pairing female employees with leaders",
    ],
    results: [
      "Female workforce increased from 18% to 37% (ongoing)",
      "Women in management positions increased to 28%",
      "Employee satisfaction scores improved by 22%",
      "Reduced turnover rates among female employees",
    ],
    implementationDate: "2023-11-01",
    teamSize: 9,
    impact:
      "The gender equality initiative is creating a more diverse and innovative workforce, with measurable improvements in productivity and employee satisfaction.",
    sustainabilityScore: 75,
    keyTechnologies: [
      "HR Analytics Platform",
      "Skills Development Software",
      "Diversity Tracking Tools",
      "Flexible Work Management Systems",
    ],
  },
  {
    title: "Sustainable Supply Chain",
    company: "Awan Sports",
    date: null,
    status: "in-progress",
    type: "case-study",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&auto=format&fit=crop&q=60",
    summary:
      "End-to-end supply chain transformation focusing on environmental impact reduction, ethical sourcing, and transparency.",
    challenges: [
      "Complex global supply chain with limited visibility",
      "Varying environmental and labor standards across suppliers",
      "Carbon-intensive logistics and transportation",
      "Customer demand for sustainable and ethical products",
    ],
    solutions: [
      "Implementation of blockchain-based supply chain tracking",
      "Supplier code of conduct with environmental criteria",
      "Optimization of logistics routes and transportation modes",
      "Local sourcing initiative to reduce transportation emissions",
    ],
    results: [
      "Supply chain emissions reduced by 35% (ongoing)",
      "100% of tier-1 suppliers meeting ethical standards",
      "15% reduction in logistics costs",
      "Enhanced brand reputation and customer loyalty",
    ],
    implementationDate: "2023-10-12",
    teamSize: 16,
    impact:
      "The sustainable supply chain initiative is creating transparency and accountability throughout the value chain, meeting growing consumer demand for responsibly produced products.",
    sustainabilityScore: 82,
    keyTechnologies: [
      "Blockchain Tracking",
      "Carbon Footprint Calculator",
      "Supplier Management Platform",
      "Route Optimization Software",
    ],
  },
  {
    title: "Carbon Footprint Reduction",
    company: "Saga Sports",
    date: null,
    status: "planned",
    type: "success-story",
    imageUrl: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=500&auto=format&fit=crop&q=60",
    summary: "Comprehensive carbon neutrality roadmap with the goal of achieving net-zero emissions by 2030.",
    challenges: [
      "High carbon emissions from manufacturing operations",
      "Energy-intensive production processes",
      "Emissions from employee commuting and business travel",
      "Scope 3 emissions throughout the value chain",
    ],
    solutions: [
      "Comprehensive carbon footprint assessment and monitoring",
      "Energy efficiency improvements across all facilities",
      "Transition to renewable energy sources",
      "Carbon offset program for unavoidable emissions",
    ],
    results: [
      "Target: 50% emissions reduction by 2025",
      "Target: 100% renewable energy by 2027",
      "Target: Carbon neutrality by 2030",
      "Enhanced positioning as climate leader in the industry",
    ],
    implementationDate: "2024-06-01",
    teamSize: 20,
    impact:
      "The carbon footprint reduction initiative will position the company as a leader in climate action while preparing for future regulatory requirements and meeting investor expectations.",
    sustainabilityScore: 78,
    keyTechnologies: [
      "Carbon Accounting Software",
      "Energy Management Systems",
      "Renewable Energy Integration",
      "Offset Verification Platform",
    ],
  },
]

export function InnovativeMeasures() {
  const [selectedPublication, setSelectedPublication] = useState<Publication | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleCardClick = (publication: Publication) => {
    setSelectedPublication(publication)
    setIsModalOpen(true)
  }

  const publishedCount = enhancedPublications.filter((p) => p.status === "published").length
  const inProgressCount = enhancedPublications.filter((p) => p.status === "in-progress").length
  const plannedCount = enhancedPublications.filter((p) => p.status === "planned").length
  const target = 15
  const progress = Math.round((publishedCount / target) * 100)

  return (
    <Card className="border border-gray-100 shadow-lg bg-gradient-to-br from-white to-gray-50 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-pink-600"></div>
      <CardHeader className="pb-2 pt-4 border-b border-gray-100">
        <CardTitle className="text-lg font-semibold text-gray-800 flex items-center">
          <div className="w-1 h-6 bg-gradient-to-b from-red-500 to-pink-600 rounded-full mr-2"></div>
          Innovative Measures Publication
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <p className="text-gray-600 mb-4">
          Explore the collection of innovative sustainability measures implemented across various companies in the
          sports goods sector. Click on any publication to learn more about these groundbreaking initiatives.
        </p>

        {/* Fixed height container with scroll */}
        <div className="h-[300px] overflow-y-auto pr-2 custom-scrollbar">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
            {enhancedPublications.map((publication, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                className="cursor-pointer perspective-1000"
                onClick={() => handleCardClick(publication)}
              >
                <div className="relative h-60 w-full transform-gpu transition-all duration-500">
                  {/* Card with 3D effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-sm transform-gpu transition-transform duration-500 group-hover:scale-105 -z-10"></div>

                  <div className="h-full w-full rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20 backdrop-blur-sm transition-all duration-500 hover:shadow-[0_8px_30px_rgba(255,0,120,0.2)]">
                    {/* Image container with gradient overlay */}
                    <div className="relative h-full w-full overflow-hidden group">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{
                          backgroundImage: `url(${publication.imageUrl})`,
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 transition-opacity group-hover:opacity-90" />

                      {/* Content */}
                      <div className="absolute inset-0 p-4 flex flex-col justify-end text-white">
                        <div className="absolute top-3 right-3 z-10">
                          <Badge
                            className={`
                            ${
                              publication.status === "published"
                                ? "bg-gradient-to-r from-green-500 to-emerald-600"
                                : publication.status === "in-progress"
                                  ? "bg-gradient-to-r from-amber-500 to-orange-600"
                                  : "bg-gradient-to-r from-blue-500 to-indigo-600"
                            } 
                            border-none text-white shadow-sm`}
                          >
                            {publication.status === "published" ? (
                              <>
                                <CheckCircle className="h-3 w-3 mr-1" /> Published
                              </>
                            ) : publication.status === "in-progress" ? (
                              <>
                                <Clock className="h-3 w-3 mr-1" /> In Progress
                              </>
                            ) : (
                              <>
                                <Calendar className="h-3 w-3 mr-1" /> Planned
                              </>
                            )}
                          </Badge>
                        </div>

                        <h3 className="text-lg font-bold mb-1 drop-shadow-md">{publication.title}</h3>

                        <div className="flex items-center text-xs text-gray-200 mb-1">
                          <Building className="h-3 w-3 mr-1" />
                          <span>{publication.company}</span>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-2">
                          <Badge
                            variant="outline"
                            className="border-red-400 text-red-100 bg-red-900/30 backdrop-blur-sm"
                          >
                            <FileText className="h-3 w-3 mr-1" />
                            {publication.type === "case-study"
                              ? "Case Study"
                              : publication.type === "success-story"
                                ? "Success Story"
                                : "Report"}
                          </Badge>

                          {publication.date && (
                            <Badge
                              variant="outline"
                              className="border-pink-400 text-pink-100 bg-pink-900/30 backdrop-blur-sm"
                            >
                              <Calendar className="h-3 w-3 mr-1" />
                              {new Date(publication.date).toLocaleDateString()}
                            </Badge>
                          )}
                        </div>

                        <div className="mt-1 text-xs opacity-80 group-hover:opacity-100 transition-all duration-300">
                          <p className="line-clamp-2 text-gray-200">{publication.summary}</p>
                          <div className="flex items-center mt-1 text-xs font-medium text-red-300">
                            <span>View details</span>
                            <ArrowRight className="h-3 w-3 ml-1" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </CardContent>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        {selectedPublication && (
          <DialogContent className="max-w-4xl bg-gradient-to-br from-gray-50 to-white rounded-2xl border-none shadow-[0_20px_80px_rgba(0,0,0,0.3)]">
            <DialogClose onClick={() => setIsModalOpen(false)} />

            <DialogHeader className="mb-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <DialogTitle className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-pink-600">
                    {selectedPublication.title}
                  </DialogTitle>
                  <DialogDescription className="text-base mt-1 text-gray-600">
                    <div className="flex flex-wrap items-center gap-3 mt-1">
                      <span className="flex items-center">
                        <Building className="h-4 w-4 mr-1 text-gray-500" />
                        {selectedPublication.company}
                      </span>
                      <span className="flex items-center">
                        <FileText className="h-4 w-4 mr-1 text-gray-500" />
                        {selectedPublication.type === "case-study"
                          ? "Case Study"
                          : selectedPublication.type === "success-story"
                            ? "Success Story"
                            : "Report"}
                      </span>
                      {selectedPublication.date && (
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1 text-gray-500" />
                          {new Date(selectedPublication.date).toLocaleDateString()}
                        </span>
                      )}
                      {selectedPublication.implementationDate && (
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1 text-gray-500" />
                          Implemented: {new Date(selectedPublication.implementationDate).toLocaleDateString()}
                        </span>
                      )}
                    </div>
                  </DialogDescription>
                </div>

                <Badge
                  className={`
                  ${
                    selectedPublication.status === "published"
                      ? "bg-gradient-to-r from-green-500 to-emerald-600"
                      : selectedPublication.status === "in-progress"
                        ? "bg-gradient-to-r from-amber-500 to-orange-600"
                        : "bg-gradient-to-r from-blue-500 to-indigo-600"
                  } 
                  border-none text-white py-1 px-3 text-sm`}
                >
                  {selectedPublication.status === "published" ? (
                    <>
                      <CheckCircle className="h-4 w-4 mr-1" /> Published
                    </>
                  ) : selectedPublication.status === "in-progress" ? (
                    <>
                      <Clock className="h-4 w-4 mr-1" /> In Progress
                    </>
                  ) : (
                    <>
                      <Calendar className="h-4 w-4 mr-1" /> Planned
                    </>
                  )}
                </Badge>
              </div>
            </DialogHeader>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
              <div>
                <div className="relative overflow-hidden rounded-xl shadow-lg h-64 mb-6 transform transition-transform hover:scale-[1.02] duration-300">
                  <img
                    src={selectedPublication.imageUrl || "/placeholder.svg"}
                    alt={selectedPublication.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-pink-50 p-5 rounded-xl border border-red-100/50 shadow-sm">
                  <h4 className="font-semibold text-red-800 flex items-center gap-2 mb-3">
                    <TrendingUp className="h-5 w-5 text-red-600" />
                    Impact & Results
                  </h4>
                  <p className="text-red-900 leading-relaxed mb-4">{selectedPublication.impact}</p>

                  <div className="space-y-3">
                    {selectedPublication.results.map((result, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="bg-red-100 text-red-600 rounded-full p-1 mt-0.5">
                          <CheckCircle className="h-3 w-3" />
                        </div>
                        <span className="text-sm text-red-800">{result}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 pt-4 border-t border-red-100">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="text-sm font-medium text-red-700">Sustainability Score</h5>
                      <span className="text-sm font-bold text-red-800">
                        {selectedPublication.sustainabilityScore}/100
                      </span>
                    </div>
                    <div className="w-full bg-red-100 rounded-full h-2.5">
                      <div
                        className="bg-gradient-to-r from-red-500 to-pink-600 h-2.5 rounded-full"
                        style={{ width: `${selectedPublication.sustainabilityScore}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2 text-lg">
                  <div className="h-6 w-1 bg-gradient-to-b from-red-500 to-pink-600 rounded-full mr-1"></div>
                  Implementation Details
                </h4>

                <div className="space-y-6 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                  <div>
                    <h5 className="text-md font-medium text-gray-800 mb-2 flex items-center">
                      <Lightbulb className="h-4 w-4 text-amber-500 mr-2" />
                      Summary
                    </h5>
                    <p className="text-gray-700">{selectedPublication.summary}</p>
                  </div>

                  <div>
                    <h5 className="text-md font-medium text-gray-800 mb-2 flex items-center">
                      <Target className="h-4 w-4 text-red-500 mr-2" />
                      Challenges
                    </h5>
                    <div className="space-y-2">
                      {selectedPublication.challenges.map((challenge, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-3 bg-white p-3 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 hover:border-red-200"
                        >
                          <div className="bg-gradient-to-br from-red-500 to-pink-500 text-white rounded-full p-1 mt-0.5 shadow-sm">
                            <CheckCircle className="h-3 w-3" />
                          </div>
                          <span className="text-sm text-gray-800">{challenge}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="text-md font-medium text-gray-800 mb-2 flex items-center">
                      <Leaf className="h-4 w-4 text-green-500 mr-2" />
                      Solutions
                    </h5>
                    <div className="space-y-2">
                      {selectedPublication.solutions.map((solution, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-3 bg-white p-3 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 hover:border-red-200"
                        >
                          <div className="bg-gradient-to-br from-green-500 to-emerald-500 text-white rounded-full p-1 mt-0.5 shadow-sm">
                            <CheckCircle className="h-3 w-3" />
                          </div>
                          <span className="text-sm text-gray-800">{solution}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-xl border border-blue-100/50 shadow-sm">
                    <h5 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                      <Award className="h-5 w-5 text-blue-600" />
                      Key Technologies
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {selectedPublication.keyTechnologies.map((tech, index) => (
                        <Badge key={index} className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="mt-4 pt-4 border-t border-blue-100">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-blue-600" />
                        <span className="text-sm font-medium text-blue-800">
                          Implementation Team: {selectedPublication.teamSize} members
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>

      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #ef4444, #ec4899);
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #dc2626, #db2777);
        }
      `}</style>
    </Card>
  )
}

export default InnovativeMeasures

