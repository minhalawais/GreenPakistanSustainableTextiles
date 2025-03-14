"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Building, CheckCircle, Briefcase, ArrowRight, Calendar, TrendingUp, X } from "lucide-react"

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
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        onOpenChange(false)
      }
    }

    if (open) {
      document.body.style.overflow = "hidden"
      document.addEventListener("keydown", handleEscape)
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
      document.removeEventListener("keydown", handleEscape)
    }
  }, [open, onOpenChange])

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

interface CompanyData {
  name: string
  implemented: boolean
  sector: string
  size: "small" | "medium" | "large"
  imageUrl: string
  measures: string[]
  employeeCount: number
  yearImplemented: number
  impact: string
}

// Enhanced company data with more details
const companies: CompanyData[] = [
  {
    name: "Forward Sports",
    implemented: true,
    sector: "Sports Goods",
    size: "large",
    imageUrl: "https://aptma.org.pk/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-12-at-2.42.02-PM-1280x856.jpeg",
    measures: [
      "Flexible working hours for women with children",
      "Equal pay policy implementation",
      "Women's leadership development program",
      "Maternity leave extension to 6 months",
      "On-site childcare facilities",
    ],
    employeeCount: 1200,
    yearImplemented: 2018,
    impact: "Increased female workforce from 15% to 32% in 3 years",
  },
  {
    name: "Anwar Khawaja Industries",
    implemented: true,
    sector: "Sports Goods",
    size: "large",
    imageUrl: "https://profit.pakistantoday.com.pk/wp-content/uploads/2017/06/Labour-laws-in-Pakistan.jpg",
    measures: [
      "Gender-balanced recruitment panels",
      "Anti-harassment training for all employees",
      "Women's mentorship program",
      "Equal promotion opportunities policy",
      "Gender pay gap reporting",
    ],
    employeeCount: 950,
    yearImplemented: 2019,
    impact: "Reduced gender pay gap by 18% and increased women in management by 25%",
  },
  {
    name: "Capital Sports",
    implemented: true,
    sector: "Sports Goods",
    size: "medium",
    imageUrl: "https://www.aljazeera.com/wp-content/uploads/2020/03/9307353f488941299d31f30a2372080e_18.jpeg?resize=770%2C513&quality=80",
    measures: [
      "Women's skills development program",
      "Gender-sensitive workplace design",
      "Paternity leave policy",
      "Return-to-work program for new mothers",
      "Gender diversity targets",
    ],
    employeeCount: 450,
    yearImplemented: 2020,
    impact: "Achieved 45% female representation across all departments",
  },
  {
    name: "Talon Sports",
    implemented: true,
    sector: "Sports Goods",
    size: "medium",
    imageUrl: "https://pilap.pk/wp-content/uploads/2023/09/labour-.jpg",
    measures: [
      "Women in leadership initiative",
      "Gender-neutral job descriptions",
      "Flexible work arrangements",
      "Unconscious bias training",
      "Women's networking events",
    ],
    employeeCount: 380,
    yearImplemented: 2019,
    impact: "Increased female leadership positions by 40% since implementation",
  },
  {
    name: "Awan Sports",
    implemented: true,
    sector: "Sports Goods",
    size: "small",
    imageUrl: "https://images.unsplash.com/photo-1581091877018-dac6a371d50f?w=500&auto=format&fit=crop&q=60",
    measures: [
      "Equal pay audit and adjustments",
      "Women's safety measures in the workplace",
      "Inclusive workplace culture training",
      "Menstrual leave policy",
      "Childcare subsidies",
    ],
    employeeCount: 120,
    yearImplemented: 2021,
    impact: "Employee satisfaction among women increased by 67%",
  },
  {
    name: "Saga Sports",
    implemented: true,
    sector: "Sports Goods",
    size: "medium",
    imageUrl: "https://d3lzcn6mbbadaf.cloudfront.net/media/details/ANI-20240512163112.jpg",
    measures: [
      "Gender-balanced interview shortlists",
      "Women's leadership academy",
      "Sexual harassment prevention policy",
      "Parental leave for all genders",
      "Women's health programs",
    ],
    employeeCount: 520,
    yearImplemented: 2018,
    impact: "Retention rate for female employees increased from 65% to 89%",
  },
  {
    name: "Grays of Cambridge",
    implemented: true,
    sector: "Sports Goods",
    size: "medium",
    imageUrl: "https://www.icimod.org/wp-content/uploads/2020/06/The-long-road-to-gender-equality-in-Pakistans-labour-force.jpg",
    measures: [
      "Gender pay equity analysis and adjustments",
      "Women in STEM initiatives",
      "Inclusive workplace design",
      "Mentorship program for women",
      "Gender-sensitive communication guidelines",
    ],
    employeeCount: 410,
    yearImplemented: 2020,
    impact: "Women in technical roles increased from 12% to 31%",
  },
  {
    name: "CA Sports",
    implemented: true,
    sector: "Sports Goods",
    size: "medium",
    imageUrl: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=500&auto=format&fit=crop&q=60",
    measures: [
      "Women's career advancement program",
      "Gender-inclusive facilities",
      "Anti-discrimination policy",
      "Flexible working arrangements",
      "Family-friendly policies",
    ],
    employeeCount: 350,
    yearImplemented: 2019,
    impact: "Achieved 50/50 gender balance in management positions",
  },
  {
    name: "Malik Sports",
    implemented: true,
    sector: "Sports Goods",
    size: "medium",
    imageUrl: "https://propakistani.pk/wp-content/uploads/2022/08/South-Asia-Labor.jpg",
    measures: [
      "Women's leadership development",
      "Equal pay for equal work policy",
      "Gender-sensitive recruitment process",
      "Work-life balance initiatives",
      "Women's health and wellness program",
    ],
    employeeCount: 480,
    yearImplemented: 2020,
    impact: "Increased female workforce participation by 28%",
  },
  {
    name: "Jalandhar Sports",
    implemented: true,
    sector: "Sports Goods",
    size: "small",
    imageUrl: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=500&auto=format&fit=crop&q=60",
    measures: [
      "Gender diversity training",
      "Women's empowerment workshops",
      "Equal opportunity policy",
      "Flexible work hours",
      "Childcare support",
    ],
    employeeCount: 150,
    yearImplemented: 2021,
    impact: "Doubled the number of women in supervisory roles",
  },
  {
    name: "Spartan Sports",
    implemented: true,
    sector: "Sports Goods",
    size: "medium",
    imageUrl: "https://i.tribune.com.pk/media/images/802222-women-1417781480/802222-women-1417781480.jpg",
    measures: [
      "Gender-balanced leadership team",
      "Equal pay transparency",
      "Women's professional development",
      "Anti-harassment policy",
      "Inclusive workplace culture",
    ],
    employeeCount: 420,
    yearImplemented: 2019,
    impact: "Achieved gender parity across all departments",
  },
  {
    name: "Slazenger",
    implemented: true,
    sector: "Sports Goods",
    size: "large",
    imageUrl: "https://images.unsplash.com/photo-1581092918179-c6f6a5f2ad18?w=500&auto=format&fit=crop&q=60",
    measures: [
      "Women in leadership initiative",
      "Gender pay gap elimination strategy",
      "Inclusive recruitment practices",
      "Extended parental leave",
      "Returnship program for women",
    ],
    employeeCount: 1500,
    yearImplemented: 2017,
    impact: "Women in senior leadership increased from 18% to 42%",
  },
  {
    name: "Company A",
    implemented: false,
    sector: "Sports Goods",
    size: "small",
    imageUrl: "https://images.unsplash.com/photo-1581092871430-199f4f2b5d0c?w=500&auto=format&fit=crop&q=60",
    measures: [],
    employeeCount: 80,
    yearImplemented: 0,
    impact: "Not yet implemented gender-sensitive measures",
  },
  {
    name: "Company B",
    implemented: false,
    sector: "Sports Goods",
    size: "medium",
    imageUrl: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=500&auto=format&fit=crop&q=60",
    measures: [],
    employeeCount: 320,
    yearImplemented: 0,
    impact: "Currently developing gender equality framework",
  },
  {
    name: "Company C",
    implemented: false,
    sector: "Sports Goods",
    size: "small",
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22731c9c8c?w=500&auto=format&fit=crop&q=60",
    measures: [],
    employeeCount: 110,
    yearImplemented: 0,
    impact: "Planning to implement measures in 2025",
  },
]
export function GenderImpactChart() {
  const [selectedCompany, setSelectedCompany] = useState<CompanyData | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleCardClick = (company: CompanyData) => {
    setSelectedCompany(company)
    setIsModalOpen(true)
  }

  return (
    <Card className="border border-gray-100 shadow-lg bg-gradient-to-br from-white to-gray-50 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-600"></div>
      <CardHeader className="pb-2 pt-4 border-b border-gray-100">
        <CardTitle className="text-lg font-semibold text-gray-800 flex items-center">
          <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-pink-600 rounded-full mr-2"></div>
          Gender-Sensitive Measures Impact
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <p className="text-gray-600 mb-4">
          Discover how companies in the sports goods sector are implementing gender-sensitive measures and creating more
          inclusive workplaces. Click on any company to learn more about their initiatives.
        </p>

        {/* Fixed height container with scroll */}
        <div className="h-[300px] overflow-y-auto pr-2 custom-scrollbar">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {companies.map((company, i) => (
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
                onClick={() => company.implemented && handleCardClick(company)}
              >
                <div
                  className={`relative h-60 w-full transform-gpu transition-all duration-500 ${
                    company.implemented ? "" : "opacity-70 grayscale"
                  }`}
                >
                  {/* Card with 3D effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm transform-gpu transition-transform duration-500 group-hover:scale-105 -z-10"></div>

                  <div className="h-full w-full rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20 backdrop-blur-sm transition-all duration-500 hover:shadow-[0_8px_30px_rgba(120,0,255,0.2)]">
                    {/* Image container with gradient overlay */}
                    <div className="relative h-full w-full overflow-hidden group">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{
                          backgroundImage: `url(${company.imageUrl})`,
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 transition-opacity group-hover:opacity-90" />

                      {/* Content */}
                      <div className="absolute inset-0 p-4 flex flex-col justify-end text-white">
                        <div className="absolute top-3 right-3 z-10">
                          {company.implemented ? (
                            <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 border-none text-white shadow-sm">
                              <CheckCircle className="h-3 w-3 mr-1" /> Implemented
                            </Badge>
                          ) : (
                            <Badge
                              variant="outline"
                              className="border-gray-400 text-gray-200 bg-black/30 backdrop-blur-sm"
                            >
                              Pending
                            </Badge>
                          )}
                        </div>

                        <h3 className="text-lg font-bold mb-1 drop-shadow-md">{company.name}</h3>

                        <div className="flex items-center text-xs text-gray-200 mb-1">
                          <Briefcase className="h-3 w-3 mr-1" />
                          <span>{company.sector}</span>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-2">
                          <Badge
                            variant="outline"
                            className="border-purple-400 text-purple-100 bg-purple-900/30 backdrop-blur-sm"
                          >
                            <Building className="h-3 w-3 mr-1" />
                            {company.size.charAt(0).toUpperCase() + company.size.slice(1)}
                          </Badge>

                          {company.implemented && (
                            <Badge
                              variant="outline"
                              className="border-blue-400 text-blue-100 bg-blue-900/30 backdrop-blur-sm"
                            >
                              <Users className="h-3 w-3 mr-1" />
                              {company.employeeCount}
                            </Badge>
                          )}
                        </div>

                        {company.implemented && (
                          <div className="mt-1 text-xs opacity-80 group-hover:opacity-100 transition-all duration-300">
                            <p className="line-clamp-2 text-gray-200">{company.impact}</p>
                            <div className="flex items-center mt-1 text-xs font-medium text-purple-300">
                              <span>View details</span>
                              <ArrowRight className="h-3 w-3 ml-1" />
                            </div>
                          </div>
                        )}
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
        {selectedCompany && (
          <DialogContent className="max-w-4xl bg-gradient-to-br from-gray-50 to-white rounded-2xl border-none shadow-[0_20px_80px_rgba(0,0,0,0.3)]">
            <DialogClose onClick={() => setIsModalOpen(false)} />

            <DialogHeader className="mb-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <DialogTitle className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-pink-600">
                    {selectedCompany.name}
                  </DialogTitle>
                  <DialogDescription className="text-base mt-1 text-gray-600">
                    <div className="flex flex-wrap items-center gap-3 mt-1">
                      <span className="flex items-center">
                        <Briefcase className="h-4 w-4 mr-1 text-gray-500" />
                        {selectedCompany.sector}
                      </span>
                      <span className="flex items-center">
                        <Building className="h-4 w-4 mr-1 text-gray-500" />
                        {selectedCompany.size.charAt(0).toUpperCase() + selectedCompany.size.slice(1)}
                      </span>
                      <span className="flex items-center">
                        <Users className="h-4 w-4 mr-1 text-gray-500" />
                        {selectedCompany.employeeCount} employees
                      </span>
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1 text-gray-500" />
                        Since {selectedCompany.yearImplemented}
                      </span>
                    </div>
                  </DialogDescription>
                </div>

                <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 border-none text-white py-1 px-3 text-sm">
                  <CheckCircle className="h-4 w-4 mr-1" /> Implemented
                </Badge>
              </div>
            </DialogHeader>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
              <div>
                <div className="relative overflow-hidden rounded-xl shadow-lg h-64 mb-6 transform transition-transform hover:scale-[1.02] duration-300">
                  <img
                    src={selectedCompany.imageUrl || "/placeholder.svg"}
                    alt={selectedCompany.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-5 rounded-xl border border-purple-100/50 shadow-sm">
                  <h4 className="font-semibold text-purple-800 flex items-center gap-2 mb-3">
                    <TrendingUp className="h-5 w-5 text-purple-600" />
                    Impact Highlights
                  </h4>
                  <p className="text-purple-900 leading-relaxed">{selectedCompany.impact}</p>

                  <div className="mt-4 pt-4 border-t border-purple-100">
                    <h5 className="text-sm font-medium text-purple-700 mb-2">Key Achievements</h5>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">Diversity</Badge>
                      <Badge className="bg-pink-100 text-pink-800 hover:bg-pink-200">Inclusion</Badge>
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Equal Pay</Badge>
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Leadership</Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2 text-lg">
                  <div className="h-6 w-1 bg-gradient-to-b from-purple-500 to-pink-600 rounded-full mr-1"></div>
                  Gender-Sensitive Measures
                </h4>

                <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                  {selectedCompany.measures.map((measure, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 hover:border-purple-200"
                    >
                      <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-full p-1.5 mt-0.5 shadow-sm">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <div>
                        <span className="font-medium text-gray-800">{measure}</span>
                        <p className="text-xs text-gray-500 mt-1">Implemented in {selectedCompany.yearImplemented}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-xl border border-blue-100/50 shadow-sm">
                  <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    Implementation Timeline
                  </h4>
                  <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 shadow-md"></div>
                    <div className="mb-6">
                      <p className="text-sm font-medium text-blue-800">{selectedCompany.yearImplemented}</p>
                      <p className="text-sm text-blue-700">Initial implementation of gender-sensitive measures</p>
                    </div>

                    <div className="absolute left-[-8px] top-[80px] h-4 w-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 shadow-md"></div>
                    <div className="mb-6">
                      <p className="text-sm font-medium text-blue-800">{selectedCompany.yearImplemented + 1}</p>
                      <p className="text-sm text-blue-700">Expanded program with additional measures</p>
                    </div>

                    <div className="absolute left-[-8px] top-[160px] h-4 w-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 shadow-md"></div>
                    <div>
                      <p className="text-sm font-medium text-blue-800">Present</p>
                      <p className="text-sm text-blue-700">Continuous improvement and monitoring</p>
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
          background: linear-gradient(to bottom, #a855f7, #ec4899);
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #9333ea, #db2777);
        }
      `}</style>
    </Card>
  )
}

export default GenderImpactChart

