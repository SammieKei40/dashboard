import React, { ReactNode, useState } from "react";
import Button from "./Button";
import Modal from 'react-modal'

interface SuccessModal {
    text: string;
    buttonText: string
    isOpen: boolean;
    onRequestClose: () => void;
  }
  

  export default function SuccessModal({isOpen, onRequestClose, text, buttonText }) {
    
  return (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    className="modal-content"
    overlayClassName="modal-overlay"
  >

      <div className="bg-white  text-center">
        <div className="mb-6 md:mb-12">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="80" height="80" rx="40" fill="#F9F9F9"/>
<path d="M64 37.8057V40.0137C63.997 45.1891 62.3212 50.2249 59.2224 54.3701C56.1236 58.5153 51.7679 61.5477 46.8048 63.0151C41.8418 64.4825 36.5374 64.3063 31.6827 62.5127C26.828 60.7192 22.6832 57.4044 19.8663 53.0627C17.0494 48.721 15.7115 43.5851 16.052 38.4209C16.3925 33.2567 18.3933 28.3409 21.7559 24.4067C25.1184 20.4725 29.6627 17.7307 34.7108 16.5901C39.759 15.4495 45.0406 15.9713 49.768 18.0777M64 20.8138L40 44.8378L32.8 37.6378" stroke="#B99745" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

          <p className="text-2xl md:text-4xl font-bold -mt-8 md:-mt-24">
            {text}
          </p>
        </div>
        <Button
            onClick={onRequestClose}
          disabled={false}
          showArrow={false}
          loading={false} round={false} size="medium"  type="alternate"
        >
          {buttonText} 
        </Button>
      </div>
      </Modal>
  );
};

;
