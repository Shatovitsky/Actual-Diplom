/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './index.scss';
// eslint-disable-next-line react/prop-types
function ModalEvents({ onClose }) {
  const [showModal, setShowModal] = useState(true);

  const handleCloseModal = () => {
    setShowModal(false);
    onClose(); // Вызов обработчика onClose при закрытии модального окна
  };

  const handleOverlayClick = (event) => {
    // Закрытие модального окна при клике на оверлей
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`modal-overlay ${showModal ? 'open' : ''}`}
      onClick={handleOverlayClick}
    >
      <div
        className={`modal-content ${showModal ? 'open' : ''}`}
        onClick={(event) => event.stopPropagation()}
      />
    </div>
  );
}
export default ModalEvents;
