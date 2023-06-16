import ReservationsTable from "./ReservationsTable"
import plus from "../../assets/plus.png"
import AddReservations from "./Modals/AddReservations"
import Popup from "reactjs-popup";
import '../../css/RoomsTypebg.css'
import { useState } from "react";
import ChooseCustomer from "./Modals/PickDataModals/ChooseCustomer";
import ChooseRoom from "./Modals/PickDataModals/ChooseRoom";


export default function Reservations() {
    const [modal1IsOpen, setModal1IsOpen] = useState(false);
    const [modal2IsOpen, setModal2IsOpen] = useState(false);
    const [modal3IsOpen, setModal3IsOpen] = useState(false);

    const handleOpenModal1 = () => {
        setModal1IsOpen(true);
    };

    const handleCloseModal1 = () => {
        setModal1IsOpen(false);
    };

    const handleOpenModal2 = () => {
        setModal2IsOpen(true);
        setModal1IsOpen(false);
    };

    const handleCloseModal2 = () => {
        setModal2IsOpen(false);
        setModal1IsOpen(true);
    };

    const handleOpenModal3 = () => {
        setModal3IsOpen(true);
        setModal1IsOpen(false);
    }

    const handleCloseModal3 = () => {
        setModal3IsOpen(false);
        setModal1IsOpen(true);
    }

    const handleSaveChanges = () => {
        // Handle saving changes here
        console.log('Changes saved!');
    };

    // let cusdata = JSON.stringify(fakedata[0])
    // localStorage.setItem('CustomerPickData', cusdata)
    // let CusData = JSON.parse(localStorage.getItem('CustomerPickData'))


    return (
        <div className="list relative bg-cover bg-dunes bg-no-repeat w-full h-full">

            <div>

                <AddReservations isOpen={modal1IsOpen} onClose={handleCloseModal1} onOpenModal2={handleOpenModal2} onOpenModal3={handleOpenModal3} refresh/>
                <ChooseCustomer isOpen={modal2IsOpen} onClose={handleCloseModal2} onSaveChanges={handleSaveChanges}  />
                <ChooseRoom isOpen={modal3IsOpen} onClose={handleCloseModal3} onSaveChanges={handleSaveChanges}/>
            </div>

            <div className="relative">
                <div className="relative top-[200px] -left-[80px] font-neon">
                    <ReservationsTable refresh={modal1IsOpen}/>
                    <button onClick={handleOpenModal1} className="bg-[#60a5fa] absolute flex gap-4 py-2 px-4  text-sm rounded-xl text-white hover:bg-[#93c5fd] transition -translate-y-16 duration-300 top-0 right-0 cursor-pointer">
                        Add Reservations
                        <img src={plus} alt="" className="w-5 h-5" /></button>
                </div>
            </div>
        </div>
    )

}