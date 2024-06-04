import React from "react";
import { useEquipFilter } from "../../../../helpers/hooks/useEquipFilter";

export const EquipFilter = ({ handleFilterChange, data }) => {
  const { filterOptions, setFilterOptions } = useEquipFilter(data);

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFilterOptions((prevOptions) => ({
      ...prevOptions,
      [name]: checked,
    }));
    handleFilterChange(e);
  };


  return (
    <div>
      <label>
        <input
          type="checkbox"
          name="AC"
          onChange={handleCheckboxChange}
          checked={filterOptions.AC}
        />
        AC
      </label>
      <label>
        <input
          type="checkbox"
          name="transmission"
          onChange={handleCheckboxChange}
          checked={filterOptions.transmission}
        />
        Transmission
      </label>
      <label>
        <input
          type="checkbox"
          name="kitchen"
          onChange={handleCheckboxChange}
          checked={filterOptions.kitchen}
        />
        Kitchen
      </label>
      <label>
        <input
          type="checkbox"
          name="TV"
          onChange={handleCheckboxChange}
          checked={filterOptions.TV}
        />
        TV
      </label>
      <label>
        <input
          type="checkbox"
          name="shower"
          onChange={handleCheckboxChange}
          checked={filterOptions.shower}
        />
        Shower
      </label>
    </div>
  );
};
