// components/LogoSwiper.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const logos = [
  "/logo1.png",
  "/logo2.png",
  "/logo4.png",
];

export default function LogoSwiper() {
  return (
    <section className="bg-white px-6 py-16">
      <h2 className="text-2xl font-semibold text-center mb-10 text-[#545A56]">
        Trusted by Parents & Educational Partners
      </h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 3 },
        }}
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index} className="flex justify-items-center items-center">
  <img
    src={logo}
    alt={`Logo ${index + 1}`}
    className="h-24 transition duration-300"
  />
</SwiperSlide>

        ))}
      </Swiper>
    </section>
  );
}
