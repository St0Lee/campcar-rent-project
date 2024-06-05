import { useState, useEffect } from "react";
import { useFavorite } from "../../helpers/hooks/useFavorite";
import { useShowMore } from "../../helpers/hooks/useShowMore";

import { Modal } from "../Modal/Modal";
import icon from "../../pictures/icons.svg"

import { GoStarFill } from "react-icons/go";

import * as SC from "./Favorite.styled";


export const Favorite = () => {
  const { favoriteStatus, handleFavoriteClick } = useFavorite();
  const [adverts, setAdverts] = useState([]);
  const { receivedAdverts, loadMoreItems, isOpenModal, selectedItem, toggleModal } = useShowMore(adverts);

  useEffect(() => {
    const storedAdverts = JSON.parse(localStorage.getItem("favorite")) ?? [];
    setAdverts(storedAdverts);
  }, [favoriteStatus]);

  return (
    <SC.Container>
      {isOpenModal && selectedItem && (
        <Modal toggleModal={toggleModal} advert={selectedItem} />
      )}
      <SC.Wrap>
        <SC.List>
        {receivedAdverts?.map((advert) => (
  <SC.ListItem key={advert._id}>
    <SC.Image 
      loading="lazy"
      src={advert.gallery && advert.gallery.length > 0 ? advert.gallery[0] : ''}
      alt={advert.name}
    />
      <SC.ContentWrap>
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
        <SC.Header>{advert.name}</SC.Header>
        <SC.Price>€{advert.price}.00</SC.Price>
        <SC.CardItem>
          <SC.Rating>
            <GoStarFill size="16" color="#FFC531" />{advert.rating}({advert.reviews ? advert.reviews.length : 0} Reviews)
          </SC.Rating>
          <SC.Location>
            <SC.Icon>
              <use href={`${icon}#place-marker`} />
            </SC.Icon>
            {advert.location}
          </SC.Location>
                </SC.CardItem>
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
                      <use href={`${icon}#beds`} />
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
                <SC.ShowMoreButton onClick={() => toggleModal(advert)}>Show More</SC.ShowMoreButton>
              </SC.ContentWrap>
            </SC.ListItem>
          ))}
        </SC.List>
        {adverts?.length > receivedAdverts.length && (
          <SC.LoadMoreButton type="button" onClick={loadMoreItems}>
            Load More
          </SC.LoadMoreButton>
        )}
      </SC.Wrap>
    </SC.Container>
  );
};
