/* eslint-disable react/prop-types */

import { useState } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  const [modalOpen, setModalOpen] = useState(isOpen);

  const closeModal = () => {
    setModalOpen(false);
    onClose();
  };

  return (
    <div
      className={`fixed top-0 left-0  inset-0 flex  items-center justify-center bg-backdrop-color backdrop-blur-md z-50 transition-all duration-500 ${
        modalOpen ? '' : 'hidden'
      }`}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="fixed z-50 w-11/12 md:w-2/3 h-auto  bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  rounded-lg shadow-lg p-10 transition-all duration-500">
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &#x2715;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
