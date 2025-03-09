"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Circle, BarChart3, ShieldAlert, LineChart } from "lucide-react"

interface Company {
  name: string
  stages: {
    strategy: boolean
    riskAnalysis: boolean
    complaintsSystem: boolean
    implementation: boolean
  }
}

const companies: Company[] = [
  {
    name: "Forward Sports",
    stages: {
      strategy: true,
      riskAnalysis: true,
      complaintsSystem: true,
      implementation: true,
    },
  },
  {
    name: "Anwar Khawaja Industries",
    stages: {
      strategy: true,
      riskAnalysis: true,
      complaintsSystem: true,
      implementation: false,
    },
  },
  {
    name: "Capital Sports",
    stages: {
      strategy: true,
      riskAnalysis: true,
      complaintsSystem: false,
      implementation: false,
    },
  },
  {
    name: "Talon Sports",
    stages: {
      strategy: true,
      riskAnalysis: false,
      complaintsSystem: false,
      implementation: false,
    },
  },
  {
    name: "Awan Sports",
    stages: {
      strategy: true,
      riskAnalysis: false,
      complaintsSystem: false,
      implementation: false,
    },
  },
  {
    name: "Saga Sports",
    stages: {
      strategy: true,
      riskAnalysis: true,
      complaintsSystem: false,
      implementation: false,
    },
  },
  {
    name: "Grays of Cambridge",
    stages: {
      strategy: true,
      riskAnalysis: false,
      complaintsSystem: false,
      implementation: false,
    },
  },
  {
    name: "CA Sports",
    stages: {
      strategy: false,
      riskAnalysis: false,
      complaintsSystem: false,
      implementation: false,
    },
  },
]

export function FrameworkImplementation() {
  const fullyImplemented = companies.filter(
    (c) => c.stages.strategy && c.stages.riskAnalysis && c.stages.complaintsSystem && c.stages.implementation,
  ).length

  const inProgress = companies.filter(
    (c) =>
      (c.stages.strategy || c.stages.riskAnalysis || c.stages.complaintsSystem || c.stages.implementation) &&
      !(c.stages.strategy && c.stages.riskAnalysis && c.stages.complaintsSystem && c.stages.implementation),
  ).length

  const notStarted = companies.filter(
    (c) => !c.stages.strategy && !c.stages.riskAnalysis && !c.stages.complaintsSystem && !c.stages.implementation,
  ).length

  const target = 35
  const progress = Math.round((fullyImplemented / target) * 100)

  const stageStats = {
    strategy: companies.filter((c) => c.stages.strategy).length,
    riskAnalysis: companies.filter((c) => c.stages.riskAnalysis).length,
    complaintsSystem: companies.filter((c) => c.stages.complaintsSystem).length,
    implementation: companies.filter((c) => c.stages.implementation).length,
  }

  return (
    <Card className="border border-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden mb-6">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-orange-600"></div>
      <CardHeader className="pb-2 pt-4 border-b border-gray-100">
        <CardTitle className="text-lg font-semibold text-gray-800 flex items-center">
          <div className="w-1 h-6 bg-gradient-to-b from-amber-500 to-orange-600 rounded-full mr-2"></div>
          LkSG/EU Green Deal Implementation
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-amber-500" />
                <span className="text-sm font-medium text-gray-700">Fully Implemented: {fullyImplemented}</span>
              </div>
              <div className="flex items-center gap-2">
                <LineChart className="w-5 h-5 text-amber-500" />
                <span className="text-sm font-medium text-gray-700">Target: {target} by 2026</span>
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
                  className="h-full rounded-full bg-gradient-to-r from-amber-500 to-orange-600"
                ></motion.div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-lg border border-gray-100 p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <BarChart3 className="w-4 h-4 text-amber-500" />
                  <h4 className="text-sm font-medium text-gray-700">Implementation Status</h4>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-600">Fully Implemented</span>
                    <span className="text-xs font-medium text-gray-700">{fullyImplemented}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-600">In Progress</span>
                    <span className="text-xs font-medium text-gray-700">{inProgress}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-600">Not Started</span>
                    <span className="text-xs font-medium text-gray-700">{notStarted}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-100 p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldAlert className="w-4 h-4 text-amber-500" />
                  <h4 className="text-sm font-medium text-gray-700">Stage Completion</h4>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-600">Strategy</span>
                    <span className="text-xs font-medium text-gray-700">{stageStats.strategy}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-600">Risk Analysis</span>
                    <span className="text-xs font-medium text-gray-700">{stageStats.riskAnalysis}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-600">Complaints System</span>
                    <span className="text-xs font-medium text-gray-700">{stageStats.complaintsSystem}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-600">Implementation</span>
                    <span className="text-xs font-medium text-gray-700">{stageStats.implementation}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2">
            {companies.map((company, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                className="p-3 rounded-lg border border-gray-100 hover:border-amber-100 transition-all bg-white shadow-sm"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-800">{company.name}</span>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      company.stages.strategy &&
                      company.stages.riskAnalysis &&
                      company.stages.complaintsSystem &&
                      company.stages.implementation
                        ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                        : company.stages.strategy ||
                            company.stages.riskAnalysis ||
                            company.stages.complaintsSystem ||
                            company.stages.implementation
                          ? "bg-amber-50 text-amber-700 border border-amber-100"
                          : "bg-gray-50 text-gray-700 border border-gray-200"
                    }`}
                  >
                    {company.stages.strategy &&
                    company.stages.riskAnalysis &&
                    company.stages.complaintsSystem &&
                    company.stages.implementation
                      ? "Fully Implemented"
                      : company.stages.strategy ||
                          company.stages.riskAnalysis ||
                          company.stages.complaintsSystem ||
                          company.stages.implementation
                        ? "In Progress"
                        : "Not Started"}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {company.stages.strategy ? (
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Circle className="w-4 h-4 text-gray-300" />
                    )}
                    <span className="text-xs text-gray-600">Strategy</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {company.stages.riskAnalysis ? (
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Circle className="w-4 h-4 text-gray-300" />
                    )}
                    <span className="text-xs text-gray-600">Risk Analysis</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {company.stages.complaintsSystem ? (
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Circle className="w-4 h-4 text-gray-300" />
                    )}
                    <span className="text-xs text-gray-600">Complaints</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {company.stages.implementation ? (
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Circle className="w-4 h-4 text-gray-300" />
                    )}
                    <span className="text-xs text-gray-600">Implementation</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default FrameworkImplementation

