import { useEffect, useState } from 'react';
import { useTable, useFilters } from 'react-table';
import Table from '../../Table';
import { useMemo } from 'react';
import {ReservationsColumns} from './ReservationsColumns';
import ReservationTableDesign from './ReservationTableDesign';
import { CancelledReservationsColumns } from './CancelledReservationsColumns';

export default function CancelledReservationsTable({refresh}) {

  const [ReservationData, setData] = useState([]);


  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("userAuth"))
    let userid = user.ID;
    const getReservations = async () => {
      // let temp = axios.get('http://localhost:5000/customers')
      const response = await fetch(`http://localhost:5000/cancelledreservations?userid=${userid}`);
      const jsonData = await response.json(); 
      console.log("love Tuan", jsonData);
      setData(jsonData);
    }
    getReservations()
  },[])

  const defaultColumn = useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: ""
    }),
    []
  );

  const data = useMemo(() => ReservationData);
  const columns = useMemo(() => CancelledReservationsColumns);

  const tableInstance = useTable({ columns, data, defaultColumn }, useFilters);

  return (
    
    <ReservationTableDesign tableInstance={tableInstance} />

  );
};

