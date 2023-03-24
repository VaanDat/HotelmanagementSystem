import { useState } from "react";
import Arrowimg from "./assets/arrow-right.png"
import Dashboardimg from "./assets/dashboard.png"
import Reservationimg from "./assets/reservation.png"
import Roomimg from "./assets/room.png"
import Guestimg from "./assets/guest.png"
import Revenueimg from "./assets/revenue.png"
import Roomstypeimg from "./assets/roomstype.png"
import Receiptimg from "./assets/rentalreceipt.png"
import Staffsimg from "./assets/staffs.png"
import Logoimg from "./assets/logo.png"
import Dashboard from "./Dashboard";
import Reservations from "./Reservations";
import ReactDOM from 'react-dom/client';

export default function AdminSidebar({onClick}) {
  // const temp = ReactDOM.createRoot(document.getElementById('render-item'))
  const [activeItem, setActiveItem] = useState('Dashboard');
  const handleItemClick = (itemName) => {
      setActiveItem(itemName);
  
    };
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: Dashboardimg, component: "Dashboard",},
    { title: "Reservations", src: Reservationimg, component: "Reservations",},
    { title: "Rooms", src: Roomimg, gap: true, component: "Rooms" },
    { title: "Rental Receipt", src: Receiptimg, component: "RentalReceipt" },
    { title: "Customers ", src: Guestimg, component: "Customers"  },
    { title: "Staffs", src: Staffsimg, component: "Staffs" },
    { title: "Revenue", src: Revenueimg, gap: true, component: "Revenue" },
    { title: "Rooms Type", src: Roomstypeimg, component: "RoomsType" },
  ];
 
  return (
   
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-blue-400 h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src={Arrowimg}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={Logoimg}
            className={`cursor-pointer w-8 h-8 duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-delafield text-[2rem] duration-200 ${
              !open && "scale-0"
            }`}
          >
           Relax
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white hover:bg-blue-300 text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } ${activeItem === `${Menu.component}` ? 'active' : ''}`} onClick={() =>{ 
                handleItemClick(`${Menu.component}` ) 
                onClick(`${Menu.component}`)
            }}
         
              
            >
              <img src={Menu.src} className="w-6 h-6"/>
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold ">Home Page</h1>
        <div id='render-item'>

        </div>
      </div>
    </div>
  );
};
