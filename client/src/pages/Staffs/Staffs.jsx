import AddStaffModal from "./Modals/AddStaffModal";
import StaffsTable from "./StaffsTable";
import Popup from "reactjs-popup";

export default function Staffs() {
  return (
    <div className="list relative">
      <div className="relative">
        <div className="relative top-[150px] -left-[50px] font-neon">
          <StaffsTable />
          <Popup
            modal
            trigger={
              <div className="bg-emerald-600 absolute mt-5 flex gap-4 py-2 px-4  text-sm rounded-md text-white hover:shadow-lg transition duration-300 top-0 right-0 -translate-y-16 cursor-pointer">
                Add Staff +
              </div>
            }
          >
            {(close) => <AddStaffModal close={close} />}
          </Popup>
        </div>
      </div>
    </div>
  );
}
