import { useState, useCallback, useEffect } from "react";

export const useFavorite = () => {
  const [favoriteStatus, setFavoriteStatus] = useState({});

  const getFavoriteLocal = useCallback((key) => {
    const data = JSON.parse(localStorage.getItem(key));
    return data || [];
  }, []);

  const setFavoriteLocal = (key, item) => {
    const myFavorite = getFavoriteLocal(key);
    let data;
    let isInFavorite;

    if (myFavorite.some((car) => car._id === item._id)) {
      data = myFavorite.filter((car) => car._id !== item._id);
      isInFavorite = false;
    } else {
      data = [...myFavorite, item];
      isInFavorite = true;
    }

    localStorage.setItem(key, JSON.stringify(data));
    return isInFavorite;
  };

  const handleFavoriteClick = (advert) => {
    if (advert) {
      const isInFavorite = setFavoriteLocal("favorite", advert);
      setFavoriteStatus((prevStatus) => ({
        ...prevStatus,
        [advert._id]: isInFavorite,
      }));
    }
  };

  useEffect(() => {
    const savedCars = getFavoriteLocal("favorite");
    const initialFavoriteStatus = savedCars.reduce((status, car) => {
      status[car._id] = true;
      return status;
    }, {});
    setFavoriteStatus(initialFavoriteStatus);
  }, [getFavoriteLocal]);

  return {
    favoriteStatus,
    handleFavoriteClick,
    getFavoriteLocal,
  };
};
