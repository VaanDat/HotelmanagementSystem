import AdminSidebar from "../AdminSidebar";
import Userbar from "../Userbar";
import Dashboard from "../Dashboard";
import Reservations from "./Reservations/Reservations";
import Rooms from "./Rooms/Rooms";
import { useState, useEffect } from "react";
import RentalReceipt from "./RentalReceipt/RentalReceipt";
import Customers from "./Customers/Customers";
import Staffs from "../Staffs";
import Revenue from "./Revenue/Revenue";
import RoomsType from "./RoomsType/RoomsType";
import { useNavigate, useLocation } from "react-router-dom";
import '../css/RoomsTypebg.css'
import ErrorBoundary from "../ErrorBoundary";
// import RoomshaveReservations from "./Reservations/RoomshaveReservations/RoomshaveReservations"


export default function AdminPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeComponent, setActiveComponent] = useState(null);
    const handleSidebarClick = (componentName) => {
        setActiveComponent(componentName);
        console.log(componentName)
        navigate(`/admin/${componentName.toLowerCase()}`);
    };

    useEffect(() => {
        const path = location.pathname.split('/');
        if (path[1] === 'admin') {
          setActiveComponent(path[2]);
        }
      }, [location.pathname]);

    return (
        <div className="flex admin-page bg-[#f3f4f6] bg-cover bg-dunes bg-no-repeat w-full h-full">
            <AdminSidebar
            onClick={handleSidebarClick}
            />
            <div className="main-content">

                {activeComponent === 'dashboard' && <Dashboard />}
                {activeComponent === 'reservations' && 
          
                <Reservations/>
            
                }
                {activeComponent === 'rooms' && <Rooms />}
                {activeComponent === 'rentalreceipt' && <RentalReceipt /> }
                {activeComponent === 'customers' && <Customers />}
                {activeComponent === 'staffs' && <Staffs />}
                {activeComponent === 'revenue' && <Revenue />}
                {activeComponent === 'roomstype' && <RoomsType />}
             
            </div>
            <Userbar />


            {/* x component */}
        </div>
    )
}