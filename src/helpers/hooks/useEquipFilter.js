import { useState } from "react";

export const useEquipFilter = (data) => {
  const [filterOptions, setFilterOptions] = useState({
    AC: false,
    transmission: false,
    kitchen: false,
    TV: false,
    shower: false,
  });

  const applyFilters = (data) => {
    return data.filter((advert) => {
      return (
        (!filterOptions.AC || advert.details.airConditioner) &&
        (!filterOptions.transmission || advert.transmission) &&
        (!filterOptions.kitchen || advert.details.kitchen) &&
        (!filterOptions.TV || advert.details.TV) &&
        (!filterOptions.shower || advert.details.shower)
      );
    });
  };

  return { filterOptions, setFilterOptions, applyFilters };
};
