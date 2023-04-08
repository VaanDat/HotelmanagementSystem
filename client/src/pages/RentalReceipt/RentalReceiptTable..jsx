import React, { useState } from 'react';
import { useTable } from 'react-table';
import Table from '../../Table';
import Popup from "reactjs-popup";
import RentalReceiptModal from './RentalReceiptModal';

const RentalReceiptTable = () => {
  const [data, setData] = useState([
    { id: 101, customer: 'A', date: '2', payfor: "Rooms receipt", price: "800", },
    { id: 102, customer: 'B', date: '2', payfor: "Drinks", price: "200", },
    { id: 103, customer: 'C', date: '2', payfor: "Food", price: "300", },

  ]);

  const columns = [
    { Header: 'ID', accessor: 'id' },
    { Header: 'Customer', accessor: 'customer' },
    { Header: 'Date', accessor: 'date' },
    { Header: 'Payfor', accessor: 'payfor' },
    { Header: 'Price', accessor: 'price' },
    { Header: 'Actions', Cell: ({ row }) => <Popup modal trigger={<button>Click Me</button>}>
    {close => <RentalReceiptModal close={close}/>}
  </Popup> },
  ];

  const tableInstance = useTable({ columns, data });

  return (
    <Table tableInstance={tableInstance} />
  );
};

export default RentalReceiptTable;

{/* <Modal data={row.original} updateData={setData} />  */}