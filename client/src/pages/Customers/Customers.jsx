import plus from "../../assets/plus.png"
import CustomerTable from "./CustomersTable";
import Popup from "reactjs-popup";
import CustomerModal from "./Modals/AddCustomerModal";

export default function Customers() {
    return (
        <div className="list relative">
           
            <div className="relative">
                <div className="relative top-[200px] -left-[80px] font-neon">
                <CustomerTable/>
                
                <Popup modal trigger={<div className="bg-[#60a5fa] absolute flex gap-4 py-2 px-4 cursor-pointer text-sm rounded-xl text-white hover:bg-[#93c5fd] transition duration-300 top-0 right-0 -translate-y-16">Add Customers
                <img src={plus} alt="" className="w-5 h-5" />
                </div>
            }>
                {close => <CustomerModal close={close} />}
                </Popup>
         
            
      
                </div>
                
            </div>
        </div>
    )
}