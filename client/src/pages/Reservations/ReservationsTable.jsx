import { useEffect, useState } from 'react';
import { useTable } from 'react-table';
import Table from '../../Table';
import { useMemo } from 'react';
import {ReservationsColumns} from './ReservationsColumns';

export default function ReservationsTable({refresh}) {

  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const [ReservationData, setData] = useState([]);

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    const getReservations = async () => {
      // let temp = axios.get('http://localhost:5000/customers')
      const response = await fetch("http://localhost:5000/reservations");
      const jsonData = await response.json(); 
      console.log(jsonData);
      setData(jsonData);
    }
    getReservations()
  },[refresh])

  const data = useMemo(() => ReservationData);
  const columns = useMemo(() => ReservationsColumns);

  const tableInstance = useTable({ columns, data });

  return (
    <Table tableInstance={tableInstance} />
  );
};

