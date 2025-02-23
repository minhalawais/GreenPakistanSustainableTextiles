import type React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"

const stats = [
  { label: "Association Name", value: "Global Importers Association" },
  { label: "Total Member Companies", value: "300+" },
  { label: "Total Factories Represented", value: "1,000+" },
  { label: "Total Employees in Member Companies", value: "500,000+" },
  { label: "Annual Revenue of Member Companies", value: "$10 Billion" },
  { label: "Major Export Destinations", value: "Germany, EU, USA" },
  { label: "Key Products Manufactured", value: "Apparel, Footwear, Accessories" },
  { label: "Current Sustainability Initiatives", value: "5 Major Programs" },
]

export const StatsSlider: React.FC = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      autoplay={{ delay: 3000 }}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
      className="py-8"
    >
      {stats.map((stat, index) => (
        <SwiperSlide key={index} className="flex justify-center">
          <div className="w-64 h-48 bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
            <div className="h-full flex flex-col justify-between p-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">{stat.label}</h3>
              <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
                {stat.value}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

