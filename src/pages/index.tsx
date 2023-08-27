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
import SuccessModal from "../ui/SuccessModal";
import TableComponent from "../ui/Table";

const data = [
  {
    name: "Emmanuel Jackson",
    sex: "Female",
    dob: "29/08/2004",
    email: "emmanueljackson@gmail.com",
    phone: "09012345654",
    brm: "Samson CHibuke",
    Address: "13, Mc ewen street sabo, yaba",
    verif: {
      text: "Verified",
      // icon: VerifiedIcon,
    },
    active: true,
  },
  {
    name: "Emmanuel Jackson",
    sex: "Female",
    dob: "29/08/2004",
    email: "emmanueljackson@gmail.com",
    phone: "09012345654",
    brm: "Samson CHibuke",
    Address: "13, Mc ewen street sabo, yaba",
    verif: {
      text: "Verified",
      // icon: VerifiedIcon,
    },
    active: true,
  },
  {
    name: "Emmanuel Jackson",
    sex: "Female",
    dob: "29/08/2004",
    email: "emmanueljackson@gmail.com",
    phone: "09012345654",
    brm: "Samson CHibuke",
    Address: "13, Mc ewen street sabo, yaba",
    verif: {
      text: "Verified",
      // icon: VerifiedIcon,
    },
    active: true,
  },
  {
    name: "Emmanuel Jackson",
    sex: "Female",
    dob: "29/08/2004",
    email: "emmanueljackson@gmail.com",
    phone: "09012345654",
    brm: "Samson CHibuke",
    Address: "13, Mc ewen street sabo, yaba",
    verif: {
      text: "Verified",
      // icon: VerifiedIcon,
    },
    active: true,
  },
  {
    name: "Emmanuel Jackson",
    sex: "Female",
    dob: "29/08/2004",
    email: "emmanueljackson@gmail.com",
    phone: "09012345654",
    brm: "Samson CHibuke",
    Address: "13, Mc ewen street sabo, yaba",
    verif: {
      text: "Verified",
      // icon: VerifiedIcon,
    },
    active: true,
  },
  {
    name: "Emmanuel Jackson",
    sex: "Female",
    dob: "29/08/2004",
    email: "emmanueljackson@gmail.com",
    phone: "09012345654",
    brm: "Samson CHibuke",
    Address: "13, Mc ewen street sabo, yaba",
    verif: {
      text: "Verified",
      // icon: VerifiedIcon,
    },
    active: true,
  },

  // ... add more user data here
];


const columns = [
  {
    value: "name",
    text: "Name",
  },
  {
    value: "sex",
    text: "Sex",
  },
  {
    value: "dob",
    text: "Date of birth",
  },
  {
    value: "email",
    text: "Email",
  },
  {
    value: "phone",
    text: "Phone Number",
  },
  {
    value: "brm",
    text: "BRM Assigned",
    class: "min-w-[150px]",
  },
  {
    value: "Address",
    text: "Address",
    class: "min-w-[150px]",
  },
  // {
  //   value: "verif",
  //   text: "Verification",
  // },
  // {
  //   value: "active",
  //   text: "Status",
  // },
];

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
  const [isSuccessModal, setIsSuccessModal] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openSuccessModal = () => {
    setIsSuccessModal(true);
  };

  const closeSuccessModal = () => {
    setIsSuccessModal(false);
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
      
        
     </form>
    </div>

    <div>
      <div className="mt-4 flex justify-center items-center">
      <SplitInput length={6} value={otpValue} onChange={handleOtpChange} hasError={otpError} errorText="Invalid OTP"/>
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
    </div>

    <div className="mt-6">
    <h1 className="text-4xl"> Modal</h1>

      <div className="flex justify-between items-center">
        <button type="button" onClick={openModal} className="bg-black text-white p-3 rounded">Open Modal</button>
        <button type="button" onClick={openSuccessModal} className="bg-[#B99745] text-white p-3 rounded">Success Modal</button>
    </div>

    {isModalOpen && (
        <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
          <h2>Modal Content</h2>
          <p>This is the content of the modal.</p>
          <Button
            onClick={closeModal}
          disabled={false}
          showArrow={false}
          loading={false} round={false} size="medium"  type="alternate"
        >Close</Button>
        </Modal>
      )}

{isSuccessModal && (
        <Modal isOpen={isSuccessModal} onRequestClose={closeSuccessModal}>
          <div className=" flex flex-col gap-12 justify-center items-center  text-center">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="80" height="80" rx="40" fill="#F9F9F9"/>
      <path d="M64 37.8057V40.0137C63.997 45.1891 62.3212 50.2249 59.2224 54.3701C56.1236 58.5153 51.7679 61.5477 46.8048 63.0151C41.8418 64.4825 36.5374 64.3063 31.6827 62.5127C26.828 60.7192 22.6832 57.4044 19.8663 53.0627C17.0494 48.721 15.7115 43.5851 16.052 38.4209C16.3925 33.2567 18.3933 28.3409 21.7559 24.4067C25.1184 20.4725 29.6627 17.7307 34.7108 16.5901C39.759 15.4495 45.0406 15.9713 49.768 18.0777M64 20.8138L40 44.8378L32.8 37.6378" stroke="#B99745" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <div  className="max-w-[500px] truncate">
        <span className="flex flex-col gap-10 items-center ">
          <h1 className="text-3xl text-black font-bold">Request Approved</h1>
          <p className="text-[#858585] truncate whitespace-normal">
            You have successfully approved Oga Israel Transaction reversal request
          </p>
        </span>
        </div>
        <Button
            onClick={closeSuccessModal}
          disabled={false}
          showArrow={false}
          loading={false} round={false} size="medium"  type="alternate"
        >
          Okay 
        </Button>
      </div>
          
        </Modal>
      )}
    </div>

    <div className="mt-6 ">
      <h1 className="text-4xl">Table</h1>

      <div className="max-h-[calc(100vh-10px)] overflow-y-hidden overflow-x-auto">
        <TableComponent data={data} columns={columns} link={["link"]} itemsPerPage={5} loading={false} showCheckbox={true} />
      </div>
    </div>
  </div>
</div>

  )
}
