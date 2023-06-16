import { useEffect, useState } from 'react';
import { useTable, useFilters } from 'react-table';
import Table from '../../../../Table';
import { useMemo } from 'react';
import { CustomerColumns } from './CheckDetailColumns';
import CheckDetailTableDesign from './CheckDetailTableDesign';

export default function CheckDetailTable({ID}) {

  
  const [CustomerData, setData] = useState([]);

  useEffect(() => {
    const getCustomer = async () => {
      // let temp = axios.get('http://localhost:5000/customers')
      let user = JSON.parse(localStorage.getItem("userAuth"))
      let userid = user.ID;
      let rid = ID;
      try{
      const response = await fetch(`http://localhost:5000/reservationdetail?ReservationId=${rid}`);
      const jsonData = await response.json(); 
      console.log(jsonData);
      setData(jsonData);
      } catch (error) {
        console.log("Error fetching data:", error)
      }
    }
    getCustomer()
  },[])
  const defaultColumn = useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: ""
    }),
    []
  );



  const data = useMemo(() => CustomerData);
  const columns = useMemo(() => CustomerColumns);

  const tableInstance = useTable({ columns, data, defaultColumn }, useFilters);

  return (
    <CheckDetailTableDesign tableInstance={tableInstance}/>
  );
};



{/* <Modal data={row.original} updateData={setData} />  */ }