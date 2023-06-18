import plus from "../../assets/plus.png";
import CustomerTable from "./CustomersTable";
import Popup from "reactjs-popup";
import CustomerModal from "./Modals/AddCustomerModal";

export default function Customers() {
  return (
    <div className="list relative">
      <div className="relative">
        <div className="relative top-[200px] -left-[80px] font-neon">
          <CustomerTable />

          <Popup
            modal
            trigger={
              <div className="bg-emerald-600 absolute flex gap-4 py-2 px-4 cursor-pointer text-sm rounded-lg mt-5 text-white hover:shadow-lg transition duration-300 top-0 right-0 -translate-y-16">
                Add Customers +
              </div>
            }
          >
            {(close) => <CustomerModal close={close} />}
          </Popup>
        </div>
      </div>
    </div>
  );
}
