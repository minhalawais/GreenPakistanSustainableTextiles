"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, CheckCircle, AlertTriangle, ChevronDown } from "lucide-react"

interface KPI {
  name: string
  target: number | string
  current: number
  deadline: string
  color: string
  status: "on-track" | "at-risk" | "behind"
  unit?: string
}

const kpis: KPI[] = [
  {
    name: "Companies Advised on LkSG/EU Green Deal",
    target: "350-400",
    current: 25,
    deadline: "2025-12-31",
    color: "from-blue-500 to-indigo-600",
    status: "on-track",
    unit: "companies",
  },
  {
    name: "Sustainability Reports",
    target: 15,
    current: 4,
    deadline: "2024-11-30",
    color: "from-emerald-500 to-teal-600",
    status: "at-risk",
    unit: "reports",
  },
  {
    name: "LkSG/EU Green Deal Framework Implementation",
    target: 35,
    current: 8,
    deadline: "2026-12-31",
    color: "from-amber-500 to-orange-600",
    status: "on-track",
    unit: "companies",
  },
  {
    name: "Event Attendance",
    target: 450,
    current: 120,
    deadline: "2024-12-31",
    color: "from-cyan-500 to-blue-600",
    status: "on-track",
    unit: "attendees",
  },
  {
    name: "Gender-Sensitive Measures Implementation",
    target: 50,
    current: 12,
    deadline: "2025-06-30",
    color: "from-purple-500 to-pink-600",
    status: "at-risk",
    unit: "companies",
  },
  {
    name: "Innovative Measures Publication",
    target: 15,
    current: 3,
    deadline: "2025-12-31",
    color: "from-red-500 to-pink-600",
    status: "behind",
    unit: "publications",
  },
]

export function KPITimeline() {
  const [isExpanded, setIsExpanded] = useState(false)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { month: "short", year: "numeric" })
  }

  const getStatusIcon = (status: KPI["status"]) => {
    switch (status) {
      case "on-track":
        return <CheckCircle className="w-4 h-4 text-emerald-500" />
      case "at-risk":
        return <AlertTriangle className="w-4 h-4 text-amber-500" />
      case "behind":
        return <AlertTriangle className="w-4 h-4 text-red-500" />
    }
  }

  const getStatusText = (status: KPI["status"]) => {
    switch (status) {
      case "on-track":
        return "On Track"
      case "at-risk":
        return "At Risk"
      case "behind":
        return "Behind"
    }
  }

  const getStatusClass = (status: KPI["status"]) => {
    switch (status) {
      case "on-track":
        return "text-emerald-700 bg-emerald-50 border-emerald-100"
      case "at-risk":
        return "text-amber-700 bg-amber-50 border-amber-100"
      case "behind":
        return "text-red-700 bg-red-50 border-red-100"
    }
  }

  const calculateProgress = (current: number, target: number | string) => {
    if (typeof target === "string") {
      // Handle range targets like "350-400"
      const [min, max] = target.split("-").map(Number)
      const average = (min + max) / 2
      return Math.min(100, Math.round((current / average) * 100))
    }
    return Math.min(100, Math.round((current / target) * 100))
  }

  // Only show the first KPI when collapsed
  const visibleKpis = isExpanded ? kpis : [kpis[0]]

  return (
    <Card
      className="border border-gray-100 shadow-lg overflow-hidden transition-all duration-300"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <CardHeader className="pb-2 pt-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-gray-800 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-slate-500 to-slate-700 rounded-full mr-2"></div>
            KPI Timeline & Progress
          </CardTitle>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-gray-400"
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </div>
      </CardHeader>
      <CardContent className="pt-4 pb-2 overflow-hidden">
        <div className="space-y-6">
          {visibleKpis.map((kpi, i) => {
            const progress = calculateProgress(kpi.current, kpi.target)

            return (
              <motion.div
                key={i}
                initial={i === 0 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="relative"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${kpi.color}`}></div>
                    <h3 className="font-medium text-gray-800">{kpi.name}</h3>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {formatDate(kpi.deadline)}
                    </span>
                    <span
                      className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusClass(kpi.status)}`}
                    >
                      {getStatusIcon(kpi.status)}
                      {getStatusText(kpi.status)}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 1, delay: i * 0.1 + 0.3 }}
                        className={`h-full rounded-full bg-gradient-to-r ${kpi.color}`}
                      ></motion.div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 min-w-[120px]">
                    <span className="text-sm font-medium text-gray-700">
                      {kpi.current} / {kpi.target} {kpi.unit}
                    </span>
                    <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                      {progress}%
                    </span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {!isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-2 text-sm text-gray-500 italic"
          >
            Hover to see all KPIs
          </motion.div>
        )}
      </CardContent>
    </Card>
  )
}

export default KPITimeline

