import Image from "next/image"
import { Shirt, Bed, Footprints, Bath, Dumbbell } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const products = [
  {
    icon: Shirt,
    text: "Textiles and clothing",
    description: "High-quality fabrics and ready-to-wear garments",
  },
  {
    icon: Bed,
    text: "Bedding and table linen",
    description: "Premium home textiles and linens",
  },
  {
    icon: Footprints,
    text: "Shoes and Gloves",
    description: "Protective wear and fashion accessories",
  },
  {
    icon: Bath,
    text: "Towel and Bathroom items",
    description: "Luxury bath essentials and accessories",
  },
  {
    icon: Dumbbell,
    text: "Sports goods, equipment & Accessories",
    description: "High-quality sports gear and accessories for various activities",
  },
]
type ProductItem = {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
  description: string;
};
const FeatureCard = ({ icon: Icon, text, description }: ProductItem) => (
  <Card className="group hover:shadow-lg transition-all duration-300 border-none bg-white/5 backdrop-blur-sm">
    <CardContent className="p-4">
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-lg bg-emerald-500/10">
          <Icon className="w-5 h-5 text-emerald-400" />
        </div>
        <div className="space-y-1">
          <h3 className="text-base font-semibold text-white group-hover:text-emerald-400 transition-colors">{text}</h3>
          <p className="text-white/70 text-xs">{description}</p>
        </div>
      </div>
    </CardContent>
  </Card>
)

const companyLogos = [
  // Textile-related companies
  {
    src: "https://logos-world.net/wp-content/uploads/2021/09/KiK-Symbol.png",
    alt: "KiK Logo",
  },
  {
    src: "https://logos-world.net/wp-content/uploads/2023/02/Primark-Logo-500x281.png",
    alt: "Primark Logo",
  },
  {
    src: "https://1000logos.net/wp-content/uploads/2021/03/Tchibo-logo-500x338.png",
    alt: "Tchibo Logo",
  },
  {
    src:"https://i.ibb.co/jZsJGP2q/di-bella-coffee-vector-logo-removebg-preview.png",
    alt: "Dibella"
  },
  {
    src: "https://i.ibb.co/chBVDsRW/engel-natur-logo-removebg-preview.png",
    alt: "Engel Natur Logo"
  },
  {
    src:"https://i.ibb.co/KpSxjVws/FTO-logo-2024-72dpi-900x575-removebg-preview.png",
    alt: "Fairtrade Original Logo"
  },
  {
    src:"https://fairafric.com/cdn/shop/files/fairafric_logo_gross_white_100x.png?v=1675247678",
    alt:"Fairafric Logo"
  },
  {
    src:"https://www.el-puente.de/static/version1744891557/frontend/Codex/elpuente/de_DE/images/logo.webp",
    alt: "El Puente Logo"
  },
  {
    src:"https://www.hessnatur.com/images/hessnatur-new-logo-desktop.svg",
    alt:"Hessnatur Logo"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/725px-Adidas_Logo.svg.png",
    alt: "Adidas Logo",
  },

  // Other companies
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Volkswagen_logo_2019.svg",
    alt: "Volkswagen Logo",
  },
  {
    src: "https://logolook.net/wp-content/uploads/2022/05/Mercedes-Benz-Logo.png",
    alt: "Mercedes-Benz Logo",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Audi_logo_detail.svg",
    alt: "Audi Logo",
  },
  {
    src: "https://www.ecco.com.my/img/zf-logo.png",
    alt: "ZF Logo",
  },
  {
    src: "https://logos-world.net/wp-content/uploads/2020/08/Bosch-Logo-700x394.png",
    alt: "Bosch Logo",
  },
  {
    src: "https://1000logos.net/wp-content/uploads/2020/03/Airbus-Logo-500x313.png",
    alt: "Airbus Logo",
  },
  {
    src: "https://1000logos.net/wp-content/uploads/2018/02/Epson-Logo-500x313.png",
    alt: "Epson Logo",
  },
  {
    src: "https://logosandtypes.com/wp-content/uploads/2020/06/aldi-nord.svg",
    alt: "Aldi Nord Logo",
  },
  {
    src: "https://cdn.worldvectorlogo.com/logos/vaude-logo-2012.svg",
    alt: "Vaude Logo",
  },
  {
    src: "https://logos-world.net/wp-content/uploads/2020/12/Lidl-Logo-700x394.png",
    alt: "Lidl Logo",
  },
  {
    src: "https://cdn.worldvectorlogo.com/logos/kaufland.svg",
    alt: "Kaufland Logo",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Aldi_S%C3%BCd_2017_logo.svg/82px-Aldi_S%C3%BCd_2017_logo.svg.png",
    alt: "Aldi Süd Logo",
  },
];

export function GermanImporterSection() {
  return (
    <section className="min-h-screen bg-[#0A2E2A] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#125643]/90 to-[#0A2E2A]/95" />

      <div className="container mx-auto px-4 relative z-10 py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center w-full">
          {/* Left Column - Content */}
          <div className="space-y-12">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="bg-emerald-500/10 text-emerald-400 px-3 py-1.5 rounded-full text-sm font-medium">
                  Product Range
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#C5A46D] leading-tight">
                VFI German Importers Product Range
              </h2>
              <p className="text-base text-white/80 leading-relaxed">
                VFI German Importers specializes in
                <span className="text-emerald-400 font-bold mx-2">700+ products</span>
                across the non-food sector, focusing on premium quality and compliance.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {products.map((item, index) => (
                <FeatureCard key={index} {...item} />
              ))}
            </div>

            {/* Expert Guidance Section - Updated to paragraph form */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#C5A46D]">Expert Guidance</h3>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <p className="text-white/90 leading-relaxed">
                  VFI German Importer provides hands-on information and guidance regarding the import of non-food products,
                  <span className="text-emerald-400 font-semibold"> law requirements, risk management,</span> and
                  <span className="text-emerald-400 font-semibold"> documentation and reporting.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-[500px] rounded-xl overflow-hidden hidden lg:block">
            <Image src="/textile_industry.jpg" alt="Textile Industry" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A2E2A]/80 to-transparent" />
          </div>
        </div>

        {/* Company Logos Slider */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-[#C5A46D] mb-8 text-left">Partner Brands & Companies</h3>
          <div className="relative overflow-hidden bg-white/5 backdrop-blur-sm rounded-xl py-8">
            <div className="flex animate-scroll">
              {[...companyLogos, ...companyLogos].map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-40 mx-8 h-20 relative filter brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-300"
                >
                  <Image
                    src={logo.src || "/placeholder.svg"}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,_rgba(49,163,159,0.1)_0%,_rgba(49,163,159,0)_50%)] pointer-events-none" />
    </section>
  )
}

export default GermanImporterSection

