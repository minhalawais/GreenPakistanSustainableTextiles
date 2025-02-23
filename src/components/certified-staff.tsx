import { Check, X } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const staffData = [
  { name: "Sarah Johnson", factory: "TMA Karachi", certified: true, date: "2024-02-01" },
  { name: "Ahmed Khan", factory: "PRGMEA Lahore", certified: false, date: null },
  { name: "Maria Garcia", factory: "PSGMEA Gujrat", certified: true, date: "2024-01-20" },
  { name: "Ali Hassan", factory: "TMA Karachi", certified: false, date: null },
]

export function CertifiedStaff() {
  return (
    <Card className="border-none shadow-lg">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-semibold text-gray-800">
          Staff Certification Status
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {staffData.map((staff, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 ease-in-out"
            >
              <div className="space-y-1">
                <h4 className="font-medium text-gray-900">{staff.name}</h4>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mr-2" />
                  <p className="text-sm text-gray-600">{staff.factory}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                {staff.certified ? (
                  <>
                    <span className="text-sm text-gray-500 font-medium">
                      {new Date(staff.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-2 text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-150 hover:bg-emerald-100">
                      <Check className="w-4 h-4" />
                      Certified
                    </span>
                  </>
                ) : (
                  <span className="flex items-center gap-2 text-rose-700 bg-rose-50 px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-150 hover:bg-rose-100">
                    <X className="w-4 h-4" />
                    Not Certified
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}