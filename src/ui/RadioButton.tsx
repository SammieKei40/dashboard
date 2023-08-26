import React from 'react'


interface RadioButton {
    label: string;
    value: string;
    checked: boolean;
    disabled: boolean,
    onChange: (value: string) => void;
  }

export default function RadioButton({ label, value, checked, onChange, disabled }) {

    const handleChange = () => {
        onChange(value);
      };

  return (
    <div className="flex items-center">
      <input
        type="radio"
        disabled={disabled}
        className=" h-12 cursor-pointer  w-12 accent-[#B99745]  focus:accent-[#B99745] "
        value={value}
        checked={checked}
        onChange={handleChange}
      />
      <label className="ml-2">{label}</label>
    </div>
  )
}
