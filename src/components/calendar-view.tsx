"use client"

import { useState } from "react"
import { Calendar, MapPin, Clock } from 'lucide-react'
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Event {
  title: string
  date: string
  location: string
  type: "upcoming" | "past"
}

const events: Event[] = [
  {
    title: "LkSG Compliance Workshop",
    date: "2024-03-25",
    location: "Sialkot Business & Commerce Centre",
    type: "upcoming",
  },
  {
    title: "EU Green Deal Seminar",
    date: "2024-04-15",
    location: "PSGMEA Office",
    type: "upcoming",
  },
  {
    title: "Sustainability Forum",
    date: "2024-02-10",
    location: "Chamber of Commerce",
    type: "past",
  },
]

export function EventCalendar() {
  const [selectedType, setSelectedType] = useState<"all" | "upcoming" | "past">("all")

  const filteredEvents = events.filter((event) =>
    selectedType === "all" ? true : event.type === selectedType
  )

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return {
      day: date.toLocaleDateString("en-US", { day: "numeric" }),
      month: date.toLocaleDateString("en-US", { month: "short" }),
      year: date.toLocaleDateString("en-US", { year: "numeric" }),
    }
  }

  return (
    <Card className="w-full max-w-4xl bg-white shadow-lg border border-gray-100 overflow-hidden">
      <CardHeader className="border-b border-gray-100 pb-2 pt-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-gray-800 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-cyan-500" />
            Knowledge-Sharing Events
          </CardTitle>
          <div className="flex gap-2">
            {["all", "upcoming", "past"].map((type) => (
              <motion.button
                key={type}
                onClick={() => setSelectedType(type as typeof selectedType)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedType === type
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md"
                    : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </motion.button>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="grid gap-3">
          {filteredEvents.map((event, i) => {
            const formattedDate = formatDate(event.date)
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" 
                }}
                className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-cyan-200 transition-all bg-white shadow-sm"
              >
                <div className="flex-shrink-0 w-16 h-16 flex flex-col items-center justify-center rounded-lg bg-gradient-to-br from-cyan-50 to-blue-50 text-cyan-600 border border-cyan-100">
                  <span className="text-2xl font-bold">{formattedDate.day}</span>
                  <span className="text-xs font-medium">{formattedDate.month}</span>
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
                  <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-cyan-500" />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-cyan-500" />
                      {event.type === "upcoming" ? (
                        <span className="text-emerald-600 font-medium">Upcoming</span>
                      ) : (
                        <span className="text-gray-500">Past</span>
                      )}
                    </div>
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

export default EventCalendar
