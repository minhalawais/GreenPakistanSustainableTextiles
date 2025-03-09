"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileCheck, Calendar, Building } from "lucide-react"
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const reports = [
  { company: "Forward Sports", status: "completed", date: "2024-01-15" },
  { company: "Anwar Khawaja Industries", status: "completed", date: "2024-02-10" },
  { company: "Capital Sports", status: "completed", date: "2024-02-28" },
  { company: "Talon Sports", status: "completed", date: "2024-03-05" },
  { company: "Awan Sports", status: "in-progress", date: null },
  { company: "Saga Sports", status: "in-progress", date: null },
  { company: "Grays of Cambridge", status: "planned", date: null },
]

const monthlyData = [
  { month: "Jan", reports: 1 },
  { month: "Feb", reports: 2 },
  { month: "Mar", reports: 1 },
  { month: "Apr", reports: 0 },
  { month: "May", reports: 0 },
  { month: "Jun", reports: 0 },
  { month: "Jul", reports: 0 },
  { month: "Aug", reports: 0 },
  { month: "Sep", reports: 0 },
  { month: "Oct", reports: 0 },
  { month: "Nov", reports: 0 },
  { month: "Dec", reports: 0 },
]

export function SustainabilityReports() {
  const completedReports = reports.filter((report) => report.status === "completed").length
  const inProgressReports = reports.filter((report) => report.status === "in-progress").length
  const plannedReports = reports.filter((report) => report.status === "planned").length
  const target = 15
  const progress = Math.round((completedReports / target) * 100)

  return (
    <Card className="border border-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden mb-6">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-600"></div>
      <CardHeader className="pb-2 pt-4 border-b border-gray-100">
        <CardTitle className="text-lg font-semibold text-gray-800 flex items-center">
          <div className="w-1 h-6 bg-gradient-to-b from-emerald-500 to-teal-600 rounded-full mr-2"></div>
          Sustainability Reports Tracking
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-emerald-500" />
              <span className="text-sm font-medium text-gray-700">Completed Reports: {completedReports}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-amber-500" />
              <span className="text-sm font-medium text-gray-700">Target: {target} by November</span>
            </div>
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm text-gray-600">Progress</span>
              <span className="text-sm font-medium text-gray-700">{progress}%</span>
            </div>
            <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 1 }}
                className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-600"
              ></motion.div>
            </div>
          </div>

          <div className="flex justify-between items-center mb-4 mt-6">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              <span className="text-xs text-gray-600">Completed: {completedReports}</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-amber-500"></div>
              <span className="text-xs text-gray-600">In Progress: {inProgressReports}</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-gray-300"></div>
              <span className="text-xs text-gray-600">Planned: {plannedReports}</span>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={150}>
            <BarChart data={monthlyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#64748b", fontSize: 10 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: "#64748b", fontSize: 10 }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "none",
                  borderRadius: "0.5rem",
                  padding: "0.5rem",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                }}
              />
              <defs>
                <linearGradient id="reportsGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#10B981" />
                  <stop offset="100%" stopColor="#14B8A6" />
                </linearGradient>
              </defs>
              <Bar dataKey="reports" fill="url(#reportsGradient)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <div className="text-xs text-gray-500 italic text-center">Monthly report completion</div>
        </div>

        <div className="space-y-2 max-h-[250px] overflow-y-auto pr-2">
          {reports.map((report, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
              className="flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:border-emerald-100 transition-all bg-white shadow-sm"
            >
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-full bg-gray-50">
                  <Building className="w-4 h-4 text-gray-500" />
                </div>
                <span className="text-sm font-medium text-gray-800">{report.company}</span>
              </div>
              <div className="flex items-center gap-2">
                {report.date && (
                  <span className="text-xs text-gray-500">{new Date(report.date).toLocaleDateString()}</span>
                )}
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    report.status === "completed"
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                      : report.status === "in-progress"
                        ? "bg-amber-50 text-amber-700 border border-amber-100"
                        : "bg-gray-50 text-gray-700 border border-gray-200"
                  }`}
                >
                  {report.status === "completed"
                    ? "Completed"
                    : report.status === "in-progress"
                      ? "In Progress"
                      : "Planned"}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default SustainabilityReports

