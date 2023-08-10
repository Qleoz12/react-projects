import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ProductItem } from "./ProductItem";
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';


export const Products = ({ itemsdata }) => {
  const loading = useSelector(state => state.globalCommon.loading); // Corrected access to the loading state

  return (
    <section className="mb-6">
      <header className="flex">
        <h2 className="font-ifc-insane-rodeo-bold text-fire-red text-5xl">
          Hamburguesas de carne - Carne y mas
        </h2>
      </header>
      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {loading ? (
          <section className="flex gap-1">
            {Array.from(new Array(5)).map((x, index) => (
              <div key={index}>
                <Stack spacing={1}>
                  <Skeleton variant="rectangular" width={210} height={118} />
                  <Skeleton variant="rectangular" width={210} height={60} />
                  <Skeleton width="60%" />
                </Stack>
              </div>

            ))}

          </section>
        ) : (
          itemsdata.map((item2) => (
            <ProductItem product={item2} key={item2?.skuItem} />
          ))
        )}
      </section>
    </section>
  );
};
