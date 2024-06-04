import { useState, useEffect } from "react";
import { useFavorite } from "../../helpers/hooks/useFavorite";
import { useShowMore } from "../../helpers/hooks/useShowMore";
import * as SC from "./Favorite.styled";
import { Modal } from "../Modal/Modal";

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
        <Modal toggleModal={toggleModal} advert={selectedItem}>
          {/* Modal content */}
        </Modal>
      )}
      <ul>
        {receivedAdverts?.map((advert) => (
          <SC.List key={advert._id}>
            <SC.Image 
              loading="lazy"
              src={advert.gallery[0]}
              alt={advert.name}
            />
            <SC.ContentWrap>
              <button type="button" onClick={() => handleFavoriteClick(advert)}>
                {favoriteStatus[advert._id] ? "Remove" : "Add"}
              </button>
              <p>{advert.name}</p>
              <p>{advert.rating}</p>
              <p>{advert.location}</p>
              <p>{advert.price}</p>
              <button onClick={() => toggleModal(advert)}>
                Show More
              </button>
            </SC.ContentWrap>
          </SC.List>
        ))}
      </ul>
      {adverts?.length > receivedAdverts.length && (
        <button type="button" onClick={loadMoreItems}>
          Load More
        </button>
      )}
    </SC.Container>
  );
};

