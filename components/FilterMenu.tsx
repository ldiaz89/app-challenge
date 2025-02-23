import React, { useState } from "react";

interface FilterMenuProps {
  filterOptions: string[];
  selectedFilter: string;
  setSelectedFilter: (filter: string) => void;
  handleSort: (sortOption: string) => void;
}

const FilterMenu: React.FC<FilterMenuProps> = ({
  filterOptions,
  selectedFilter,
  setSelectedFilter,
  handleSort,
}) => {
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [showSortMenu, setShowSortMenu] = useState(false);

  const [selectedFilterText, setSelectedFilterText] =
    useState<string>("Filtrar por");
  const [selectedSortText, setSelectedSortText] =
    useState<string>("Ordenar por");

  const sortOptions = [
    "Nada",
    "De menor a mayor precio",
    "De mayor a menor precio",
    "Más nuevos primero",
    "Más viejos primero",
  ];

  return (
    <div className="w-full">
      <div className="flex items-center justify-between border-b-2 pb-4 mb-4 relative">
        <div className="flex items-center space-x-4 w-full md:w-auto">
          <p className="hidden md:flex py-2 px-4">Filtrar por</p>

          <div className="hidden md:flex md:space-x-2">
            {filterOptions.map((option, index) => (
              <span
                key={index}
                onClick={() => {
                  setSelectedFilter(option);
                  setSelectedFilterText(option);
                }}
                className={`text-center hover:rounded-full py-1 px-4 hover:bg-slate-300 cursor-pointer ${
                  selectedFilter === option ? "bg-slate-300 rounded-full" : ""
                } max-w-xs truncate`}
              >
                {option}
              </span>
            ))}
          </div>
          <button
            className="md:hidden ml-4 py-2 px-4 bg-slate-200 rounded-full cursor-pointer max-w-[150px] flex items-center space-x-2"
            onClick={() => setShowFilterMenu(!showFilterMenu)}
          >
            <span className="truncate max-w-[100px]">{selectedFilterText}</span>
            <span>&#9662;</span>
          </button>

          {showFilterMenu && (
            <div className="absolute z-50 left-0 top-full w-full bg-white shadow-lg rounded-lg mt-2">
              {filterOptions.map((option, index) => (
                <span
                  key={index}
                  onClick={() => {
                    setSelectedFilter(option);
                    setSelectedFilterText(option);
                    setShowFilterMenu(false);
                  }}
                  className={`block py-2 px-4 hover:bg-slate-300 cursor-pointer ${
                    selectedFilter === option ? "bg-slate-300" : ""
                  }`}
                >
                  {option}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center space-x-4 ml-auto">
          <span className="py-2 px-4 truncate max-w-[120px] md:max-w-full">
            {selectedSortText}
          </span>
          <button
            className="py-2 px-4 cursor-pointer"
            onClick={() => setShowSortMenu(!showSortMenu)}
          >
            <span>&#9662;</span>
          </button>

          {showSortMenu && (
            <div className="absolute z-50 right-0 top-full bg-white shadow-lg rounded-lg mt-2">
              {sortOptions.map((option, index) => (
                <div
                  className="border py-3 hover:bg-slate-300 cursor-pointer"
                  key={index}
                >
                  <span
                    onClick={() => {
                      handleSort(option);
                      setSelectedSortText(option);
                      setShowSortMenu(false);
                    }}
                    className="block py-2 px-4 hover:bg-slate-300 cursor-pointer"
                  >
                    {option}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterMenu;
