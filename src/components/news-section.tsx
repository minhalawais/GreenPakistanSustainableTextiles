"use client"

import { FileText, ArrowRight, Clock, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

const news = [
  {
    title: "Sustainable Manufacturing Initiative Launch",
    date: "March 15, 2024",
    summary: "New program launched to reduce carbon footprint in manufacturing.",
    pdf: "/pdfs/sustainable-manufacturing.pdf",
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "Gender Equality Program Success",
    date: "March 10, 2024",
    summary: "50% increase in women leadership roles across member companies.",
    pdf: "/pdfs/gender-equality-report.pdf",
    color: "from-purple-500 to-pink-600",
  },
  {
    title: "LkSG Compliance Achievement",
    date: "March 5, 2024",
    summary: "80% of member companies now fully compliant with LkSG requirements.",
    pdf: "/pdfs/lksg-compliance.pdf",
    color: "from-emerald-500 to-teal-600",
  },
]

export function NewsSection() {
  return (
    <div className="h-full bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden">
      <div className="border-b border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-gray-900 flex items-center">
          <div className="w-1 h-6 bg-gradient-to-b from-red-500 to-pink-600 rounded-full mr-2"></div>
          Latest Sustainability News
        </h2>
      </div>

      <div className="p-6">
        <div className="space-y-4">
          {news.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              }}
              className="p-4 rounded-lg border border-gray-100 hover:border-red-100 transition-all duration-200 hover:shadow-md bg-white relative overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r opacity-80 rounded-t-lg"
                style={{
                  backgroundImage: `linear-gradient(to right, ${item.color.split(" ")[1]}, ${item.color.split(" ")[3]})`,
                }}
              ></div>

              <div className="flex justify-between items-start mb-3 pt-2">
                <h4 className="font-semibold text-gray-900 hover:text-red-600 transition-colors">{item.title}</h4>
                <span className="text-sm text-gray-500 flex items-center gap-1">
                  <Clock className="w-4 h-4 text-red-400" />
                  {item.date}
                </span>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed mb-4">{item.summary}</p>

              <div className="flex items-center gap-3">
                <motion.button
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-red-600 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </motion.button>

                <motion.button
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-700 border border-gray-200 hover:bg-gray-50 rounded-md transition-colors"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  <FileText className="mr-2 w-4 h-4" />
                  Download PDF
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-red-500 to-pink-600 rounded-md shadow-md hover:shadow-lg transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All News <ExternalLink className="ml-2 w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

export default NewsSection

