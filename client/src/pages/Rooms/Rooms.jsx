import plus from "../../assets/plus.png";
import AddRoomModal from "./Modals/AddRoomModal";
import RoomsTable from "./RoomsTable.";
import Popup from "reactjs-popup";

export default function Rooms() {
  return (
    <div className="list relative">
      <div className="relative">
        <div className="relative top-[150px] -left-[50px] font-neon">
          <RoomsTable />
          <Popup
            modal
            trigger={
              <div className="bg-emerald-600 absolute mt-5 flex gap-4 py-2 px-4  text-sm rounded-md text-white hover:shadow-lg transition duration-300 top-0 right-0 -translate-y-16 cursor-pointer">
                Add Room +
              </div>
            }
          >
            {(close) => <AddRoomModal close={close} />}
          </Popup>
        </div>
      </div>
    </div>
  );
}
