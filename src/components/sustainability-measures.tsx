"use client"

import { motion } from "framer-motion"
import { Download, ArrowRight, CheckCircle, FileText, Droplet, Recycle } from 'lucide-react'

const successStories = [
  {
    company: "Factory A",
    title: "Carbon Emission Reduction",
    description: "Reduced carbon emissions by 30% through innovative manufacturing processes",
    icon: CheckCircle,
    color: "#34D399",
    bgColor: "from-emerald-50 to-emerald-100",
  },
  {
    company: "Factory B",
    title: "Circular Economy Model",
    description: "Implemented a circular economy model, recycling 90% of their textile waste",
    icon: Recycle,
    color: "#60A5FA",
    bgColor: "from-blue-50 to-blue-100",
  },
  {
    company: "Factory C",
    title: "Water Conservation Initiative",
    description: "Reduced water usage by 40% in their production facilities",
    icon: Droplet,
    color: "#818CF8",
    bgColor: "from-indigo-50 to-indigo-100",
  },
]

const reports = [
  {
    title: "Q2 2023 Sustainability Report",
    type: "PDF",
    size: "2.4 MB",
    url: "#",
    color: "from-amber-500 to-orange-600",
  },
  {
    title: "Annual Sustainability Overview 2022",
    type: "PDF",
    size: "3.8 MB",
    url: "#",
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Gender Equality Initiative Results",
    type: "PDF",
    size: "1.7 MB",
    url: "#",
    color: "from-purple-500 to-pink-600",
  },
]

export function SustainabilityMeasures() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      <div className="md:col-span-2 bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="border-b border-gray-100 p-6">
          <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
            <div className="w-1 h-6 bg-gradient-to-b from-amber-500 to-orange-600 rounded-full mr-2"></div>
            Case Studies & Reports
          </h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reports.map((report, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + (i * 0.1), duration: 0.5 }}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                className="p-6 rounded-xl bg-white border border-gray-100 shadow-md transition-all duration-300 hover:border-amber-100 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r opacity-80 rounded-t-xl" style={{ backgroundImage: `linear-gradient(to right, ${report.color.split(" ")[1]}, ${report.color.split(" ")[3]})` }}></div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100">
                    <FileText className="w-6 h-6 text-amber-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 mb-2">{report.title}</h4>
                    <p className="text-sm text-gray-500 mb-4 flex items-center gap-2">
                      <span className="font-medium">{report.type}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                      <span>{report.size}</span>
                    </p>
                    <motion.button 
                      className="w-full inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-amber-600 bg-amber-50 border border-amber-200 rounded-lg hover:bg-amber-100 hover:text-amber-700 transition-colors"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Download className="mr-2 w-4 h-4" /> Download
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SustainabilityMeasures
