import "../../../../css/localpopup.css"
import "../../../../css/localpopupbasic.css"
import { useState, useMemo, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import CheckDetailTable from "./CheckDetailTable";


export default function CheckDetail({ close, ID, PAYCUS }) {
    
    

    


    const handleSubmit = (e) => {
        e.prevenDefault();
    }


    return (
        <div className="pl-24">
            <div className="translate-x-[38rem] text-2xl">
                <a className="close cursor-pointer" onClick={close}>
                    &times;
                </a>
            </div>
            <form onSubmit={handleSubmit} className="grid grid-rows-3 grid-flow-col gap-x-2 gap-y-1 h-[14rem] -translate-x-16">
               
            <CheckDetailTable ID={ID} PAYCUS={PAYCUS}/>
                <div className="translate-y-16 translate-x-[-1rem]">
                
                    {/* <button className="right-0 bottom-0 absolute bg-[#374151] text-white p-2 rounded-lg cursor-pointer w-[8rem]" type="submit" 
                    // onClick={() => {updateRoomsType(ID)}}
                    >Save Changes</button> */}
                </div>
            </form>
        </div>
    )
}