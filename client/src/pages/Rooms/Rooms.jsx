import plus from "../../assets/plus.png"
import AddRoomModal from "./Modals/AddRoomModal"
import RoomsTable from "./RoomsTable."
import Popup from "reactjs-popup";

export default function Rooms() {
    return (
        <div className="list relative">
           
            <div className="relative">
                <div className="relative top-[200px] -left-[80px] font-neon">
                <RoomsTable/>
                <button className="bg-[#60a5fa] absolute flex gap-4 py-2 px-4  text-sm rounded-xl text-white hover:bg-[#93c5fd] transition duration-300 top-0 right-0 -translate-y-16">
                <Popup modal trigger={<button>Add Room</button>}>
                {close => <AddRoomModal close={close} />}
                </Popup>
                <img src={plus} alt="" className="w-5 h-5" />

            </button>
                </div>
                
            </div>
        </div>
    )
}