// import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ImCross } from 'react-icons/im';
import * as SC from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ toggleModal, children }) => {
  useEffect(() => {
    const closeModal = evt => {
      if (evt.code === 'Escape') {
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

  const closeOnClick = evt => {
    if (evt.target === evt.currentTarget) {
      toggleModal();
    }
  };

  return createPortal(
    <SC.Overlay onClick={closeOnClick}>
      <SC.Inner>
        {children}
        <SC.CloseBtn type="button" onClick={toggleModal}>
          <ImCross size="16" />
        </SC.CloseBtn>
      </SC.Inner>
    </SC.Overlay>,

    modalRoot
  );
};

// Modal.propTypes = {
//   toggleModal: PropTypes.func,
//   children: PropTypes.node,
// };