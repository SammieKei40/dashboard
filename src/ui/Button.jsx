import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { BiLoaderAlt } from 'react-icons/bi';
import SpinnerMini from './SpinnerMini';

const Button = (props) => {
  const [base] = useState('rounded-xl');

  const sizes = {
    small: 'py-4 px-4',
    medium: 'py-8 px-6',
    big: 'py-4 px-8 txt-s-4',
  };

  const types = {
    sec: {
      __class: 'border-pry rounded mt-10 bg-green-deep text-[#fff] font-bold btn-pry',
      text: '#fff',
    },
    pry: {
      __class: 'text-white bg-[#8E7AE3] text-4xl  rounded border border-gray-200 text-sm font-medium ',
      text: '#fff',
    },
    delete: {
      __class: 'text-white bg-red-600 hover:bg-red-700 rounded-lg',
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
      const IconComponent = props.loading ? "H" : props.icon;

      return (
        <IconComponent
          className={`${!props.iconOnly ? 'mr-2' : ''} my-auto`}
          size="17"
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
    if (props.round) __base += ' rounded-full h-12 w-12 max-w-12 center';
    else __base += ' ' + base;

    if (props.full) __base += ' w-full';
    if (props.disabled) __base += ' fade-40 cursor-not-allowed';

    return __base;
  })();

  return (
    <button
      ref={buttonRef}
      className={`${__class} ${props.disabled ? 'disabled-button' : ''}`}
      style={{ whiteSpace: 'nowrap' }}
      disabled={props.disabled}
    >
      {renderIcon()}
      <span
        className={`my-auto ${!props.icon && !props.loading ? (props.round ? ' mt-1 ml-1 z-50' : 'm-auto') : ''}`}
      >
        {props.children}
      </span>
    </button>
  );
};

Button.propTypes = {
  size: PropTypes.string,
  type: PropTypes.string,
  round: PropTypes.bool,
  icon: PropTypes.object,
  iconOnly: PropTypes.bool,
  full: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  children: PropTypes.node,
};

export default Button;
