import React, { ReactNode } from 'react'
import ReactModal from 'react-modal'

interface Modal {
    isOpen: boolean;
    // onRequestClose: () => void;
    children: ReactNode;
  }
  

export default function Modal({ isOpen, children }) {
  return (
    <ReactModal
    isOpen={isOpen}
    // onRequestClose={onRequestClose}
    className="modal-content"
    overlayClassName="modal-overlay"
  >
    {children}
  </ReactModal>
  )
}
