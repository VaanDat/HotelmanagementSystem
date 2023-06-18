import React, { useState, useEffect } from "react";
import axios from "axios";
import ChoosePayCus from "./ChoosePayCus/ChoosePayCus";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function UpdateStatus({ ID, STATUS, DEPARTURE, ROWDATA }) {
  const [status, setStatus] = useState(STATUS);
  const [openModal, setOpenModal] = useState(false);
  const [realtimestatus, setrealtimestatus] = useState('')
  const [isPayCusPicked, setIsPayCusPicked] = useState(false)
  
  const hotelstatus = [
    "Pending",
    "Confirmed",
    "Checked In",
    "Checked Out",
    "Cancelled",
  ];
  const statusColors = {
    "Confirmed": "bg-[#3d70b2]",
    "Pending": "bg-[#FFB72B]",
    "Cancelled": "bg-[#fe5f55]",
    "Checked In": "bg-blue-500",
    "Checked Out": "bg-[#3d70b2]",
  };

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("userAuth"))
    let userid = user.ID;
    let rid = ID
    const getReservationsStatus = async () => {
      // let temp = axios.get('http://localhost:5000/customers')
      const response = await fetch(`http://localhost:5000/reservationstatus?userid=${userid}&rid=${rid}`);
      const jsonData = await response.json(); 
      setStatus(jsonData);
    }
    getReservationsStatus()
  },[])

  const [optioncolor, setOptionColor] = useState(statusColors[STATUS]);

  useEffect(() => {
    updateStatus(ID);
    setOptionColor(statusColors[status]);
  }, [status, ID]);

  const handleCloseModal1 = () => {
    setOpenModal(false);
  };

  const updateStatus = async (ID) => {
    try {
      await axios.put("http://localhost:5000/updatestatus", {
        id: ID,
        status: status,
      });
      console.log("Status updated successfully!");
      if (realtimestatus === "Cancelled"){
        toast.success('1 reservation and receipt removed!', {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeButton: false, // Disable the close button
          draggable: false, // Disable dragging
          pauseOnHover: false,
          closeOnClick: false,
          pauseOnFocusLoss: false,
          });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const useToast = () => {
    toast.success('1 reservation and receipt removed!', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeButton: false, // Disable the close button
      draggable: false, // Disable dragging
      pauseOnHover: false,
      closeOnClick: false,
      pauseOnFocusLoss: false,
      })
  }


  const customId = "custom-id-yes";

  console.log(realtimestatus)

  const statushandle = (data) => {
    if (data === "Confirmed") {
      setOpenModal(true);
    }
    if (data === "Cancelled") {
      deleteReceipt();
    }
  }

  const deleteReceipt = () => {
    const id = ROWDATA.ID
    axios.delete(`http://localhost:5000/deleterentalreceipt/${id}`)
  }

  const handlepaycuspick = (data) => {
    if (data < 2){
      setIsPayCusPicked(true)
    }
    else setIsPayCusPicked(false)
  }

  const handlestatus = (data) => {
    setStatus(data)
  }

  console.log(isPayCusPicked)

  return (
    <div>
    <ToastContainer/>
      <select 
        className={`w-[5.5rem] p-1 text-xs ${optioncolor} text-white rounded-xl border-2`}
        value={status}
        onChange={(e) => (
          setStatus(e.target.value), statushandle(e.target.value), setrealtimestatus(e.target.value)
        )}
      >
        {hotelstatus.map((value, key) => (
          <option value={value} key={key}>
            {value}
          </option>
        ))}
      </select>
      <ChoosePayCus
        ID={ID}
        isOpen={openModal}
        onClose={handleCloseModal1}
        ROWDATA={ROWDATA}
        deliverstatus={handlestatus}
        statedeliver={handlepaycuspick}
      />
    </div>
  );
}
