import { useEffect, useState } from 'react';
import { useTable, useFilters } from 'react-table';
import Table from '../../../../Table';
import { useMemo } from 'react';
import { CheckReceiptDetailColumns } from './CheckReceiptDetailColumns';
import CheckReceiptDetailTableDesign from './CheckReceiptDetailTableDesign';

export default function CheckReceiptDetailTable({ROWDATA}) {

  
  const [CustomerData, setData] = useState([]);

  useEffect(() => {
    const getCustomer = async () => {
      // let temp = axios.get('http://localhost:5000/customers')
      let user = JSON.parse(localStorage.getItem("userAuth"))
      let userid = user.ID;
      let cid = ROWDATA.CID;
      try{
      const response = await fetch(`http://localhost:5000/receiptdetail?cid=${cid}&userid=${userid}`);
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
  const columns = useMemo(() => CheckReceiptDetailColumns);

  const tableInstance = useTable({ columns, data, defaultColumn }, useFilters);

  return (
    <CheckReceiptDetailTableDesign tableInstance={tableInstance} ROWDATA={ROWDATA}/>
  );
};



{/* <Modal data={row.original} updateData={setData} />  */ }