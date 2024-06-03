import { useGetAdvertsQuery } from "../../redux/adverts/advertsOperations";
import { useState, useEffect, useCallback } from "react";
import { Modal } from "../Modal/Modal";

import icon from "../../pictures/icons.svg"

import * as SC from "./Catalog.styled"

export const Catalog = () => {
  const { data, isLoading, error } = useGetAdvertsQuery();
  
  const [receivedAdverts, setReceivedAdverts] = useState(data ? data.slice(0, 4) : []);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedAdvert, setSelectedAdvert] = useState(null);
  const [favoriteStatus, setFavoriteStatus] = useState({});
  
  const getFavoriteLocal = useCallback((key) => {
    const data = JSON.parse(localStorage.getItem(key));
    console.log("Favorite data from local storage:", data);
    return data || [];
  }, []);
  
  useEffect(() => {
    console.log("Favorite status on mount:", favoriteStatus);
  }, [favoriteStatus]);

  useEffect(() => {
    if (data && data.length > 0) {
      setReceivedAdverts(data.slice(0, 4));
      const savedCars = getFavoriteLocal("favorite");
      const initialFavoriteStatus = savedCars.reduce((status, car) => {
        status[car._id] = true;
        return status;
      }, {});
      setFavoriteStatus(initialFavoriteStatus);
    }
  }, [data, getFavoriteLocal]);
  
 
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

  useEffect(() => {
    if (selectedAdvert) {
      const savedCars = getFavoriteLocal("favorite");
      const isInFavorite = savedCars.some((car) => car._id === selectedAdvert._id);
      setFavoriteStatus((prevStatus) => ({
        ...prevStatus,
        [selectedAdvert._id]: isInFavorite,
      }));
    }
  }, [selectedAdvert, getFavoriteLocal]);  

  const setFavoriteLocal = (key, item) => {
    const myFavorite = getFavoriteLocal(key);
    let data;
    let isInFavorite;

    if(myFavorite.some((car) => car._id === item._id)){
      data = myFavorite.filter((car) => car._id !== item._id);
      isInFavorite = false;
    }
    else{
      data = [...myFavorite, item];
      isInFavorite = true;
    }

    localStorage.setItem(key, JSON.stringify(data));

    return isInFavorite;
  }

  const handleClick = (advert) => {
    if (advert) {
      const isInFavorite = setFavoriteLocal("favorite", advert);
      setFavoriteStatus((prevStatus) => ({
        ...prevStatus,
        [advert._id]: isInFavorite,
      }));
    }
  };  

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data</p>;
  

  return (
    <SC.Container>
      {isOpenModal && selectedAdvert && (
        <Modal toggleModal={toggleModal} advert={selectedAdvert}>
          text
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
              <button type="button" onClick={() => handleClick(advert)}>
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
      {data && receivedAdverts.length < data.length && (
        <button type="button" onClick={getAdverts}>
          Load More
        </button>
      )}
    </SC.Container>
  );
};