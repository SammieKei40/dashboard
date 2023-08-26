import React from 'react'

interface ToggleButton {
    isChecked: boolean;
    isActive: boolean;
    onText: string;
    offText: string;
  }

export default function ToggleButton({ isChecked, onToggle, onText, offText }) {
    const handleToggle = () => {
        onToggle();
      };
    
      return (
        <label htmlFor="toggle" className="flex items-center cursor-pointer">
        
        <div className="relative">
          <input
            type="checkbox"
            id="toggle"
            className="sr-only text-3xl"
            checked={isChecked}
            onChange={handleToggle}
          />

        <div className={`block bg-[#B99745]  w-16 h-10 rounded-full ${isChecked ? '' : 'bg-[#DDE2E5]'}`}></div>
        <div className={`dot absolute left-1 top-1 bg-white w-8 h-8 rounded-full transition ${isChecked ? 'transform translate-x-6' : 'bg-[#ACB5BD]'}`} />
          
        </div>
        <div className="ml-3 text-black font-medium">
          {isChecked ? onText : offText}
        </div>
      </label>

      );
}
