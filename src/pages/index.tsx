import { useForm } from "react-hook-form";
import Input from "../ui/Input";
import { useState } from "react";
import React from "react";
import Button from "../ui/Button";
import Dropdown from "../ui/Dropdown";
import RadioButton from '../ui/RadioButton';
import CheckBox from "../ui/CheckBox";
import ToggleButton from "../ui/ToggleButton";
import SplitInput from "../ui/SplitInput";
import Modal from "../ui/Modal";

export default function Index() {
  //Form Validation
  const {handleSubmit,  control } = useForm();

  //Form Input
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleInputChange = (fieldName: string, value: any) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: value,
    }));
  };

  const onSubmit = ( data: any) => {
    console.log(data)
  };
  
  //Dropdown
  const options = ['Option 1', 'Option 2', 'Option 3'];

  // Radio
  const [selectedRadio, setSelectedRadio] = useState('');
   const handleRadioChange = (value: string) => {
    setSelectedRadio(value);
  };

//Checkbox
  const [isChecked, setIsChecked] = useState(true);
  const handleCheckboxChange = (checked: boolean) => {
    setIsChecked(checked);
  };

  //Toggle Button
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  //Split Input
  const [otpValue, setOtpValue] = useState('');
  const [otpError, setOtpError] = useState(true);

  const handleOtpChange = (newValue: string) => {
    setOtpValue(newValue);
  };

  //Modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  
  return (
<div className="flex items-center justify-center min-h-screen bg-gray-100">
  <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 ">
  <h1 className="font-bold mb-5 text-5xl md:text-6xl text-center">Reuseable Components</h1>

    <div className="p-3 ">
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-4xl"> Form</h1>
      <Input
      type="text" 
      label="Username" 
      size="medium"
      iconclick
      styletype="input" 
      placeholder="Username"
      control={control}
      name="username"
  validationRules={{
    required: 'Username is required',
    // maxLength: {
    //   value: 50,
    //   message: 'Username should not exceed 50 characters',
    // },
    // pattern: {
    //   value: /^\S+@\S+$/i,
    //   message: 'Invalid username format',
    // },
  }}
  value={formData.username}
        onChange={(value: any) => handleInputChange('username', value)}
    />

<Input 
      type="password" 
      label="Password" 
      size="medium" 
      styletype="input" 
      iconclick 
      placeholder="Password"
      name="password"
      control={control}
      validationRules={{
        required: 'Password is required',
        maxLength: {
          value: 50,
          message: 'Password should not exceed 50 characters',
        },
        minLength: {
          value: 6,
          message: 'Password should be at least 6 characters long',
        },
        pattern: {
          value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$!%*?&-_.#]+$/,
          message: 'Password must contain at least one uppercase letter, one lowercase letter, and one digit',
        },
      }}
      value={formData.password}
        onChange={(value: any) => handleInputChange('password', value)}
     />

      <div className="mt-4 flex justify-center items-center">
      <SplitInput length={6} value={otpValue} onChange={handleOtpChange} hasError={otpError} errorText="Invalid OTP"/>
      </div>

      <div className="flex flex-col gap-3 mt-3">
        <Button
                full
                showArrow={true}
                disabled={false}
                
                loading={false} round={false} size="medium"  type="pry">Log in</Button>
        <Button
                full
                disabled={false}
                loading={true} round={false} size="medium"  type="secondary">Create New</Button>
        <Button
                full
                disabled={true}
                loading={true} round={false} size="medium"  type="alternate">Awesome!</Button>
        </div>
      
        <Dropdown options={options} />

        <div className="flex  mt-6 justify-between items-center gap-3">
          <span className="flex gap-3">
            <RadioButton disabled={false}  label="Yes" value="option1" checked={selectedRadio === 'option1'} onChange={handleRadioChange}/>
            <RadioButton disabled={false} label="No" value="option2" checked={selectedRadio === 'option2'} onChange={handleRadioChange}/>
          </span>

          <span>
          <CheckBox disabled={false} label="Check me" checked={isChecked} onChange={handleCheckboxChange} />
          </span>

          <span>
          <ToggleButton
        isChecked={isActive}
        onText="On"
        offText="Off"
        onToggle={handleToggle}
      />
          </span>
        </div>
     </form>
    </div>

    <div className="mt-6">
    <h1 className="text-4xl"> Modal</h1>

    <button type="button" onClick={openModal} className="bg-black text-white p-3 rounded">Open Modal</button>

    {isModalOpen && (
        <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
          <h2>Modal Content</h2>
          <p>This is the content of the modal.</p>
          <button type="button" onClick={closeModal}>Close</button>
        </Modal>
      )}
    </div>
  </div>
</div>

  )
}
