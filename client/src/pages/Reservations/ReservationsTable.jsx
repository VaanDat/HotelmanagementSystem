import { useEffect, useState } from 'react';
import { useTable } from 'react-table';
import Table from '../../Table';
import { useMemo } from 'react';
import { ReservationsColumns } from './ReservationsColumns';


export default function ReservationsTable() {

  
  const [RoomsTypeData, setData] = useState([]);

  useEffect(() => {
    const getRoomsType = async () => {
      // let temp = axios.get('http://localhost:5000/customers')
      const response = await fetch("http://localhost:5000/reservations");
      const jsonData = await response.json(); 
      console.log(jsonData);
      setData(jsonData);
    }
    getRoomsType()
  },[])

  // const getCustomer = () => {
  //   axios.get("http://localhost:5000/customers").then((response) =>{
  //     console.log(response.data)
  //     // setData(response.data);
  //   })
  // }

  // getCustomer();

  const data = useMemo(() => RoomsTypeData);
  const columns = useMemo(() => ReservationsColumns);

  const tableInstance = useTable({ columns, data });

  return (
    <Table tableInstance={tableInstance} />
  );
};



{/* <Modal data={row.original} updateData={setData} />  */ }