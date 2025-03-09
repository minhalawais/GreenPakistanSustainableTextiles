"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Users, Target } from "lucide-react"

interface CompanyData {
  name: string
  implemented: boolean
  sector: string
  size: "small" | "medium" | "large"
}

const companies: CompanyData[] = [
  { name: "Forward Sports", implemented: true, sector: "Sports Goods", size: "large" },
  { name: "Anwar Khawaja Industries", implemented: true, sector: "Sports Goods", size: "large" },
  { name: "Capital Sports", implemented: true, sector: "Sports Goods", size: "medium" },
  { name: "Talon Sports", implemented: true, sector: "Sports Goods", size: "medium" },
  { name: "Awan Sports", implemented: true, sector: "Sports Goods", size: "small" },
  { name: "Saga Sports", implemented: true, sector: "Sports Goods", size: "medium" },
  { name: "Grays of Cambridge", implemented: true, sector: "Sports Goods", size: "medium" },
  { name: "CA Sports", implemented: true, sector: "Sports Goods", size: "medium" },
  { name: "Malik Sports", implemented: true, sector: "Sports Goods", size: "medium" },
  { name: "Jalandhar Sports", implemented: true, sector: "Sports Goods", size: "small" },
  { name: "Spartan Sports", implemented: true, sector: "Sports Goods", size: "medium" },
  { name: "Slazenger", implemented: true, sector: "Sports Goods", size: "large" },
  { name: "Company A", implemented: false, sector: "Sports Goods", size: "small" },
  { name: "Company B", implemented: false, sector: "Sports Goods", size: "medium" },
  { name: "Company C", implemented: false, sector: "Sports Goods", size: "small" },
]

const chartData = [
  { year: 2022, before: 30, after: 45, companies: 5 },
  { year: 2023, before: 45, after: 65, companies: 8 },
  { year: 2024, before: 65, after: 85, companies: 12 },
]

export function GenderImpactChart() {
  const implementedCount = companies.filter((c) => c.implemented).length
  const target = 50
  const progress = Math.round((implementedCount / target) * 100)

  const smallCompanies = companies.filter((c) => c.implemented && c.size === "small").length
  const mediumCompanies = companies.filter((c) => c.implemented && c.size === "medium").length
  const largeCompanies = companies.filter((c) => c.implemented && c.size === "large").length

  return (
    <Card className="border border-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden mb-6">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-600"></div>
      <CardHeader className="pb-2 pt-4 border-b border-gray-100">
        <CardTitle className="text-lg font-semibold text-gray-800 flex items-center">
          <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-pink-600 rounded-full mr-2"></div>
          Gender-Sensitive Measures Impact
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-purple-500" />
              <span className="text-sm font-medium text-gray-700">Companies Implemented: {implementedCount}</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-purple-500" />
              <span className="text-sm font-medium text-gray-700">Target: {target} companies</span>
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
                className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-600"
              ></motion.div>
            </div>
          </div>

          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 mr-2"></div>
              <span className="text-sm font-medium text-gray-700">After Implementation</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 mr-2"></div>
              <span className="text-sm font-medium text-gray-700">Before Implementation</span>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorBefore" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1} />
                </linearGradient>
                <linearGradient id="colorAfter" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.1} />
                </linearGradient>
                <filter id="shadow-line" height="130%">
                  <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#8B5CF6" floodOpacity="0.3" />
                </filter>
              </defs>
              <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fill: "#64748b", fontSize: 12 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: "#64748b", fontSize: 12 }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "none",
                  borderRadius: "0.5rem",
                  padding: "0.5rem",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                }}
                itemStyle={{ padding: 0 }}
                labelStyle={{ marginBottom: 5, fontWeight: 600 }}
                formatter={(value, name, props) => {
                  if (name === "companies") {
                    return [`${value} companies`, "Companies Implemented"]
                  }
                  return [`${value}%`, name === "before" ? "Before Implementation" : "After Implementation"]
                }}
              />
              <Area
                type="monotone"
                dataKey="before"
                stroke="#3B82F6"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#colorBefore)"
                dot={{ stroke: "#3B82F6", strokeWidth: 2, r: 4, fill: "white" }}
                activeDot={{ r: 6, stroke: "#3B82F6", strokeWidth: 2, fill: "white" }}
                name="Before Implementation"
              />
              <Area
                type="monotone"
                dataKey="after"
                stroke="#8B5CF6"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#colorAfter)"
                dot={{ stroke: "#8B5CF6", strokeWidth: 2, r: 4, fill: "white" }}
                activeDot={{ r: 6, stroke: "#8B5CF6", strokeWidth: 2, fill: "white" }}
                name="After Implementation"
                filter="url(#shadow-line)"
              />
            </AreaChart>
          </ResponsiveContainer>

          <div className="mt-4 grid grid-cols-3 gap-2">
            <div className="bg-white rounded-lg border border-gray-100 p-3 shadow-sm">
              <div className="flex flex-col items-center">
                <span className="text-lg font-bold text-gray-800">{smallCompanies}</span>
                <span className="text-xs text-gray-600">Small Companies</span>
              </div>
            </div>
            <div className="bg-white rounded-lg border border-gray-100 p-3 shadow-sm">
              <div className="flex flex-col items-center">
                <span className="text-lg font-bold text-gray-800">{mediumCompanies}</span>
                <span className="text-xs text-gray-600">Medium Companies</span>
              </div>
            </div>
            <div className="bg-white rounded-lg border border-gray-100 p-3 shadow-sm">
              <div className="flex flex-col items-center">
                <span className="text-lg font-bold text-gray-800">{largeCompanies}</span>
                <span className="text-xs text-gray-600">Large Companies</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2">
          {companies.map((company, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
              className={`p-3 rounded-lg border transition-all bg-white shadow-sm ${
                company.implemented
                  ? "border-purple-100 hover:border-purple-200"
                  : "border-gray-100 hover:border-gray-200"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-2 h-2 rounded-full ${company.implemented ? "bg-purple-500" : "bg-gray-300"}`}
                  ></div>
                  <span className="text-sm font-medium text-gray-800">{company.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500">{company.sector}</span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs ${
                      company.size === "small"
                        ? "bg-blue-50 text-blue-700"
                        : company.size === "medium"
                          ? "bg-purple-50 text-purple-700"
                          : "bg-indigo-50 text-indigo-700"
                    }`}
                  >
                    {company.size.charAt(0).toUpperCase() + company.size.slice(1)}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default GenderImpactChart

