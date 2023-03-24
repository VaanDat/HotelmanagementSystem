import AdminSidebar from "../AdminSidebar";
import Userbar from "../Userbar";
import Dashboard from "../Dashboard";
import Reservations from "../Reservations";
import Rooms from "../Rooms";
import { useState } from "react";
import RentalReceipt from "../RentalReceipt";
import Customers from "../Customers";
import Staffs from "../Staffs";
import Revenue from "../Revenue";
import RoomsType from "../RoomsType";

export default function AdminPage() {
    const [activeComponent, setActiveComponent] = useState('Dashboard');
    const handleSidebarClick = (componentName) => {
        setActiveComponent(componentName);
    };

    return (
        <div className="flex admin-page bg-[#f3f4f6]">
            <AdminSidebar onClick={handleSidebarClick} />
            <div className="main-content">
            
                {activeComponent === 'Dashboard' && <Dashboard/>}
                {activeComponent === 'Reservations' && <Reservations/>}
                {activeComponent === 'Rooms' && <Rooms/>}
                {activeComponent === 'RentalReceipt' && <RentalReceipt/>}
                {activeComponent === 'Customers' && <Customers/>}
                {activeComponent === 'Staffs' && <Staffs/>}
                {activeComponent === 'Revenue' && <Revenue/>}
                {activeComponent === 'RoomsType' && <RoomsType/>}
            </div>
            <Userbar />


            {/* x component */}
        </div>
    )
}