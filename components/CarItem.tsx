"use client";
import { Car } from "@/types";
import { useRouter } from "next/navigation";
import React from "react";



const CarItem = ({ car }: { car: Car }) => {
  const router = useRouter();
  return (
    <div
      className="flex flex-col items-center justify-center max-w-xs bg-white rounded-lg overflow-hidden p-4 hover:cursor-pointer"
      onClick={() => router.push(`/car/${car.id}`)}
    >
      <h2 className="text-xl font-semibold text-gray-800 text-center">
        {car.name}
      </h2>

      <p className="text-gray-600 mt-2 text-center">
        {car.year} | ${car.price.toLocaleString()}
      </p>

      <div className="w-full h-[150px] bg-white flex justify-center items-center">
        <img
          src={car.thumbnail}
          alt={car.name}
          className="max-h-full max-w-full object-contain transition-transform duration-300 ease-in-out transform hover:scale-105"
        />
      </div>
    </div>
  );
};

export default CarItem;
