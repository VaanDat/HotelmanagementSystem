import plus from "./assets/plus.png"
// import "./css/HandleList.css"
import React from "react";
import ReservationTable from "./ReservationTable";
import { useState } from "react";


export default function Reservations() {
    return (

    <div className="relative">
        <div className="relative top-[200px] -left-[80px] font-neon">
        <ReservationTable/>
        </div>
    </div>
    )
}