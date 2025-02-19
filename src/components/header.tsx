import Image from "next/image"

const partners = [
  {
    image: "/images/fos_logo.png",
    alt: "Local Partner Logo",
    width: 80,
    height: 80,
  },
  {
    image: "/images/global_importers_logo.png",
    alt: "Implementation Partner Logo",
    width: 160,
    height: 60,
  },
  {
    image: "/images/sequa_logo.png",
    alt: "Supported By Logo",
    width: 160,
    height: 60,
    customStyle: { width: "120px" },
  },
]

export function Header() {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-20">
        <div className="flex justify-center sm:justify-between items-center h-full gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center">
              <Image
                src={partner.image || "/placeholder.svg"}
                alt={partner.alt}
                width={partner.width}
                height={partner.height}
                className="object-contain max-h-12 w-auto transition-transform duration-300 hover:scale-105"
                style={partner.customStyle || {}}
              />
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}
