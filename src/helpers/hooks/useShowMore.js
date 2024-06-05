import { useState, useEffect } from "react";

export const useShowMore = (data, selectedTypeFilter, initialCount = 4) => {
  const [receivedAdverts, setReceivedAdverts] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    if (data && data.length > 0) {
      const filteredData = selectedTypeFilter
        ? data.filter((advert) => advert.form.toLowerCase() === selectedTypeFilter.toLowerCase())
        : data;
      setReceivedAdverts(filteredData.slice(0, initialCount));
    } else {
      setReceivedAdverts([]);
    }
  }, [data, selectedTypeFilter, initialCount]);

  const loadMoreItems = () => {
    if (data) {
      const filteredData = selectedTypeFilter
        ? data.filter((advert) => advert.form.toLowerCase() === selectedTypeFilter.toLowerCase())
        : data;
      const startIndex = receivedAdverts.length;
      const endIndex = startIndex + initialCount;
      const newItems = filteredData.slice(startIndex, endIndex);
      setReceivedAdverts((prevItems) => [...prevItems, ...newItems]);
    }
  };

  const toggleModal = (item) => {
    setSelectedItem(item);
    setIsOpenModal(!isOpenModal);
  };

  return { receivedAdverts, loadMoreItems, isOpenModal, selectedItem, toggleModal };
};
