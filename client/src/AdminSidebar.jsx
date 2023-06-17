import { useState, useEffect } from "react";
import Arrowimg from "./assets/arrow-right.png";
import Dashboardimg from "./assets/dashboard.png";
import Reservationimg from "./assets/reservation.png";
import Roomimg from "./assets/room.png";
import Guestimg from "./assets/guest.png";
import Revenueimg from "./assets/revenue.png";
import Roomstypeimg from "./assets/roomstype.png";
import Receiptimg from "./assets/rentalreceipt.png";
import Staffsimg from "./assets/staffs.png";
import Logoimg from "./assets/logo.png";
import Dashboard from "./Dashboard";
import Reservations from "./Reservations";
<<<<<<< HEAD
import ReactDOM from "react-dom/client";
import "./css/RoomsTypebg.css";
import "./css/Active.css";
=======
import ReactDOM from 'react-dom/client';
import './css/RoomsTypebg.css'
// import './css/active.css'
>>>>>>> 24690122197a06ddd095d5ecd06c9395ce89feb0

export default function AdminSidebar({ onClick }) {
  // const temp = ReactDOM.createRoot(document.getElementById('render-item'))
  const [activeItem, setActiveItem] = useState(
    localStorage.getItem("activeItem") || "dashboard"
  );
  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
    localStorage.setItem("activeItem", itemName);
  };
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: Dashboardimg, component: "dashboard" },
    { title: "Reservations", src: Reservationimg, component: "reservations" },
    { title: "Rooms", src: Roomimg, gap: true, component: "rooms" },
    { title: "Rental Receipt", src: Receiptimg, component: "rentalreceipt" },
    { title: "Customers ", src: Guestimg, component: "customers" },
    { title: "Staffs", src: Staffsimg, component: "staffs" },
    { title: "Revenue", src: Revenueimg, gap: true, component: "revenue" },
    { title: "Rooms Type", src: Roomstypeimg, component: "roomstype" },
  ];

  useEffect(() => {
    const active = localStorage.getItem("activeItem");
    if (active) {
      setActiveItem(active);
    }
  }, []);

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-emerald-800 h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src={Arrowimg}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 justify-center items-center">
          <h1
            className={`text-white text-5xl origin-left font-delafield text-[2rem] duration-200 ${
              !open && "scale-0"
            }`}
          >
            Miles
          </h1>
        </div>
        <p
          className={`flex justify-center text-gray-200 font-thin duration-200 ${
            !open && "scale-0"
          }`}
        >
          Welcome back!
        </p>
        <hr class="border-white my-6"></hr>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
<<<<<<< HEAD
              className={`flex  rounded-md p-2 cursor-pointer  hover:bg-gray-500 text-gray-300 text-sm items-center gap-x-4 
=======
              className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white hover:bg-blue-300 text-gray-300 text-sm items-center gap-x-4 
>>>>>>> 24690122197a06ddd095d5ecd06c9395ce89feb0
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } ${activeItem === `${Menu.component}` ? "active" : ""}`}
              onClick={() => {
                handleItemClick(`${Menu.component}`);
                onClick(`${Menu.component}`);
              }}
            >
              <img src={Menu.src} className="w-6 h-6" />
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 text-gray-200`}
              >
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-14">
        <div id="render-item"></div>
      </div>
    </div>
  );
}
