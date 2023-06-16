import React, { useState } from 'react';
import { useTable } from 'react-table';
import Table from '../../../Table';
import { useMemo,useEffect } from 'react';
import { RoomshaveReservationsColumns } from './RoomshaveReservationsColumns';

const RoomshaveReservationsTable = () => {
  const [RoomData, setData] = useState([]);

  useEffect(() => {
    const getRoom = async () => {
      // let temp = axios.get('http://localhost:5000/customers')
      const response = await fetch("http://localhost:5000/rooms");
      const jsonData = await response.json(); 
      console.log(jsonData);
      setData(jsonData);
    }
    getRoom()
  },[])

  const data = useMemo(() => RoomData);
  const columns = useMemo(() => RoomshaveReservationsColumns);

  const tableInstance = useTable({ columns, data });

  return (
    <Table tableInstance={tableInstance} />
  );
};

export default RoomshaveReservationsTable;

{/* <Modal data={row.original} updateData={setData} />  */}