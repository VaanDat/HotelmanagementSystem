import ReservationsTable from "./ReservationsTable";
import plus from "../../assets/plus.png";
import AddReservations from "./Modals/AddReservations";
import Popup from "reactjs-popup";
import "../../css/RoomsTypebg.css";
import { useState } from "react";
import ChooseCustomer from "./Modals/PickDataModals/ChooseCustomer";
import ChooseRoom from "./Modals/PickDataModals/ChooseRoom";
import CancelledReservationsTable from "./CancelledReservationsTable";
import PendingReservationsTable from "./PendingReservations/PendingReservationsTable";

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
  };

  const handleCloseModal3 = () => {
    setModal3IsOpen(false);
    setModal1IsOpen(true);
  };

  const handleSaveChanges = () => {
    // Handle saving changes here
    console.log("Changes saved!");
  };

  const [stateOpening, setStateOpening] = useState("Pending");

const handleOpenConfirmedReservation = () => {
  setStateOpening("Confirmed");
};

const handleOpenCancelledReservation = () => {
  setStateOpening("Cancelled");
};

const handleOpenPendingReservation = () => {
  setStateOpening("Pending");
};

return (
  <div className="list relative bg-cover bg-dunes bg-no-repeat w-full h-full">
    {/* Rest of your code */}
    <div className="relative">
      <button
        onClick={handleOpenPendingReservation}
        className="bg-emerald-600 absolute flex gap-4 mt-5 py-2 px-4  text-sm rounded-md text-white hover:shadow-lg transition translate-x-[10rem] translate-y-[90px] duration-300 cursor-pointer"
      >
        Pending
      </button>
      <button
        onClick={handleOpenConfirmedReservation}
        className="bg-emerald-600 absolute flex gap-4 mt-5 py-2 px-4  text-sm rounded-md text-white hover:shadow-lg transition translate-x-[18rem] translate-y-[90px] duration-300 cursor-pointer"
      >
        Confirmed
      </button>
      <button
        onClick={handleOpenCancelledReservation}
        className="bg-emerald-600 absolute flex gap-4 mt-5 py-2 px-4  text-sm rounded-md text-white hover:shadow-lg transition translate-x-[26rem] translate-y-[90px] duration-300 cursor-pointer"
      >
        Cancelled
      </button>
      <div>
      <AddReservations
          isOpen={modal1IsOpen}
          onClose={handleCloseModal1}
          onOpenModal2={handleOpenModal2}
          onOpenModal3={handleOpenModal3}
          refresh
        />
        <ChooseCustomer
          isOpen={modal2IsOpen}
          onClose={handleCloseModal2}
          onSaveChanges={handleSaveChanges}
        />
        <ChooseRoom
          isOpen={modal3IsOpen}
          onClose={handleCloseModal3}
          onSaveChanges={handleSaveChanges}
        />
      </div>

      {stateOpening === "Confirmed" && (
        <div className="relative top-[150px] -left-[80px] font-neon">
          <ReservationsTable refresh={modal1IsOpen} />
          <button
            onClick={handleOpenModal1}
            className="bg-emerald-600 absolute flex gap-4 mt-5 py-2 px-4  text-sm rounded-md text-white hover:shadow-lg transition -translate-y-16 duration-300 top-0 right-0 cursor-pointer"
          >
            Add Reservations +
          </button>
        </div>
      )}

      {stateOpening === "Cancelled" && (
        <div className="relative top-[150px] -left-[80px] font-neon">
          <CancelledReservationsTable refresh={modal1IsOpen} />
        </div>
      )}

      {stateOpening === "Pending" && (
        <div className="relative top-[150px] -left-[80px] font-neon">
          <PendingReservationsTable refresh={modal1IsOpen} />
          <button
            onClick={handleOpenModal1}
            className="bg-emerald-600 absolute flex gap-4 mt-5 py-2 px-4  text-sm rounded-md text-white hover:shadow-lg transition -translate-y-16 duration-300 top-0 right-0 cursor-pointer"
          >
            Add Reservations +
          </button>
        </div>
      )}
    </div>
  </div>
);
}
