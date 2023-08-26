import React, { useState } from 'react'

interface Dropdown {
    options: string[];
  }
  

export default function Dropdown({options}) {

    const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };
  return (
    <div className="relative mt-3 text-left">
      <div>
        <span className="rounded-md shadow-sm">
          <button
            type="button"
            className="inline-flex justify-between w-full rounded-lg border border-[#ACB5BD] py-5 px-4 bg-white text-3xl leading-5 font-medium text-black hover:text-black  focus:border-[#B99745] focus:ring-1 focus:ring-[#B99745]   transition ease-in-out duration-150"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            aria-haspopup="true"
            aria-expanded={isDropdownOpen}
          >
            {selectedOption || 'Select an option'}
            <svg
              className="-mr-1 ml-2 text-[#B99745] h-12 w-12"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </span>
      </div>

      {isDropdownOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {options.map((option, index) => (
              <button
                key={index}
                className="block w-full cursor-pointer px-4 py-5 text-3xl leading-5 text-gray-700 hover:bg-[#B99745] hover:text-white focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                role="menuitem"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
