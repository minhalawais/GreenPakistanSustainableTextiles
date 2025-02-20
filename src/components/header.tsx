import Image from "next/image"

const partners = [
  {
    image: "/images/GC.png",
    alt: "GC Logo",
    width: 100,
    height: 100,
  },
  {
    image: "/images/fos_logo.png",
    alt: "Local Partner Logo",
    width: 80,
    height: 80,
  },
  {
    image: "/images/global_importers_logo.png",
    alt: "Implementation Partner Logo",
    width: 125, // Reduced from 200
    height: 40, // Reduced from 75
  },
  {
    image: "/images/sequa_logo.png",
    alt: "Supported By Logo",
    width: 200,
    height: 75,
    customStyle: { width: "150px" },
  },
]

export function Header() {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b">
      <div className="h-20 w-full">
        <div className="flex justify-between items-center h-full w-full">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center flex-1">
              <Image
                src={partner.image || "/placeholder.svg"}
                alt={partner.alt}
                width={partner.width}
                height={partner.height}
                className="object-contain max-h-16 w-auto transition-transform duration-300 hover:scale-105"
                style={partner.customStyle || {}}
              />
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}

