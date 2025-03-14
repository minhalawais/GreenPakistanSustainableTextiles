"use client"

import { motion } from "framer-motion"
import { Download, ArrowRight, CheckCircle, FileText, Droplet, Recycle, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const reports = [
  {
    title: "Annual Sustainability Report 2023",
    company: "Forward Sports",
    date: "May 2023",
    type: "PDF",
    size: "2.4 MB",
    url: "#",
    color: "from-amber-500 to-orange-600",
  },
  {
    title: "Sustainability Report Q2 2023",
    company: "Anwar Khawaja Industries",
    date: "June 2023",
    type: "PDF",
    size: "3.8 MB",
    url: "#",
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Sustainability Impact Report 2023",
    company: "Capital Sports",
    date: "July 2023",
    type: "PDF",
    size: "1.7 MB",
    url: "#",
    color: "from-purple-500 to-pink-600",
  },
  {
    title: "Sustainability Progress Report H1 2023",
    company: "Forward Sports",
    date: "August 2023",
    type: "PDF",
    size: "2.2 MB",
    url: "#",
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "Sustainability Report 2021",
    company: "Anwar Khawaja Industries",
    date: "September 2023",
    type: "PDF",
    size: "3.1 MB",
    url: "#",
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Sustainability Metrics Report Q3 2023",
    company: "Capital Sports",
    date: "October 2023",
    type: "PDF",
    size: "2.8 MB",
    url: "#",
    color: "from-red-500 to-pink-600",
  },
]

export function SustainabilityMeasures() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = Math.ceil(reports.length / 3);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const currentReports = reports.slice(currentSlide * 3, (currentSlide + 1) * 3);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="md:col-span-2 bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="border-b border-gray-100 p-6">
          <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
            <div className="w-1 h-6 bg-gradient-to-b from-amber-500 to-orange-600 rounded-full mr-2"></div>
            Sustainability Reports Publications
          </h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
            {currentReports.map((report, i) => (
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
                    <span className="inline-block text-xs font-medium text-gray-500 mb-1 bg-gray-50 px-2 py-1 rounded-full">{report.company}</span>
                    <h4 className="font-medium text-gray-900 mb-2">{report.title}</h4>
                    <p className="text-sm text-gray-500 mb-2 flex items-center gap-2">
                      <span className="font-medium">{report.type}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                      <span>{report.size}</span>
                    </p>
                    <p className="text-xs text-gray-400 mb-4">
                      Published: <span className="font-medium">{report.date}</span>
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
          <div className="flex justify-center items-center gap-4 mt-6">
            <motion.button 
              onClick={prevSlide}
              className="p-2 rounded-full bg-gray-100 hover:bg-amber-100 text-gray-600 hover:text-amber-600 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              disabled={currentSlide === 0}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <div className="flex gap-2">
              {Array.from({ length: totalSlides }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${currentSlide === i ? 'bg-amber-500' : 'bg-gray-300'}`}
                />
              ))}
            </div>
            <motion.button 
              onClick={nextSlide}
              className="p-2 rounded-full bg-gray-100 hover:bg-amber-100 text-gray-600 hover:text-amber-600 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              disabled={currentSlide === totalSlides - 1}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SustainabilityMeasures