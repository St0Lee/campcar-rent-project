 

import { useGetAdvertsQuery } from "../../redux/adverts/advertsOperations";
import { useState, useEffect } from "react";
import { CatalogNav } from "./CatalogNav/CatalogNav";
import { Modal } from "../Modal/Modal";

export const Catalog = () => {
  const { data, isLoading, error } = useGetAdvertsQuery();

  const [receivedAdverts, setReceivedAdverts] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);

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

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data</p>;

  return (
    <>

      {isOpenModal && (
        <Modal toggleModal={toggleModal}>
          <p>Modal Content Here</p>
        </Modal>
      )}
      <ul>
        {receivedAdverts?.map(({ _id, name, price, gallery }) => (
          <li key={_id}>
            <p>
              {name}, {_id}, {price}, {gallery}
            </p>
            <img 
              loading="lazy"
              src={gallery[0]}
              alt={name}
            />
            <button onClick={toggleModal}>
                Show More
            </button>
          </li>
        ))}
      </ul>
      {data && receivedAdverts.length < data.length && (
        <button type="button" onClick={getAdverts}>
          Load More
        </button>
      )}
      <CatalogNav />
    </>
  );
};
