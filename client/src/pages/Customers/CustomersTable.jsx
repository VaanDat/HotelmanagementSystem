import { useEffect, useState } from 'react';
import { useTable, useFilters } from 'react-table';
import Table from '../../Table';
import { useMemo } from 'react';
import { CustomerColumns } from './CustomerColumns';


export default function CustomerTable() {

  
  const [CustomerData, setData] = useState([]);

  useEffect(() => {
    const getCustomer = async () => {
      // let temp = axios.get('http://localhost:5000/customers')
      const response = await fetch("http://localhost:5000/customers");
      const jsonData = await response.json(); 
      console.log(jsonData);
      setData(jsonData);
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


    <Table tableInstance={tableInstance} />

  );
};



{/* <Modal data={row.original} updateData={setData} />  */ }