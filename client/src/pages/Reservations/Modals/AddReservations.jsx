import { useState, useMemo } from "react";
import "react-datepicker/dist/react-datepicker.css";
import '../../../css/AddReservation.css'

import Modal from 'react-modal';

Modal.setAppElement('#root');


export default function AddReservations({ isOpen, onClose, onOpenModal2 }) {
  const handleCloseModal = () => {
    localStorage.removeItem('CustomerPickData')
    onClose();
  };

  const handleOpenModal2 = () => {
    onOpenModal2();
  };

  const customStyles = {
    content: {
      backgroundColor: 'white', // set the background color to transparent
      boxShadow: 'none', // remove the shadow effect
      width: '80rem', // set a custom width
      height: '33rem', // set a custom height
      top: '50%', // position the modal vertically in the middle
      left: '50%', // position the modal horizontally in the middle
      transform: 'translate(-50%, -50%)', // center the modal
      borderRadius: '1rem'

    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.1)', // set the background color of the overlay
    },
  };
  
  let customer = JSON.parse(localStorage.getItem('CustomerPickData'))

  return (
    <Modal isOpen={isOpen} onRequestClose={handleCloseModal} style={customStyles}>
      <div onClick={handleCloseModal}>close</div>
  
      <h2>Modal 1 title</h2>
      <div className="grid grid-rows-2 grid-flow-col gap-x-4 gap-y-4">
        <div className="bg-blue-500 grid grid-rows-2 grid-flow-col gap-y-[2rem] py-[30px] px-[10px] rounded-xl -mt-5">
          <div className="ml-8 flex">
    
            <label htmlFor="registration" className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
              {customer === null ? 'customer name' : `${customer.FULL_NAME}`}
              </label>
            <div onClick={handleOpenModal2} className="translate-x-[18rem] cursor-pointer">Choose Customer</div>
          </div>
          <div className="grid grid-flow-col grid-rows-2 gap-y-2">
            <div className="ml-8 flex">
              <label htmlFor="gender" className="mb-2 mt-1 text-sm font-medium text-gray-900 dark:text-white">From</label>

            </div>
            <div className="ml-8 flex">
              <label htmlFor="phone" className="mb-2 mt-1 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>

            </div>
            <div className="ml-8 flex">
              <label htmlFor="birthday" className="mb-2 mt-1 text-sm font-medium text-gray-900 dark:text-white">Identity</label>

            </div>
            <div className="ml-8 flex">
              <label htmlFor="address" className="mb-2 mt-1 text-sm font-medium text-gray-900 dark:text-white">Address</label>

            </div>
          </div >
        </div>
        <div className="bg-cyan-600 grid grid-rows-2 grid-flow-col gap-y-[5.5rem] py-[30px] px-[10px] rounded-xl">
          <div className="ml-8">
            <label htmlFor="registration" className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Registration Date</label>

          </div>
          <div className="grid grid-flow-col grid-rows-1">
            <div className="ml-8 flex">
              <label htmlFor="arrival" className="mb-2 mt-1 text-sm font-medium text-gray-900 dark:text-white">Arrival</label>

            </div>
            <div className="ml-8 flex">
              <label htmlFor="arrival" className="mb-2 mt-1 text-sm font-medium text-gray-900 dark:text-white">Departure</label>

            </div>
          </div >
        </div>
        <div className="roombg grid grid-rows-2 grid-flow-col gap-y-[5.5rem] py-[30px] px-[10px] rounded-xl -mt-5">
          <div className="grid grid-rows-1 grid-flow-col">
            <div className="ml-8 flex">
              <label htmlFor="room" className="mb-2 mt-1 text-sm font-medium text-gray-900 dark:text-white">Room</label>

            </div>
            <div className="ml-8 flex">
              <label htmlFor="roomtype" className="mb-2 mt-1 text-sm font-medium text-gray-900 dark:text-white">Room Type</label>

            </div>
          </div >
          <div className="ml-8">
            <label htmlFor="description" className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>

          </div>
        </div>
      </div>
     
    </Modal>

  );
}



// const [startDate, setStartDate] = useState(new Date());
// const [value, setValue] = useState('')
// const options = useMemo(() => countryList().getData(), [])

// const [CUSTOMER, setCustomer] = useState('')
// const [CUSTYPE, setCustype] = useState('')
// const [REGISTRATION, setRegis] = useState('')
// const [ARRIVAL, setArrival] = useState('')
// const [IDENTITY, setIdentity] = useState('')
// const [ADDRESS, setAddress] = useState('')
// const [DEPARTURE, setDeparture] = useState('')

// const [isOpenTest, setIsOpenTest] = useState(false);

// const toggleTest = () => {
//     setIsOpenTest(!isOpenTest);
// };

// const addReservation = () => {
//     axios.post('http://localhost:5000/createreservation', {
//         customer: CUSTOMER,
//         custype: CUSTYPE,
//         registration: REGISTRATION,
//         arrival: ARRIVAL,
//         identity: IDENTITY,
//         address: ADDRESS,
//         departure: DEPARTURE,
//     }).then(() => {
//         console.log("thanh cong")
//     })
// }




