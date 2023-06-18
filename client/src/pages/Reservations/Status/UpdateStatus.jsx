import React, { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import axios from "axios";
import ChoosePayCus from "./ChoosePayCus/ChoosePayCus";

export default function UpdateStatus({ ID, STATUS, DEPARTURE, ROWDATA }) {
  const [status, setStatus] = useState(STATUS);
  const [openModal, setOpenModal] = useState(false);
  const hotelstatus = [
    "Confirmed",
    "Pending",
    "Cancelled",
    "Checked In",
    "Checked Out",
  ];
  const statusColors = {
    Confirmed: "bg-[#3d70b2]",
    Pending: "bg-[#FFB72B]",
    Cancelled: "bg-[#fe5f55]",
    "Checked In": "bg-blue-500",
    "Checked Out": "bg-[#cbac88]",
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
    if (data === "Confirmed") {
      setOpenModal(true);
    }
  };

  return (
    <div>
      <select
        className={`w-[5.5rem] p-1 text-xs ${optioncolor} text-white rounded-xl border-2`}
        value={status}
        onChange={(e) => (
          setStatus(e.target.value), handleChoosePayCus(e.target.value)
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
      />
    </div>
  );
}
