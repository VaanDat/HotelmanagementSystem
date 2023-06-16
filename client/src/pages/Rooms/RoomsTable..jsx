import React, { useState } from 'react';
import { useTable } from 'react-table';
import Table from '../../Table';
import Popup from "reactjs-popup";
import AddRoomModal from './Modals/AddRoomModal';
import { useMemo,useEffect } from 'react';
import { RoomsColumns } from './RoomsColumns';

const RoomsTable = () => {
  const [RoomData, setData] = useState([]);
  const userid = (JSON.parse(localStorage.getItem("userAuth"))).ID
  useEffect(() => {
    const getRoom = async () => {
      try {
        const response = await fetch(`http://localhost:5000/rooms?userId=${userid}`); // Replace 123 with the actual userId
        const jsonData = await response.json();
        console.log(jsonData);
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    getRoom();
  }, []);
  const data = useMemo(() => RoomData);
  const columns = useMemo(() => RoomsColumns);

  const tableInstance = useTable({ columns, data });

  return (
    <Table tableInstance={tableInstance} />
  );
};

export default RoomsTable;

{/* <Modal data={row.original} updateData={setData} />  */}