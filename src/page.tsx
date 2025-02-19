import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Circle } from "lucide-react"

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="container mx-auto p-4 grid grid-cols-3 items-center">
        <div className="flex flex-col items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sequa-Vfi%20Web%20portal%20design-images-0.jpg-IuArqBl0HPdT53l35RE5vXpaK2blPd.jpeg"
            alt="Fruit of Sustainability Logo"
            width={120}
            height={120}
            className="mb-2"
          />
          <span className="text-gray-600 text-sm">Local Partner</span>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sequa-Vfi%20Web%20portal%20design-images-0.jpg-IuArqBl0HPdT53l35RE5vXpaK2blPd.jpeg"
            alt="German Importers Logo"
            width={200}
            height={80}
            className="mb-2"
          />
          <span className="text-gray-600 text-sm">Implementation Partner</span>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sequa-Vfi%20Web%20portal%20design-images-0.jpg-IuArqBl0HPdT53l35RE5vXpaK2blPd.jpeg"
            alt="Sequa Logo"
            width={200}
            height={80}
            className="mb-2"
          />
          <span className="text-gray-600 text-sm">Supported By</span>
        </div>
      </header>

      {/* Title Section */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold mb-2 flex items-center justify-center gap-2">
          GREEN PAKISTAN PROJECT
          <Image src="/placeholder.svg?height=32&width=48" alt="Pakistan Flag" width={48} height={32} />
        </h1>
        <p className="text-xl text-gray-600">Coopration between German Importers and Pakistani Producers</p>
      </div>

      {/* Duration Banner */}
      <div className="bg-teal-500 text-white py-4 text-center">
        <p className="text-lg">Duration (2025-2026) | 3 Associations | 50+ Companies Impacted</p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Advisory Panel */}
        <div>
          <h2 className="text-xl font-semibold mb-6">Capacity-Building & Advisory Panel</h2>
          <div className="space-y-4">
            {advisoryPanel.map((advisor) => (
              <Card key={advisor.name}>
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=64&width=64"
                      alt={advisor.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">{advisor.name}</h3>
                    <p className="text-sm text-gray-600">{advisor.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2 className="text-xl font-semibold mt-8 mb-6">Partner Associations</h2>
          <div className="space-y-4">
            {partnerAssociations.map((partner) => (
              <Card key={partner.name}>
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                    <Image src="/placeholder.svg?height=48&width=48" alt={partner.name} width={48} height={48} />
                  </div>
                  <div>
                    <h3 className="font-medium">{partner.name}</h3>
                    <p className="text-sm text-emerald-600">{partner.team}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Project Roadmap */}
        <div>
          <h2 className="text-xl font-semibold mb-6">Project Roadmap</h2>
          <div className="relative">
            <Image
              src="/placeholder.svg?height=600&width=400"
              alt="Project Roadmap"
              width={400}
              height={600}
              className="w-full"
            />
          </div>
        </div>

        {/* Flow of Activities */}
        <div>
          <h2 className="text-xl font-semibold mb-6">Flow of activites</h2>
          <div className="space-y-8">
            {activities.map((activity, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <Circle className="w-8 h-8 text-emerald-500 fill-emerald-500" />
                  <div className="w-0.5 h-full bg-emerald-500" />
                </div>
                <div>
                  <div className="font-medium">{activity.date}</div>
                  <div className="text-sm text-gray-600">{activity.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Outcomes */}
      <div className="container mx-auto py-8">
        <h2 className="text-xl font-semibold mb-6">Project outcomes</h2>
        <div className="space-y-4">
          {outcomes.map((outcome, index) => (
            <div key={index} className="p-4 border-2 border-blue-900 rounded-lg text-center text-blue-900">
              {outcome}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-teal-800 text-white py-4 text-center">
        <p>Powered by Fruit of Sustainability (SMC-Private) Limited</p>
      </footer>
    </div>
  )
}

const advisoryPanel = [
  { name: "Bettina Muller", role: "ABC Expert" },
  { name: "Michael Arretz", role: "XYZ Expert" },
  { name: "Sarim Mehmood", role: "ABC Expert" },
]

const partnerAssociations = [
  {
    name: "PRGMEA-Pakistan Readymade Garment Manufacturers and Exporters Association",
    team: "Project Team: 8 Members",
  },
  {
    name: "PSGMEA-Pakistan Sports Goods Manufacturers and Exporters Association",
    team: "Project Team: 3 Members",
  },
  {
    name: "TMA-Towel Manufacturers' Association of Pakistan",
    team: "Project Team: 3 Members",
  },
]

const activities = [
  {
    date: "17th Feb 2025",
    description: "Meeting with Chairman PSGMEA and PSGMEA Team",
  },
  {
    date: "18th Feb 2025",
    description: "Meeting with APTMA",
  },
  {
    date: "17th Feb 2025",
    description: "Factory visit (Forward Sports)",
  },
  {
    date: "18th Feb 2025",
    description: "Meeting with PRGMEA North Team",
  },
]

const outcomes = [
  "50+ companies supported in sustainability compliance.",
  "19+ companies publishing sustainability reports.",
  "9 advisors trained in corporate governance & compliance.",
  "3 associations strengthened for long-term sustainability",
  "Industry-wide awareness on LkSG/EU Green Deal regulations.",
  "Stronger global market access for Pakistan's textile sector.",
]

