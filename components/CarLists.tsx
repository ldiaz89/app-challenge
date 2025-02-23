'use client'
import React, { useState, useEffect } from 'react';
import FilterMenu from './FilterMenu';
import CarItem, { Car } from './CarItem';

function CarLists({ cars }: { cars: Array<Car> }) {
  const [selectedFilter, setSelectedFilter] = useState<string>("Todos");

  const filterOptions = ["Todos", ...new Set(cars.map(car => car.segment))];

  const [sortedCars, setSortedCars] = useState(cars);

  const filteredCars = selectedFilter === "Todos"
    ? cars
    : cars.filter(car => car.segment === selectedFilter);

  const handleSort = (sortOption: string) => {
    let sorted: Car[] = [...filteredCars];

    switch (sortOption) {
      case "De menor a mayor precio":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "De mayor a menor precio":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "Más nuevos primero":
        sorted.sort((a, b) => b.year - a.year);  // Cambiado de createdAt a year
        break;
      case "Más viejos primero":
        sorted.sort((a, b) => a.year - b.year);  // Cambiado de createdAt a year
        break;
      default:
        break;
    }

    setSortedCars(sorted);
  };

  // Este useEffect asegura que los coches se ordenen correctamente después de filtrar
  useEffect(() => {
    handleSort("Nada");  // Volver a ordenar cuando se cambia el filtro
  }, [selectedFilter]);

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4">
      {/* Componente de filtro y orden */}
      <FilterMenu 
        filterOptions={filterOptions} 
        selectedFilter={selectedFilter} 
        setSelectedFilter={setSelectedFilter} 
        handleSort={handleSort} 
      />
      
      {/* Lista de coches */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {sortedCars.map((car, index) => (
          <CarItem key={index} car={car} />
        ))}
      </div>
    </div>
  );
}

export default CarLists;
