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
import "./css/RoomsTypebg.css";
import "./css/Active.css";
// import "./css/active.css";

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
          open ? "w-64" : "w-20 "
        } bg-emerald-800 h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src={Arrowimg}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="inline-flex gap-x-2 justify-center">
          <img
            src={Logoimg}
            className={`cursor-pointer w-10 h-10 duration-500 ml-5 rounded-3xl    ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white text-5xl origin-left font-delafield text-[2rem] duration-200 mt-2 ${
              !open && "scale-0"
            }`}
          >
            AnhemHotel
          </h1>
        </div>

        <hr class="border-white my-4  "></hr>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer  hover:bg-gray-500 text-gray-300 text-sm items-center gap-x-4 
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
      <div className="h-screen flex-1 pt-8 pl-5">
        <h1 className="text-xl font-semibold uppercase ">{activeItem}</h1>
        <div id="render-item"></div>
      </div>
    </div>
  );
}
