import { useState } from "react";

import { useGetAdvertsQuery } from "../../redux/adverts/advertsOperations";

import { useFavorite } from "../../helpers/hooks/useFavorite";
import { useShowMore } from "../../helpers/hooks/useShowMore";
import { useEquipFilter } from "../../helpers/hooks/useEquipFilter";

import { EquipFilter } from "./components/Filters/EquipFilter/EquipFilter";
import { TypeFilter } from "./components/Filters/TypeFilter/TypeFilter";
import { LocationFilter } from "./components/Filters/LocationFilter/LocationFilter";

import { Modal } from "../Modal/Modal";
import { Loader } from "../Loader/Loader";
import icon from "../../pictures/icons.svg"

import { GoStarFill } from "react-icons/go";

import * as SC from "./Catalog.styled";

export const Catalog = () => {
  const { data, isLoading, error } = useGetAdvertsQuery();
  const { favoriteStatus, handleFavoriteClick } = useFavorite();

  const [locationFilter, setLocationFilter] = useState("");
  const [selectedTypeFilter, setSelectedTypeFilter] = useState("");

  const { receivedAdverts, loadMoreItems, isOpenModal, selectedItem, toggleModal } = useShowMore(data, selectedTypeFilter);

  const { setFilterOptions, applyFilters } = useEquipFilter();

  const handleEquipFilterChange = (event) => {
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

  const applyTypeFilter = (type) => {
    setSelectedTypeFilter(type);
  };

  if (isLoading) return <Loader />;
  if (error) return <p>Error fetching data</p>;

  return (
    
      <SC.Container>
        {isOpenModal && selectedItem && (
          <Modal toggleModal={toggleModal} advert={selectedItem}>
            text
          </Modal>
        )}
        <SC.FiltersWrap>
          <LocationFilter locationFilter={locationFilter} handleLocationFilter={handleLocationFilter} />
          <EquipFilter handleEquipFilterChange={handleEquipFilterChange} />
          <TypeFilter applyTypeFilter={applyTypeFilter} />
        </SC.FiltersWrap> 
        <SC.Wrap>
        <SC.List>
          {filteredAdvertsLocation.map((advert) => (
            <SC.ListItem key={advert._id}> 
              <SC.ContentWrap>
              <SC.ImgWrap>
                <SC.Image loading="lazy" src={advert.gallery[0]} alt={advert.name} />
              </SC.ImgWrap>
                <SC.CardContent>
                  <SC.CardHeaders>
                    <SC.Header>{advert.name}</SC.Header>
                    <SC.Price>€{advert.price}.00
                    <SC.FavButton type="button" onClick={() => handleFavoriteClick(advert)}>
                        {favoriteStatus[advert._id] ? (
                          <SC.FavIcon>
                            <use href={`${icon}#heart-full`} />
                          </SC.FavIcon>
                        ) : (
                          <SC.FavIcon>
                            <use href={`${icon}#heart-empty`} />
                          </SC.FavIcon>
                        )}
                    </SC.FavButton>
                    </SC.Price>
                  </SC.CardHeaders>
                  <SC.CardItem>
                    <SC.Rating>
                      <GoStarFill size="16" color="#FFC531" />{advert.rating}({advert.reviews.length} Reviews)
                    </SC.Rating>
                    <SC.Location>
                      <SC.Icon>
                        <use href={`${icon}#place-marker`} />
                      </SC.Icon>
                        {advert.location}
                    </SC.Location>
                  </SC.CardItem>
                  <p>{shortDescription(advert.description, 100)}</p>
                  <SC.SpecTags>
                    <SC.Tag>
                      <SC.Icon>
                        <use href={`${icon}#users`} />
                      </SC.Icon>
                        {advert.adults} adults
                    </SC.Tag>
                    <SC.Tag>
                      <SC.Icon>
                        <use href={`${icon}#transmission`} />
                      </SC.Icon>
                        {advert.transmission}
                    </SC.Tag>
                    <SC.Tag>
                      <SC.Icon>
                        <use href={`${icon}#engine`} />
                      </SC.Icon>
                        {advert.engine}
                    </SC.Tag>
                    {advert.details.kitchen && <SC.Tag>
                      <SC.Icon>
                        <use href={`${icon}#kitchen`} />
                      </SC.Icon>
                        Kitchen  
                    </SC.Tag>}
                    <SC.Tag>
                      <SC.Icon>
                        <use href={`${icon}#bed`} />
                      </SC.Icon>
                        {advert.details.beds} beds
                    </SC.Tag>
                    {advert.details.airConditioner && <SC.Tag>  
                      <SC.Icon>
                        <use href={`${icon}#AC`} />
                      </SC.Icon>
                        AC 
                    </SC.Tag>}
                  </SC.SpecTags>
                  <SC.ShowMoreButton onClick={() => toggleModal(advert)}>Show More</SC.ShowMoreButton >
                </SC.CardContent>
              </SC.ContentWrap>
            </SC.ListItem>
          ))}
        </SC.List>
        {data && receivedAdverts.length < data.length && (
        <SC.LoadMoreButton type="button" onClick={loadMoreItems}>
          Load More
        </SC.LoadMoreButton>
      )}
        </SC.Wrap>
      </SC.Container>    
  );
};
