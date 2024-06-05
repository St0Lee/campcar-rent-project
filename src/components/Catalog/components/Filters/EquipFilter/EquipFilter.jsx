import { useEquipFilter } from "../../../../../helpers/hooks/useEquipFilter";

import icon from "../../../../../pictures/icons.svg"

import * as SC from "./EquipFilter.styled"

export const EquipFilter = ({ handleEquipFilterChange, data }) => {
  const { filterOptions, setFilterOptions } = useEquipFilter(data);

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFilterOptions((prevOptions) => ({
      ...prevOptions,
      [name]: checked,
    }));
    handleEquipFilterChange(e);
  };
  

  return (
    <SC.Container>
      <SC.Header>Filters</SC.Header>
      <SC.SubHeader>Vehicle equipment</SC.SubHeader>
      <SC.Divider />
      <SC.CheckboxWrap>
        <SC.CheckboxItem checked={filterOptions.AC}>
          <SC.Icon>
            <use href={`${icon}#AC`} />
          </SC.Icon>
          <SC.Input
            type="checkbox"
            name="AC"
            onChange={handleCheckboxChange}
            checked={filterOptions.AC}
          />
          AC
        </SC.CheckboxItem>
        <SC.CheckboxItem checked={filterOptions.transmission}>
          <SC.Icon>
            <use href={`${icon}#transmission`} />
          </SC.Icon>
          <SC.Input
            type="checkbox"
            name="transmission"
            onChange={handleCheckboxChange}
            checked={filterOptions.transmission}
          />
          Automatic
        </SC.CheckboxItem>
        <SC.CheckboxItem checked={filterOptions.kitchen}>
          <SC.Icon>
            <use href={`${icon}#kitchen`} />
          </SC.Icon>
          <SC.Input
            type="checkbox"
            name="kitchen"
            onChange={handleCheckboxChange}
            checked={filterOptions.kitchen}
          />
          Kitchen
        </SC.CheckboxItem>
      </SC.CheckboxWrap>
      <SC.CheckboxWrap>
        <SC.CheckboxItem checked={filterOptions.TV}>
          <SC.Icon>
            <use href={`${icon}#TV`} />
          </ SC.Icon>
          <SC.Input
            type="checkbox"
            name="TV"
            onChange={handleCheckboxChange}
            checked={filterOptions.TV}
          />
          TV
        </SC.CheckboxItem>
        <SC.CheckboxItem checked={filterOptions.shower}>
          <SC.Icon>
            <use href={`${icon}#shower`} />
          </SC.Icon>
          <SC.Input
            type="checkbox"
            name="shower"
            onChange={handleCheckboxChange}
            checked={filterOptions.shower}
          />
          Shower/WC
        </SC.CheckboxItem>
      </SC.CheckboxWrap>
    </SC.Container>
  );
};