import React, { useState, useEffect } from "react";
import axios from "axios";

export default function UpdateStatus({ ID, STATUS }) {
  const [status, setStatus] = useState(STATUS);
  const hotelstatus = ["Confirmed", "Pending", "Cancelled", "Checked In", "Checked Out"];

  useEffect(() => {
    updateStatus(ID);
  }, [status, ID]);

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

  console.log(status);

  return (
    <select
      className="w-[6rem] p-1 text-xs bg-[#10b981] text-white rounded-xl border-2"
      value={status}
      onChange={(e) => setStatus(e.target.value)}
    >
      {hotelstatus.map((value, key) => (
        <option value={value} key={key}>
          {value}
        </option>
      ))}
    </select>
  );
}
