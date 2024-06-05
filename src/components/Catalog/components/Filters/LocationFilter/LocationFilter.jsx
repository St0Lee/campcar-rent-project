import icon from "../../../../../pictures/icons.svg"

import * as SC from "./LocationFilter.styled"

export const LocationFilter = ({ locationFilter, handleLocationFilter }) => {
  return (
      <SC.Container>
        Location
        <SC.Icon>
          <use href={`${icon}#place-marker`} />
        </SC.Icon>
        <SC.Input
          id="locationFilter"
          type="text"
          placeholder="City"
          value={locationFilter}
          onChange={handleLocationFilter}
        />
    </SC.Container>
  );
};