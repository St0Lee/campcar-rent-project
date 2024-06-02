import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ImCross } from 'react-icons/im';

import { Reviews } from './Reviews/Reviews';
import { Features } from './Features/Features';

import * as SC from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ toggleModal, advert }) => {
  const [activeSection, setActiveSection] = useState(null);
  console.log(advert)
  useEffect(() => {
    const closeModal = e => {
      if (e.code === 'Escape') {
        toggleModal();
      }
    };
    window.addEventListener('keydown', closeModal);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', closeModal);
      document.body.style.overflow = '';
    };
  }, [toggleModal]);

  const closeOnClick = e => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  const toggleSection = section => {
    setActiveSection(section === activeSection ? null : section);
  };

  return createPortal(
    <SC.Overlay onClick={closeOnClick}>
      <SC.Inner>
        <SC.CloseBtn type="button" onClick={toggleModal}>
          <ImCross size="16" />
        </SC.CloseBtn>
        <p>{advert.name}</p>
        <p>{advert.rating}</p>
        <p>{advert.location}</p>
        <p>{advert.price}</p>
        <SC.Image
          loading="lazy"
          src={advert.gallery[0]}
          alt={advert.name}
        />
        <SC.Image
          loading="lazy"
          src={advert.gallery[1]}
          alt={advert.name}
        />
        <SC.Image
          loading="lazy"
          src={advert.gallery[2]}
          alt={advert.name}
        />
        <p>{advert.description}</p>
        <button onClick={() => toggleSection('reviews')}>Reviews</button>
        <button onClick={() => toggleSection('details')}>Details</button>
        {activeSection === 'reviews' && <Reviews reviews={advert.reviews}/>}
        {activeSection === 'details' && <Features name={advert.name} price={advert.price} gallery={advert.gallery} />}
      </SC.Inner>
    </SC.Overlay>,
    modalRoot
  );
};

