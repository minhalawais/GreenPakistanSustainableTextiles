"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, AlertTriangle, Target } from "lucide-react" // Import icons

interface KPI {
  name: string
  target: number | string
  current: number
  color: string
  unit?: string
}

const kpis: KPI[] = [
  {
    name: "Companies Advised on LkSG/EU Green Deal",
    target: "350-400",
    current: 32,
    color: "from-blue-500 to-indigo-600",
    unit: "companies",
  },
  {
    name: "Sustainability Reports",
    target: 15,
    current: 4,
    color: "from-emerald-500 to-teal-600",
    unit: "reports",
  },
  {
    name: "LkSG/EU Green Deal Framework Implementation",
    target: 35,
    current: 8,
    color: "from-amber-500 to-orange-600",
    unit: "companies",
  },
  {
    name: "Event Attendance",
    target: 450,
    current: 120,
    color: "from-cyan-500 to-blue-600",
    unit: "attendees",
  },
  {
    name: "Gender-Sensitive Measures Implementation",
    target: 50,
    current: 12,
    color: "from-purple-500 to-pink-600",
    unit: "companies",
  },
  {
    name: "Innovative Measures Publication",
    target: 15,
    current: 3,
    color: "from-red-500 to-pink-600",
    unit: "publications",
  },
]

export function KPITimeline() {
  const calculateProgress = (current: number, target: number | string) => {
    if (typeof target === "string") {
      // Handle range targets like "350-400"
      const [min, max] = target.split("-").map(Number)
      const average = (min + max) / 2
      return Math.min(100, Math.round((current / average) * 100))
    }
    return Math.min(100, Math.round((current / target) * 100))
  }

  // Function to get a gradient color for the "Agreed Target" heading
  const getTargetColor = (index: number) => {
    const colors = [
      "from-blue-500 to-indigo-600",
      "from-emerald-500 to-teal-600",
      "from-amber-500 to-orange-600",
      "from-cyan-500 to-blue-600",
      "from-purple-500 to-pink-600",
      "from-red-500 to-pink-600",
    ]
    return colors[index % colors.length] // Cycle through colors
  }

  return (
    <Card className="border border-gray-100 shadow-lg overflow-hidden">
      <CardHeader className="pb-2 pt-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-gray-800 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-slate-500 to-slate-700 rounded-full mr-2"></div>
            KPI Timeline & Progress
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pt-4 pb-2 overflow-hidden">
        <div className="space-y-6">
          {kpis.map((kpi, i) => {
            const progress = calculateProgress(kpi.current, kpi.target)
            const targetColor = getTargetColor(i) // Get a gradient color for the "Agreed Target" heading

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="relative"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${kpi.color}`}></div>
                    <h3 className="font-medium text-gray-800">{kpi.name}</h3>
                  </div>
                  <div
                    className={`flex items-center gap-2 text-sm font-medium text-white bg-gradient-to-r ${targetColor} px-3 py-1 rounded-full border border-transparent`}
                  >
                    <Target className="w-4 h-4" /> {/* Add an icon */}
                    <span>Agreed Target: {kpi.target} {kpi.unit}</span>
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
                      {kpi.current} {kpi.unit}
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
      </CardContent>
    </Card>
  )
}

export default KPITimeline