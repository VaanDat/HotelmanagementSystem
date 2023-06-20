import React, { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import axios from "axios";


export default function UpdateReceiptStatus({ ID, STATUS, DEPARTURE, ROWDATA }) {
  const [status, setStatus] = useState(STATUS);
  const [openModal, setOpenModal] = useState(false);
  const hotelstatus = ["Paid", "Pending", "Refunded"];
  const statusColors = {
    "Paid": "bg-green-500",
    "Pending": "bg-[#cbac88]", 
    "Refunded": "bg-[#fe5f55]",
  };
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
    } catch (error) {
      console.log(error);
    }
  };
 
  const handleChoosePayCus = (data) => {
    if (data === "Confirmed"){
      setOpenModal(true);
   }
  }

  return (
 <div>
     <select
       className={`w-[5.5rem] p-1 text-xs ${optioncolor} text-white rounded-xl border-2`}
       value={status}
       onChange={(e) => (setStatus(e.target.value), handleChoosePayCus(e.target.value))}
     >
       {hotelstatus.map((value, key) => (
         <option value={value} key={key}>
           {value}
         </option>
       ))}
     </select>
 </div>
  );
}
