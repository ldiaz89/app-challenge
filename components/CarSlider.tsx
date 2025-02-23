"use client";

import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Highlight {
  image: string;
  title: string;
  content: string;
}

interface CarModel {
  model_highlights: Highlight[];
}

export default function CarHighlightsSlider({
  carModel,
}: {
  carModel: CarModel;
}) {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiper = swiperRef.current.swiper;
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, []);

  return (
    <div className="relative w-full bg-[#f7f7f7]">
      {/* Flecha izquierda */}
      <button
        ref={prevRef}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 shadow-md rounded-full bg-white"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Swiper */}
      <Swiper
        ref={swiperRef}
        modules={[Navigation]}
        spaceBetween={20} // Espaciado entre los elementos
        slidesPerView="auto" // Ajustar el número de elementos según el espacio disponible
        centeredSlides={true} // Centra los elementos cuando hay pocos
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        onInit={(swiper) => {
          if (
            swiper.params.navigation &&
            typeof swiper.params.navigation !== "boolean"
          ) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }
        }}
      >
        {carModel.model_highlights.map((highlight, index) => (
          <SwiperSlide key={index} className="max-w-[300px]">
            <div className="p-4">
              <img
                src={highlight.image}
                alt={highlight.title}
                className="w-full h-64 object-cover rounded-lg"
              />
              <h3 className="text-[20px] font-semibold leading-[27px] tracking-[-0.4px] font-montserrat mt-2">
                {highlight.title}
              </h3>

              <div
                className="text-[16px] font-normal leading-[27px] tracking-[-0.1px] font-montserrat text-gray-600 mt-1"
                dangerouslySetInnerHTML={{ __html: highlight.content }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Flecha derecha */}
      <button
        ref={nextRef}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 shadow-md rounded-full bg-white"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
