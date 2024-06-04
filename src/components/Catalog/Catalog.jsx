import React, { useState } from "react";
import { useGetAdvertsQuery } from "../../redux/adverts/advertsOperations";
import { Modal } from "../Modal/Modal";
import { useFavorite } from "../../helpers/hooks/useFavorite";
import { useShowMore } from "../../helpers/hooks/useShowMore";
import { useEquipFilter } from "../../helpers/hooks/useEquipFilter"; // Import the useEquipFilter hook
import { EquipFilter } from "./components/Filters/EquipFilter";
import * as SC from "./Catalog.styled";

export const Catalog = () => {
  const { data, isLoading, error } = useGetAdvertsQuery();
  const { favoriteStatus, handleFavoriteClick } = useFavorite();
  const { receivedAdverts, loadMoreItems, isOpenModal, selectedItem, toggleModal } = useShowMore(data);
  
  const [locationFilter, setLocationFilter] = useState("");
  const { filterOptions, setFilterOptions, applyFilters } = useEquipFilter(); // Apply the useEquipFilter hook
  
  const handleFilterChange = (event) => {
    const { name, checked } = event.target;
    setFilterOptions((prevOptions) => ({
      ...prevOptions,
      [name]: checked,
    }));
  };

  const handleLocationFilter = (e) => {
    setLocationFilter(e.target.value);
  };

  const filteredAdverts = applyFilters(receivedAdverts);

  const filteredAdvertsLocation = locationFilter
    ? filteredAdverts.filter((advert) => advert.location.toLowerCase().includes(locationFilter.toLowerCase()))
    : filteredAdverts;

  const shortDescription = (description, maxLength) => {
    return description.length > maxLength ? `${description.substring(0, maxLength)}...` : description;
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data</p>;

  return (
    <SC.Container>
      {isOpenModal && selectedItem && (
        <Modal toggleModal={toggleModal} advert={selectedItem}>
          text
        </Modal>
      )}
      <div>
        <label htmlFor="locationFilter">Location:</label>
        <input
          id="locationFilter"
          type="text"
          placeholder="Enter location..."
          value={locationFilter}
          onChange={handleLocationFilter}
        />
      </div>
      <EquipFilter handleFilterChange={handleFilterChange} />
      <ul>
        {filteredAdvertsLocation.map((advert) => (
          <SC.List key={advert._id}> 
            <SC.Image loading="lazy" src={advert.gallery[0]} alt={advert.name} />
            <SC.ContentWrap>
              <button type="button" onClick={() => handleFavoriteClick(advert)}>
                {favoriteStatus[advert._id] ? "Remove" : "Add"}
              </button>
              <p>{advert.name}</p>
              <p>{advert.rating}</p>
              <p>{advert.location}</p>
              <p>{advert.price}</p>
              <p>{shortDescription(advert.description, 100)}</p>
              <p>{advert.adults}</p>
              <p>{advert.transmission}</p>
              <p>{advert.engine}</p>
              <p>{advert.details.kitchen}</p>
              <p>{advert.details.beds}</p>
              <p>{advert.details.airConditioner}</p>
              <button onClick={() => toggleModal(advert)}>Show More</button>
            </SC.ContentWrap>
            </SC.List>
        ))}
      </ul>
      {data && receivedAdverts.length < data.length && (
        <button type="button" onClick={loadMoreItems}>
          Load More
        </button>
      )}
    </SC.Container>
  );
};
