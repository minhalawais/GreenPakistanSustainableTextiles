import type React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules"; // Updated import path
import "swiper/css";
import "swiper/css/pagination";

const stats = [
  { label: "Association Name", value: "Global Importers Association" },
  { label: "Total Member Companies", value: "300+" },
  { label: "Total Factories Represented", value: "1,000+" },
  { label: "Total Employees in Member Companies", value: "500,000+" },
  { label: "Annual Revenue of Member Companies", value: "$10 Billion" },
  { label: "Major Export Destinations", value: "Germany, EU, USA" },
  { label: "Key Products Manufactured", value: "Apparel, Footwear, Accessories" },
  { label: "Current Sustainability Initiatives", value: "5 Major Programs" },
];

export const StatsSlider: React.FC = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
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
      className="bg-background-secondary rounded-lg shadow-md p-6"
    >
      {stats.map((stat, index) => (
        <SwiperSlide key={index} className="text-center">
          <h3 className="text-lg font-semibold text-text-heading mb-2">{stat.label}</h3>
          <p className="text-2xl font-bold text-button-primary">{stat.value}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
