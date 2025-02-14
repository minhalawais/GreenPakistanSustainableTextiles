import Image from "next/image"

const partners = [
  {
    image: "/images/fos_logo.png",
    title: "Local Partner",
    width: 80,
    height: 80,
  },
  {
    image: "/images/global_importers_logo.png",
    title: "Implementation Partner",
    width: 160,
    height: 60,
  },
  {
    image: "/images/sequa_logo.png",
    title: "Supported By",
    width: 160,
    height: 60,
  },
]

export function Header() {
  return (
    <header className="bg-[#F8F9FA] shadow-md">
      <div className="container mx-auto py-2 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          {partners.map((partner, index) => (
            <div key={index} className="flex flex-col items-center w-full sm:w-1/3">
              <div className="bg-white rounded-lg shadow-sm p-4 mb-1 w-[180px] h-[100px] flex items-center justify-center transition-transform duration-300 hover:scale-105">
                <Image
                  src={partner.image || "/placeholder.svg"}
                  alt={`${partner.title} Logo`}
                  width={partner.width}
                  height={partner.height}
                  className="object-contain max-h-full max-w-full"
                />
              </div>
              <span className="text-[#14274E] text-sm font-medium mt-1 text-center">{partner.title}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}

