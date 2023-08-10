import React, { useEffect, useState } from "react";
import { CategoryItem } from "./CategoryItem";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useDispatch } from "react-redux";
import { addSelectedCategory } from "../../../../../redux/slices/menuProductSelectedCartSlice";
import { getItemsCategories } from "../../../../../services/itemsCategoriesService"
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

import "swiper/css/navigation";

export const Categories = ({ categories, handleSelected }) => {
  const { currentCategory, currentPositionSwiper } = useSelector(
    (state) => state.menuProductSelectedCart
  );

  const loading = useSelector(state => state.globalCommon.loading); // Corrected access to the loading state

  return (
    <div className="mb-2">
      {loading ? (
        <parent>
          <div className="flex mb-2 p-1 gap-1">
            {Array.from(new Array(5)).map((x, index) => (
              <div key={index}>
                <Skeleton variant="rectangular" width={210} height={118} />
              </div>

            ))}
          </div>
        </parent>
      ) : (
        <Swiper
          initialSlide={currentPositionSwiper}
          slidesPerView={7}
          navigation={true}
          spaceBetween={20}
          modules={[Navigation]}
          breakpoints={{
            // breakpoints configuration
          }}
        >
          {categories?.map((category, index) => (
            <SwiperSlide
              key={category?.id}
              style={{ background: 'transparent' }}
              onClick={() => handleSelected(category)}
            >
              <CategoryItem key={category?.id} category={category} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};
