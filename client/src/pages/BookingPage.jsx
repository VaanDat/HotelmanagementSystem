import Header from "../Header";
import { useState } from "react";
import { useEffect } from "react";
import RoomsData from "../data/RoomsData";
import CustomerForm from "../CustomerForm";
import { useParams} from "react-router-dom";
import DatePicker from "react-datepicker";

export default function BookingPage(){
    const { id } = useParams();
    
    const [roomData, setRoomData] = useState({});
    const room = RoomsData.filter(data => data.id == id)
    useEffect(() => {
        
        setRoomData(...room);
    }, [id])
    console.log(roomData);
    return (
        <div className="bg-[#daf1f2]">
            <Header/>
            <div className="flex justify-center mt-4">
            <div className="absolute font-delafield text-[4rem] top-[140px] left-10">
                {roomData.title}
                <img className="rounded-2xl w-[420px]" src={roomData.img} alt="" />
            </div>
            <div className="">
        
            <CustomerForm/>
        
            </div>        
            </div>
           
          
        </div>
    )
}