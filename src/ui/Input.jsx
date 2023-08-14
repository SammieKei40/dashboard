// /* eslint-disable react/prop-types */
// import PropTypes from "prop-types";
// import React, { useState } from "react";
// import { Controller, useForm } from "react-hook-form";
// import { HiEye, HiEyeOff } from "react-icons/hi";

// Input.propTypes = {
//   props: PropTypes,
// }

// export default function Input(props) {
//   const {
//     value,
//     disabled = false,
//     label,
//     size,
//     full,
//     styletype,
//     iconclick = false,
//     iconLeft = false,
//     iconColor = "gray",
//     // validationRules,
//   } = props;

//   const { control , register, formState : {errors}} = useForm();

//   const [inputType, setInputType] = useState(props.type);
//   const [isHidden, setIsHidden] = useState(props.type === "password");
//   const [icon, setIcon] = useState("C"); 
//   const styleTypes = {
//     input:
//       "w-full text-black mb-5 text-3xl border-2 border-gray-100 rounded-md focus:outline-none focus:ring-1 focus:ring-green-100 focus:border-green-100 placeholder-black transition",
//   };


//   const base = "";
//   const sizes = {
//     small: "p-3",
//     "x-small": "p-1",
//     medium: "py-4 px-4",
//     big: "py-6 px-8",
//     large: "py-6 px-10 text-xl sm:text-2xl",
//   };

//   const classed = `${base} ${
//     sizes[size] ?? sizes["medium"]
//   } ${
//     styleTypes[styletype] ?? styleTypes["input"]
//   } ${full ? "w-full" : ""}`;

//   const handleIconClick = () => {
//     if (!iconclick || props.type !== "password") return;

//     setIsHidden(!isHidden);
//     if (isHidden) {
//       setIcon("O"); 
//       setInputType("text");
//     } else {
//       setIcon("C"); 
//       setInputType("password");
//     }
//   };

//   return (
//     <div className={full ? "w-full" : ""}>
//       <div className="text-left">
//         {label && (
//           <label className="text-black  font-bold text-3xl  mb-2">{label}</label>
//         )}
//         <div className="relative py-1">
//         <input
//           {...props}
//           {...register(inputType, {
//             required: "This field is required"
//           })}
//                   className={`${
//                     classed
//                   } ${iconLeft ? "pl-10" : ""} inline-block w-full text-black mr-3 px-2`}
//                   type={inputType}
//                   value={value}
//                   onChange={(e) =>{ props.onChange(e.target.value)}}
//                   disabled={disabled}
//                   required
//                 />
//                 {errors?.inputType && (
//                 <p className="font-medium text-lg text-red-600">
//                     {errors[inputType]?.message} 
//                   </p>
//                 )}
//                 {props.type === "password" && (
//                   <div
//                     onClick={handleIconClick}
//                     className={`absolute text-black top-4 bottom-0 my-auto right-5 ${
//                       full ? "right-2 left-auto" : ""
//                     } ${
//                       styletype === "input" ? "" : ""
//                     } ${iconclick ? "cursor-pointer" : ""} ${iconLeft ? "left-2" : ""}`}
//                   >
//                     {React.createElement(icon === "O" ? HiEye : HiEyeOff, {
//                       size: 22,
//                       textcolor: iconColor,
//                     })}
//                   </div>
//                 )}
                
//         </div>
//       </div>
//     </div>
//   );
// }

import PropTypes from "prop-types";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { HiEye, HiEyeOff } from "react-icons/hi";

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(["small", "x-small", "medium", "big", "large"]),
  full: PropTypes.bool,
  styletype: PropTypes.string,
  iconclick: PropTypes.bool,
  iconLeft: PropTypes.bool,
  iconColor: PropTypes.string,
};

export default function Input(props) {
  const {
    name,
    label,
    type = "text",
    defaultValue = "",
    onChange,
    value,
    disabled = false,
    size = "medium",
    full = false,
    styletype,
    iconclick = false,
    iconLeft = false,
    iconColor = "gray",
  } = props;

  const { control, formState: { errors } } = useForm();

  const [inputType, setInputType] = useState(type);
  const [isHidden, setIsHidden] = useState(type === "password");
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
          <label className="text-black  font-bold text-3xl  mb-2">{label}</label>
        )}
        <div className="relative py-1">
          <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            rules={{
              required: "This field is required",
            }}
            render={({ field }) => (
              <>
                <input
                  {...field}
                  className={`${
                    classed
                  } ${iconLeft ? "pl-10" : ""} inline-block w-full text-black mr-3 px-2`}
                  type={inputType}
                  value={value}
                  onChange={(e) => {
                    field.onChange(e);
                    if (onChange) {
                      onChange(e.target.value);
                    }
                  }}
                  disabled={disabled}
                  required
                />
                {errors[name] && (
                  <p className="font-medium text-lg text-red-600">
                    {errors[name]?.message}
                  </p>
                )}
                {type === "password" && (
                  <div
                    onClick={handleIconClick}
                    className={`absolute text-black top-4 bottom-0 my-auto right-5 ${
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

