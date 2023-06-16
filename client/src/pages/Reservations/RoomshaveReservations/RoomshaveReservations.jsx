// import plus from "../../../assets/plus.png"
// import AddRoomModal from "./Modals/AddRoomModal"
import RoomsTable from "./RoomshaveReservationsTable."
import Popup from "reactjs-popup";

export default function RoomshaveReservations() {
    return (
        <div className="list relative">
           
            <div className="relative">
                <div className="relative top-[200px] -left-[80px] font-neon">
                <RoomsTable/>
                {/* <Popup modal trigger={<div className="bg-[#60a5fa] absolute flex gap-4 py-2 px-4  text-sm rounded-xl text-white hover:bg-[#93c5fd] transition duration-300 top-0 right-0 -translate-y-16 cursor-pointer">Add Room
                <img src={plus} alt="" className="w-5 h-5" /></div>}>
                {close => <AddRoomModal close={close} />}
                </Popup> */}
        

       
                </div>
                
            </div>
        </div>
    )
}