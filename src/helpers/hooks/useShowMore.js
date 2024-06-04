import { useState, useEffect } from "react";

export const useShowMore = (data, initialCount = 4) => {
  const [receivedAdverts, setReceivedAdverts] = useState([]);

  useEffect(() => {
    if (data && data.length > 0) {
      setReceivedAdverts(data.slice(0, initialCount));
    } else {
      setReceivedAdverts([]);
    }
  }, [data, initialCount]);

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const loadMoreItems = () => {
    if (data) {
      const startIndex = receivedAdverts.length;
      const endIndex = startIndex + initialCount;
      const newItems = data.slice(startIndex, endIndex);
      setReceivedAdverts((prevItems) => [...prevItems, ...newItems]);
    }
  };

  const toggleModal = (item) => {
    setSelectedItem(item);
    setIsOpenModal(!isOpenModal);
  };

  return { receivedAdverts, loadMoreItems, isOpenModal, selectedItem, toggleModal };
};
