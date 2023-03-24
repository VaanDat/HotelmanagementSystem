import BookingPage from "./pages/BookingPage"
import { Link, useParams } from "react-router-dom"
import { Params } from "react-router-dom"
import { useNavigate } from "react-router-dom";

export default function RoomIntro(props){
    const params = useParams();
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate(`/roomdetail/${params.id}/bookingpage`);
    }
    return(
        <div className="flex place-content-center py-10 gap-x-10 bg-[#d2eae7]">
                <img className="w-[32rem] h-[25rem] rounded-2xl" src={props.images} alt="" />
                <div className="">
                    <div className="">
                    <p className="font-delafield text-9xl">Miles</p>
                    <p className="font-baby text-4xl">{props.title}</p>
                    </div>
                    <div className="">
                    <p className="w-[30rem] font-mont mt-1">
                        {props.intro}
                    </p>
                    </div>
                    <div className="mt-4 text-lg">
                        <div>
                        <span>CHECK IN:</span> <span>from 16 PM</span>
                        </div>
                        <div>
                        <span>CHECK OUT:</span> <span>to 11 AM</span>
                        </div>
                    </div>
                        <button onClick={handleButtonClick} className="py-2 px-4 border-white border-2 rounded-2xl text-white mt-4 text-2xl hover:bg-[#f8c49a] transition duration-300">
                        Book this
                        </button>
                 
                </div>
                
         
        </div>
    )
}