/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { HiOutlineHome, HiOutlinePhoneMissedCall } from "react-icons/hi";

export default function Input(props) {
  const {
    value: { value },
    disabled = false,
    label,
    size = "medium",
    full = false,
    styleType,
    iconClick = false,
    iconLeft = false,
    iconColor = "gray",
    validationRules,
    error
  } = props;

  const { control } = useForm();

  const [inputType, setInputType] = useState(props.type);
  const [isHidden, setIsHidden] = useState(props.type === "password");
  const [icon, setIcon] = useState("C"); 
  const styleTypes = {
    input:
      "w-full text-black mb-5 text-3xl border-2 border-gray-100 rounded-md focus:outline-none focus:ring-1 focus:ring-green-100 focus:border-green-100 placeholder-black transition",
  };


  const base = "";
  const sizes = {
    small: "p-3",
    "x-small": "p-1",
    medium: "py-4 px-4",
    big: "py-6 px-8",
    large: "py-6 px-10 text-xl sm:text-2xl",
  };

  const classed = `${base} ${
    sizes[size] ?? sizes["medium"]
  } ${
    styleTypes[styleType] ?? styleTypes["input"]
  } ${full ? "w-full" : ""}`;

  const handleIconClick = () => {
    if (!iconClick || props.type !== "password") return;

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
          <label className="text-black  font-bold text-3xl  mb-2">{label}</label>
        )}
        <div className="relative py-1">
          <Controller
            name="inputField"
            control={control}
            rules={validationRules} 
            render={({ field }) => (
              <>
                <input
                  {...field}
                  className={`${
                    classed
                  } ${iconLeft ? "pl-10" : ""} inline-block w-full focus:border-green-deep text-black mr-3 px-2`}
                  type={inputType}
                  value={value}
                  onChange={(e) => props.onChange(e.target.value)}
                  disabled={disabled}
                  required
                />
                {props.type === "password" && (
                  <div
                    onClick={handleIconClick}
                    className={`absolute text-black top-4 bottom-0 my-auto right-5 ${
                      full ? "right-2 left-auto" : ""
                    } ${
                      styleType === "input" ? "bg-gray" : ""
                    } ${iconClick ? "cursor-pointer" : ""} ${iconLeft ? "left-2" : ""}`}
                  >
                    {React.createElement(icon === "O" ? HiOutlineHome : HiOutlinePhoneMissedCall, {
                      size: 22,
                      textcolor: iconColor,
                    })}
                  </div>
                )}
                {error && (
                  <p className="font-medium mt-2 text-xs text-red-600">
                    {error}
                  </p>
                )}
              </>
            )}
          />
        </div>
      </div>
    </div>
  );
}
