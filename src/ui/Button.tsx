import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import SpinnerMini from './SpinnerMini';
import React from 'react';

const Button = (props) => {
  const [base] = useState('rounded-xl');

  const sizes = {
    small: 'py-4 px-4',
    medium: 'py-6 px-4',
    big: 'py-4 px-8 txt-s-4',
  };

  const types = {
    alternate: {
      __class: 'border border-[#858585] text-3xl rounded-lg bg-white text-black font-medium ',
      text: '#fff',
    },
    pry: {
      __class: 'text-white bg-black text-3xl  rounded-lg font-medium ',
      text: '#fff',
    },
    secondary: {
      __class: 'text-white bg-[#B99745] text-3xl  rounded-lg',
      text: '#fff',
    },
  };

  const buttonRef = useRef(null);

  useEffect(() => {
    if (props.loading) {
      buttonRef.current.blur();
    }
  }, [props.loading]);

  const renderIcon = () => {
    if (props.icon || props.loading) {
      const IconComponent = props.loading ? SpinnerMini : props.icon;

      return (
        <IconComponent
          className={`${!props.iconOnly ? 'mr-2' : ''} my-auto`}
          size="20"
          color={types[props.type]?.text}
        />
      );
    }

    return null;
  };

  const __class = (() => {
    let __base =
      ((types[props.type] && types[props.type].__class) || types['pry'].__class) +
      ' ' +
      (sizes[props.size] || sizes['medium']);
    if (props.round) __base += ' rounded-full h-12 w-12 max-w-12 text-center';
    else __base += ' ' + base;

    if (props.full) __base += ' w-full';
    if (props.disabled) __base += ' opacity-40 cursor-not-allowed';

    return __base;
  })();

  return (
    <button
    type='button'
    onClick={props.onClick}
      ref={buttonRef}
      className={`${__class} ${props.disabled ? 'disabled-button' : ''}`}
      style={{ whiteSpace: 'nowrap' }}
      disabled={props.disabled}
    >
        <div className='flex justify-center gap-5 items-center'>
        {renderIcon()}
        
      <span
        className={`my-auto flex items-center ${!props.icon && !props.loading ? (props.round ? ' mt-1 ml-1 z-50' : 'm-auto') : ''}`}
        >
        {props.children}
        {props.showArrow && (
        <svg
          className="h-10 w-10 ml-96 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
        )}
      </span>
      </div>
    </button>
  );
};


export default Button;
