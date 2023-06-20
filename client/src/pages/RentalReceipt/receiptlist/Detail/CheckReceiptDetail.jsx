import "../../../../css/localpopup.css"
import "../../../../css/localpopupbasic.css"
import { useState, useMemo, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import CheckReceiptDetailTable from "./CheckReceiptDetailTable";


export default function CheckReceiptDetail({ close, ID, PAYCUS, ROWDATA }) {
    
    const handleSubmit = (e) => {
        e.prevenDefault();
    }
    

    return (
        <div className="pl-24">
            <div className="translate-x-[35rem] text-2xl">
                <a className="close cursor-pointer" onClick={close}>
                    &times;
                </a>
                <div className="translate-x-[-23rem] font-neon translate-y-[-2rem] absolute">History</div>
            </div>
            <form onSubmit={handleSubmit} className="grid grid-rows-3 grid-flow-col gap-x-2 gap-y-1 h-[14rem] -translate-x-16">
               
            <CheckReceiptDetailTable ROWDATA={ROWDATA}/>
                <div className="translate-y-16 translate-x-[-1rem]">
                
                    {/* <button className="right-0 bottom-0 absolute bg-[#374151] text-white p-2 rounded-lg cursor-pointer w-[8rem]" type="submit" 
                    // onClick={() => {updateRoomsType(ID)}}
                    >Save Changes</button> */}
                </div>
            </form>
        </div>
    )
}