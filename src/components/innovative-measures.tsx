"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, FileText, Calendar, CheckCircle, Clock } from "lucide-react"

interface Publication {
  title: string
  company: string
  date: string | null
  status: "published" | "in-progress" | "planned"
  type: "case-study" | "success-story" | "report"
}

const publications: Publication[] = [
  {
    title: "Water Conservation in Manufacturing",
    company: "Forward Sports",
    date: "2024-01-15",
    status: "published",
    type: "case-study",
  },
  {
    title: "Renewable Energy Implementation",
    company: "Anwar Khawaja Industries",
    date: "2024-02-10",
    status: "published",
    type: "success-story",
  },
  {
    title: "Waste Reduction Strategies",
    company: "Capital Sports",
    date: "2024-03-05",
    status: "published",
    type: "case-study",
  },
  {
    title: "Gender Equality in Manufacturing",
    company: "Talon Sports",
    date: null,
    status: "in-progress",
    type: "report",
  },
  {
    title: "Sustainable Supply Chain",
    company: "Awan Sports",
    date: null,
    status: "in-progress",
    type: "case-study",
  },
  {
    title: "Carbon Footprint Reduction",
    company: "Saga Sports",
    date: null,
    status: "planned",
    type: "success-story",
  },
]

export function InnovativeMeasures() {
  const publishedCount = publications.filter((p) => p.status === "published").length
  const inProgressCount = publications.filter((p) => p.status === "in-progress").length
  const plannedCount = publications.filter((p) => p.status === "planned").length
  const target = 15
  const progress = Math.round((publishedCount / target) * 100)

  return (
    <Card className="border border-gray-100 shadow-lg overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-pink-600"></div>
      <CardHeader className="pb-2 pt-4 border-b border-gray-100">
        <CardTitle className="text-lg font-semibold text-gray-800 flex items-center">
          <div className="w-1 h-6 bg-gradient-to-b from-red-500 to-pink-600 rounded-full mr-2"></div>
          Innovative Measures Publication
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-red-500" />
                <span className="text-sm font-medium text-gray-700">Published: {publishedCount}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-red-500" />
                <span className="text-sm font-medium text-gray-700">Target: {target} by Year 2</span>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm text-gray-600">Progress</span>
                <span className="text-sm font-medium text-gray-700">{progress}%</span>
              </div>
              <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 1 }}
                  className="h-full rounded-full bg-gradient-to-r from-red-500 to-pink-600"
                ></motion.div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="bg-white rounded-lg border border-gray-100 p-3 shadow-sm">
                <div className="flex flex-col items-center">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mb-1" />
                  <span className="text-lg font-bold text-gray-800">{publishedCount}</span>
                  <span className="text-xs text-gray-600">Published</span>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-100 p-3 shadow-sm">
                <div className="flex flex-col items-center">
                  <Clock className="w-6 h-6 text-amber-500 mb-1" />
                  <span className="text-lg font-bold text-gray-800">{inProgressCount}</span>
                  <span className="text-xs text-gray-600">In Progress</span>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-100 p-3 shadow-sm">
                <div className="flex flex-col items-center">
                  <Calendar className="w-6 h-6 text-gray-400 mb-1" />
                  <span className="text-lg font-bold text-gray-800">{plannedCount}</span>
                  <span className="text-xs text-gray-600">Planned</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-lg border border-red-100 p-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-5 h-5 text-red-500" />
                <h4 className="text-sm font-medium text-gray-800">Publication Types</h4>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="flex flex-col items-center">
                  <span className="text-lg font-bold text-gray-800">
                    {publications.filter((p) => p.type === "case-study").length}
                  </span>
                  <span className="text-xs text-gray-600">Case Studies</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-lg font-bold text-gray-800">
                    {publications.filter((p) => p.type === "success-story").length}
                  </span>
                  <span className="text-xs text-gray-600">Success Stories</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-lg font-bold text-gray-800">
                    {publications.filter((p) => p.type === "report").length}
                  </span>
                  <span className="text-xs text-gray-600">Reports</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2">
            {publications.map((publication, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                className="p-3 rounded-lg border border-gray-100 hover:border-red-100 transition-all bg-white shadow-sm"
              >
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm font-medium text-gray-800">{publication.title}</h4>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      publication.status === "published"
                        ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                        : publication.status === "in-progress"
                          ? "bg-amber-50 text-amber-700 border border-amber-100"
                          : "bg-gray-50 text-gray-700 border border-gray-200"
                    }`}
                  >
                    {publication.status === "published"
                      ? "Published"
                      : publication.status === "in-progress"
                        ? "In Progress"
                        : "Planned"}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600">{publication.company}</span>
                  {publication.date && (
                    <span className="text-xs text-gray-500">{new Date(publication.date).toLocaleDateString()}</span>
                  )}
                </div>

                <div className="mt-2">
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      publication.type === "case-study"
                        ? "bg-blue-50 text-blue-700"
                        : publication.type === "success-story"
                          ? "bg-purple-50 text-purple-700"
                          : "bg-orange-50 text-orange-700"
                    }`}
                  >
                    {publication.type === "case-study"
                      ? "Case Study"
                      : publication.type === "success-story"
                        ? "Success Story"
                        : "Report"}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default InnovativeMeasures

