import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper";
import { RestauranItemLocation } from "./RestauranItemLocation";

export const SwiperRestaurantLocation = ({ map }) => {
  const restaurantLocation = [
    {
      geocode: [4.7155912, -74.0290976],
      name: "Patalino",
      direction: "CARRERA 7 No. 139 07 Local 305",
    },
    {
      geocode: [4.6176034, -74.1361687],
      name: "Americas",
      direction: "Calle 8 Sur #71b-65 a 71b-1",
    },
    {
      geocode: [4.683463000000001, -74.059772],
      name: "Castellana",
      direction: "CRA 47 No. 94 A 56",
    },
    {
      geocode: [4.711103, -74.1125518],
      name: "C.C Portal 80",
      direction: "Calle 80 #100 - 52 Local 3044",
    },
  ];
  return (
    <div>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        scrollbar={{
          dragSize: 100,
        }}
        modules={[Scrollbar]}
        className="swiper-container"
        breakpoints={{
          768: {
            slidesPerView: 4,
          },
          640: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        }}
      >
        {restaurantLocation.map((itemRestaurantLocation, index) => (
          <SwiperSlide key={index} style={{ background: "transparent" }}>
            <RestauranItemLocation
              itemRestaurantLocation={itemRestaurantLocation}
              map={map}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
