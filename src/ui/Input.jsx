/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { HiEye, HiEyeOff } from "react-icons/hi";

export default function Input(props) {
  const {
    value,
    disabled = false,
    label,
    size,
    full,
    styletype,
    iconclick = false,
    iconLeft = false,
    iconColor = "gray",
    // validationRules,
    error
  } = props;

  const { control , register} = useForm();

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
    styleTypes[styletype] ?? styleTypes["input"]
  } ${full ? "w-full" : ""}`;

  const handleIconClick = () => {
    if (!iconclick || props.type !== "password") return;

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
        <input
          {...props}
          {...register(inputType, {
            required: true
          })}
                  className={`${
                    classed
                  } ${iconLeft ? "pl-10" : ""} inline-block w-full text-black mr-3 px-2`}
                  type={inputType}
                  value={value}
                  onChange={(e) =>{ props.onChange(e.target.value)}}
                  disabled={disabled}
                  required
                />
                {props.type === "password" && (
                  <div
                    onClick={handleIconClick}
                    className={`absolute text-black top-4 bottom-0 my-auto right-5 ${
                      full ? "right-2 left-auto" : ""
                    } ${
                      styletype === "input" ? "" : ""
                    } ${iconclick ? "cursor-pointer" : ""} ${iconLeft ? "left-2" : ""}`}
                  >
                    {React.createElement(icon === "O" ? HiEye : HiEyeOff, {
                      size: 22,
                      textcolor: iconColor,
                    })}
                  </div>
                )}
                {error && (
                  <p className="font-medium mt-2 text-xs text-red-600">
                    {error[inputType]?.message}
                  </p>
                )}
          {/* <Controller
            name={inputType}
            control={control}
            rules={validationRules} 
            render={({ field }) => (
              <>
                <input
                  {...field}
                  className={`${
                    classed
                  } ${iconLeft ? "pl-10" : ""} inline-block w-full text-black mr-3 px-2`}
                  type={inputType}
                  value={field.value}
                  onChange={(e) =>{field.onChange(e); props.onChange(e.target.value)}}
                  disabled={disabled}
                  required
                />
                {props.type === "password" && (
                  <div
                    onClick={handleIconClick}
                    className={`absolute text-black top-4 bottom-0 my-auto right-5 ${
                      full ? "right-2 left-auto" : ""
                    } ${
                      styleType === "input" ? "" : ""
                    } ${iconClick ? "cursor-pointer" : ""} ${iconLeft ? "left-2" : ""}`}
                  >
                    {React.createElement(icon === "O" ? HiEye : HiEyeOff, {
                      size: 22,
                      textcolor: iconColor,
                    })}
                  </div>
                )}
                {error && (
                  <p className="font-medium mt-2 text-xs text-red-600">
                    {error[inputType]?.message}
                  </p>
                )}
              </>
            )}
          /> */}
        </div>
      </div>
    </div>
  );
}
