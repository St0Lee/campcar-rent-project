import { useGetAdvertsQuery } from "../../redux/adverts/advertsOperations";
import { useState, useEffect } from "react";
import { Modal } from "../Modal/Modal";

import * as SC from "./Catalog.styled"

export const Catalog = () => {
  const { data, isLoading, error } = useGetAdvertsQuery();

  const [receivedAdverts, setReceivedAdverts] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedAdvert, setSelectedAdvert] = useState(null);

  useEffect(() => {
    if (data && data.length > 0) {
      setReceivedAdverts(data.slice(0, 4));
    }
  }, [data]);

  const getAdverts = () => {
    if (data) {
      const startIndex = receivedAdverts.length;
      const endIndex = startIndex + 4;
      const newAdverts = data.slice(startIndex, endIndex);
      setReceivedAdverts((prevAdverts) => [...prevAdverts, ...newAdverts]);
    }
  };

  const toggleModal = (advert) => {
    setSelectedAdvert(advert);
    setIsOpenModal(!isOpenModal);
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data</p>;

  return (
    <SC.Container>
      {isOpenModal && selectedAdvert && (
        <Modal toggleModal={toggleModal} advert={selectedAdvert}>
          <p>Modal Content Here</p>
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
      {data && receivedAdverts.length < data.length && (
        <button type="button" onClick={getAdverts}>
          Load More
        </button>
      )}
    </SC.Container>
  );
};
