import plus from "./assets/plus.png"
import "./css/HandleList.css"

export default function Rooms(){
    return(
        <div className="list">
            <button className="bg-[#60a5fa] flex gap-4 py-2 px-4 text-sm rounded-xl text-white hover:bg-[#93c5fd] transition duration-300 relative top-[100px] left-[740px]">
                Add Room
              <img src={plus} alt="" className="w-5 h-5" />

            </button>
         
             <ul className="flex gap-[8rem] -ml-[100px] relative top-[120px] w-[1020px] font-neon bg-[#e5e7eb] py-2 px-4 rounded-2xl">
            <ul>Room number
                <li>
                    1
                </li>
                <li>
                    1
                </li>
            </ul>
            <ul>Room type
                <li>
                    Mai Anh Tuấn
                </li>
            </ul>
            <ul>In room (persons)</ul>
            <ul>Price</ul>
            <ul>Status</ul>
            <ul>Action</ul>
        </ul>
        </div>
    )
}