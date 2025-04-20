"use client"

import { Check, X, Award, Shield } from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type StaffMember = {
  name: string;
  factory: string;
  certified: boolean;
  date: string | null;
  specialty: string;
};

const staffData: StaffMember[] = [
  {
    name: "MR. Mohsin Masood",
    factory: "PSGMEA Sialkot",
    certified: true,
    date: "2024-02-01",
    specialty: "ISO Compliance",
  },
  {
    name: "MS. Mawra Mumtaz ",
    factory: "PSGMEA Sialkot",
    certified: false,
    date: null,
    specialty: "Quality Control",
  },
  {
    name: "MS. Esha Ahmed",
    factory: "PSGMEA Sialkot",
    certified: true,
    date: "2024-01-20",
    specialty: "Sustainability",
  },
  {
    name: "MR. Zain Abbas",
    factory: "Forward Sports",
    certified: true,
    date: "2024-01-20",
    specialty: "Sustainability",
  },
  {
    name: "MR. Wajid",
    factory: "Forward Sports",
    certified: true,
    date: "2024-01-20",
    specialty: "Sustainability",
  },
]

export function CertifiedStaff() {
  return (
    <Card className="border border-gray-100 shadow-lg overflow-hidden">
      <CardHeader className="pb-2 pt-3 border-b border-gray-100">
        <CardTitle className="text-lg font-semibold text-gray-800 flex items-center">
          <div className="w-1 h-6 bg-gradient-to-b from-emerald-500 to-teal-600 rounded-full mr-2"></div>
          Staff Certification Status
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-3 pb-2 max-h-[350px] overflow-y-auto mb-4">
        <div className="space-y-3">
          {staffData.map((staff, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              whileHover={{
                scale: 1.01,
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.05)",
              }}
              className="flex items-center justify-between py-2 px-3 rounded-lg bg-white border border-gray-100 shadow-sm hover:border-emerald-100 transition-all duration-200 ease-in-out"
            >
              <div className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${staff.certified ? "bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100" : "bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200"}`}
                >
                  {staff.certified ? (
                    <Award className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Shield className="w-4 h-4 text-gray-400" />
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium text-gray-900 text-sm">{staff.name}</h4>
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 mr-1" />
                      <p className="text-xs text-gray-600">{staff.factory}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-xs text-gray-500">{staff.specialty}</p>
                    {staff.certified && staff.date && (
                      <span className="text-xs text-gray-500">
                        {new Date(staff.date).toLocaleDateString()}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div>
                {staff.certified ? (
                  <span className="flex items-center gap-1 text-emerald-700 bg-gradient-to-r from-emerald-50 to-teal-50 px-2 py-1 rounded-full text-xs font-medium transition-colors duration-150 hover:from-emerald-100 hover:to-teal-100 border border-emerald-100">
                    <Check className="w-3 h-3" />
                    Certified
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-rose-700 bg-gradient-to-r from-rose-50 to-pink-50 px-2 py-1 rounded-full text-xs font-medium transition-colors duration-150 hover:from-rose-100 hover:to-pink-100 border border-rose-100">
                    <X className="w-3 h-3" />
                    Not Certified
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default CertifiedStaff
