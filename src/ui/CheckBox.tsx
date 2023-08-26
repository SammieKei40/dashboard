import React from 'react'

interface CheckBox {
    label: string;
    checked: boolean;
    disabled: boolean
    onChange: (checked: boolean) => void;
  }

export default function CheckBox({ label, checked, onChange, disabled }) {

    const handleChange = (event) => {
        onChange(event.target.checked);
      };

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        disabled={disabled}
        className="h-12 cursor-pointer w-12 accent-[#B99745]  focus:accent-[#B99745]"
        checked={checked}
        onChange={handleChange}
      />
      <label className="ml-2">{label}</label>
    </div>
  )
}
