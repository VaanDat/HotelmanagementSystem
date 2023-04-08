import AdminSidebar from "../AdminSidebar";
import Userbar from "../Userbar";
import Dashboard from "../Dashboard";
import Reservations from "../Reservations";
import Rooms from "./Rooms/Rooms";
import { useState, useEffect } from "react";
import RentalReceipt from "./RentalReceipt/RentailReceipt";
import Customers from "./Customers/Customers";
import Staffs from "../Staffs";
import Revenue from "../Revenue";
import RoomsType from "../RoomsType";
import { useNavigate } from "react-router-dom";

export default function AdminPage() {
    const navigate = useNavigate();
    const [activeComponent, setActiveComponent] = useState('Dashboard');
    const handleSidebarClick = (componentName) => {
        setActiveComponent(componentName);
        navigate(`/admin/${componentName.toLowerCase()}`);
    };

    return (
        <div className="flex admin-page bg-[#f3f4f6]">
            <AdminSidebar onClick={handleSidebarClick} />
            <div className="main-content">

                {activeComponent === 'Dashboard' && <Dashboard />}
                {activeComponent === 'Reservations' && <Reservations />}
                {activeComponent === 'Rooms' && <Rooms />}
                {activeComponent === 'RentalReceipt' && <RentalReceipt />}
                {activeComponent === 'Customers' && <Customers />}
                {activeComponent === 'Staffs' && <Staffs />}
                {activeComponent === 'Revenue' && <Revenue />}
                {activeComponent === 'RoomsType' && <RoomsType />}
            </div>
            <Userbar />


            {/* x component */}
        </div>
    )
}