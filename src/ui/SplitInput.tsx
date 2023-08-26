import React, { useEffect, useRef, useState } from 'react'

interface SplitInput {
    length: number;
    value: string;
    onChange: (newValue: string) => void;
    hasError?: boolean;
  errorText?: string;
  errorTimeout?: number;
  }

export default function SplitInput({ length, value, onChange, hasError = false, errorText, errorTimeout = 3000 }) {
    const inputRefs: Array<React.RefObject<HTMLInputElement> | null> = Array.from(
        { length },
        () => useRef<HTMLInputElement>(null)
      );

      const [showError, setShowError] = useState<boolean>(hasError);
 
    const handleChange = (index: number, newValue: string) => {
      const updatedValue = value.slice(0, index) + newValue + value.slice(index + 1);
      onChange(updatedValue);
      setShowError(false);
    };
  
    const handleKeyPress = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key >= '0' && e.key <= '9') {
          handleChange(index, e.key);
          if (index < length - 1) {
            inputRefs[index + 1]?.current?.focus();
          }
        } else if (e.key === 'Backspace') {
          if (index > 0) {
            inputRefs[index - 1]?.current?.focus();
            handleChange(index - 1, ''); 
          } else {
            handleChange(index, ''); 
          }
        } else if (e.key === 'ArrowLeft' && index > 0) {
          inputRefs[index - 1]?.current?.focus();
        } else if (e.key === 'ArrowRight' && index < length - 1) {
          inputRefs[index + 1]?.current?.focus();
        }
      };
      

    useEffect(() => {
      inputRefs[0]?.current?.focus();
    }, []);

    useEffect(() => {
        if (hasError) {
          const timeoutId = setTimeout(() => {
            setShowError(false);
          }, errorTimeout);
    
          return () => clearTimeout(timeoutId);
        }
      }, [hasError, errorTimeout]);
  
    return (
    <div className="flex flex-col">
      <div className="flex">
        {Array.from({ length }).map((_, index) => (
          <input
            key={index}
            ref={inputRefs[index]}
            type="text"
            className={`border border-[#ACB5BD] focus:outline-none focus:ring-1 focus:ring-[#B99745] focus:border-[#B99745] rounded text-3xl text-center w-20 h-20 mr-2 ${ showError ? 'border-red-500' : 'border border-[#ACB5BD]'}`}
            maxLength={1}
            value={value[index] || ''}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyPress(index, e)}
            onPaste={(e) => e.preventDefault()}
            onFocus={() => setShowError(false)}
          />
        ))}
        </div>
        {hasError && showError && <p className="text-red-500 mt-1">{errorText || 'Invalid input'}</p>}
      </div>
    );
  
}
