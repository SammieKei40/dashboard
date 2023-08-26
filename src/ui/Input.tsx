import PropTypes from "prop-types";
import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { HiEye, HiEyeOff } from "react-icons/hi";


export default function Input(props) {
  const {
    label,
    name,
    type,
    size = "medium",
    styletype,
    full = false,
    defaultValue = "",
    control,
    value,
    placeholder,
    iconclick = false,
    disabled = false,
    iconLeft = false,
    iconColor = 'gray',
    validationRules,
  } = props;


  const [inputType, setInputType] = useState(type);
  const [isHidden, setIsHidden] = useState(type === "password");
  const [icon, setIcon] = useState("C");
  const styleTypes = {
    input:
      "w-full text-black text-3xl border border-[#ACB5BD] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#B99745] focus:border-[#B99745] placeholder-[#ACB5BD] transition",
  };

  const base = "";
  const sizes = {
    small: "p-3",
    "x-small": "p-1",
    medium: "py-6 px-4",
    big: "py-6 px-8",
    large: "py-6 px-10 text-xl sm:text-2xl",
  };

  const classed = `${base} ${
    sizes[size] ?? sizes["medium"]
  } ${
    styleTypes[styletype] ?? styleTypes["input"]
  } ${full ? "w-full" : ""}`;

  const handleIconClick = () => {
    if (!iconclick || type !== "password") return;

    setIsHidden(!isHidden);
    if (isHidden) {
      setIcon("O");
      setInputType("text");
    } else {
      setIcon("C");
      setInputType("password");
    }
  };

  return (
    <div className={full ? "w-full" : ""}>
      <div className="text-left">
        {label && (
          <label className="text-[#ACB5BD]  font-bold text-2xl  mb-2">{label}</label>
        )}
        <div className="relative py-1">
          <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            rules={validationRules}
            render={({ field, fieldState }) => (
              <>
                <input
                  {...field}
                  className={`${
                    classed
                  } ${iconLeft ? 'pl-10' : ''} inline-block w-full text-black mr-3 px-2 ${
                    (fieldState.isTouched || fieldState.isDirty) && fieldState.error ? 'border-red-600 focus:ring-red-600 focus:border-red-600' : 'border-[#ACB5BD]'
                  }`}
                  type={inputType}
                  value={value}
                  placeholder={placeholder}
                  onChange={(e) => {
                    field.onChange(e);
                    if (props.onChange) {
                      props.onChange(e.target.value);
                    }
                  }}
                  disabled={disabled}
                  required
                />
                {fieldState?.error?.message && (
          <p className="flex items-center gap-3 font-bold text-xl mb-3 mt-3 text-red-600">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.29 3.85999L1.82002 18C1.64539 18.3024 1.55299 18.6453 1.55201 18.9945C1.55103 19.3437 1.64151 19.6871 1.81445 19.9905C1.98738 20.2939 2.23675 20.5467 2.53773 20.7238C2.83871 20.9009 3.18082 20.9962 3.53002 21H20.47C20.8192 20.9962 21.1613 20.9009 21.4623 20.7238C21.7633 20.5467 22.0127 20.2939 22.1856 19.9905C22.3585 19.6871 22.449 19.3437 22.448 18.9945C22.4471 18.6453 22.3547 18.3024 22.18 18L13.71 3.85999C13.5318 3.5661 13.2807 3.32311 12.9812 3.15447C12.6817 2.98584 12.3438 2.89725 12 2.89725C11.6563 2.89725 11.3184 2.98584 11.0188 3.15447C10.7193 3.32311 10.4683 3.5661 10.29 3.85999V3.85999Z" stroke="#CA0814" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 9V13" stroke="#CA0814" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 16V16.5" stroke="#CA0814" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
  {fieldState.error.message}
          </p>
        )}

                {type === "password" && (
                  <div
                    onClick={handleIconClick}
                    className={`absolute text-[#ACB5BD] top-6 bottom-0 my-auto right-5 ${
                      full ? "right-2 left-auto" : ""
                    } ${
                      styletype === "input" ? "" : ""
                    } ${iconclick ? "cursor-pointer" : ""} ${
                      iconLeft ? "left-2" : ""
                    }`}
                  >
                    {React.createElement(
                      icon === "O" ? HiEye : HiEyeOff,
                      {
                        size: 22,
                        textcolor: iconColor,
                      }
                    )}
                  </div>
                )}
              </>
            )}
          />
        </div>
      </div>
    </div>
  );
}

