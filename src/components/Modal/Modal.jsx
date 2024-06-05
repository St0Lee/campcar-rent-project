import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ImCross } from 'react-icons/im';

import { Reviews } from './components/Reviews/Reviews';
import { Features } from './components/Features/Features';

import icon from '../../pictures/icons.svg'

import { GoStarFill } from "react-icons/go";

import * as SC from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ toggleModal, advert }) => {
  const [activeSection, setActiveSection] = useState(null);
  
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
        <SC.Header>{advert.name}</SC.Header>
        <SC.CardItem>
          <SC.Rating>
          <GoStarFill size="16" color="#FFC531" />
            {advert.rating}({advert.reviews.length} Reviews)
          </SC.Rating>
          <SC.Location>
            <SC.Icon>
              <use href={`${icon}#place-marker`} />
            </SC.Icon>
              {advert.location}
          </SC.Location>
        </SC.CardItem>
        <SC.Price>
          €{advert.price}.00
        </SC.Price>
        <SC.ImgWrapper>
        <SC.ImgWrap>
          <SC.Image
            loading="lazy"
            src={advert.gallery[0]}
            alt={advert.name}
          />
        </SC.ImgWrap>
          <SC.ImgWrap>
          <SC.Image
            loading="lazy"
            src={advert.gallery[1]}
            alt={advert.name}
          />
          </SC.ImgWrap>
          <SC.ImgWrap>
          <SC.Image
            loading="lazy"
            src={advert.gallery[2]}
            alt={advert.name}
          />
          </SC.ImgWrap>
        </SC.ImgWrapper>
        <SC.Description>
          {advert.description}
        </SC.Description>
          <SC.FeaturesBtn active={activeSection === 'features'} onClick={() => toggleSection('features')}>Features</SC.FeaturesBtn>
          <SC.ReviewsBtn active={activeSection === 'reviews'} onClick={() => toggleSection('reviews')}>Reviews</SC.ReviewsBtn>
          <SC.Divider />
        {activeSection === 'reviews' && <Reviews reviews={advert.reviews}/>}
        {activeSection === 'features' && <Features advert={advert} />}
      </SC.Inner>
    </SC.Overlay>,
    modalRoot
  );
};

