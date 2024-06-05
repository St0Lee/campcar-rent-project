import React, { useState } from "react";

import icon from "../../../../../pictures/icons.svg"

import * as SC from "./TypeFilter.styled";

export const TypeFilter = ({ applyTypeFilter }) => {
  const [pendingTypeFilter, setPendingTypeFilter] = useState("");

  const handleTypeChange = (e) => {
    setPendingTypeFilter(e.target.value);
  };

  const applyFilter = () => {
    applyTypeFilter(pendingTypeFilter);
  };

  return (
    <SC.Container>
      <SC.SubHeader>Vehicle Type</SC.SubHeader>
      <SC.Divider />
      <SC.RadioWrap>
        <SC.RadioLabel>
          <SC.Icon>
            <use href={`${icon}#van`} />
          </SC.Icon>
          <SC.RadioInput
            name="typeFilter"
            type="radio"
            value="panelTruck"
            checked={pendingTypeFilter === "panelTruck"}
            onChange={handleTypeChange}
          />
          Van
        </SC.RadioLabel>
        <SC.RadioLabel>
          <SC.Icon>
            <use href={`${icon}#fullyIntegrated`} />
          </SC.Icon>
          <SC.RadioInput
            name="typeFilter"
            type="radio"
            value="fullyIntegrated"
            checked={pendingTypeFilter === "fullyIntegrated"}
            onChange={handleTypeChange}
          />
          Fully Integrated
        </SC.RadioLabel>
        <SC.RadioLabel>
          <SC.Icon>
            <use href={`${icon}#alcove`} />
          </SC.Icon>
          <SC.RadioInput
            name="typeFilter"
            type="radio"
            value="alcove"
            checked={pendingTypeFilter === "alcove"}
            onChange={handleTypeChange}
          />
          Alcove
        </SC.RadioLabel>
      </SC.RadioWrap>
      <SC.Button type="button" onClick={applyFilter}>
        Search
      </SC.Button>
    </SC.Container>
  );
};
