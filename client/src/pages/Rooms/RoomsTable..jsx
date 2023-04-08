import React, { useState } from 'react';
import { useTable } from 'react-table';
import Table from '../../Table';
import Popup from "reactjs-popup";
import RoomsModal from './RoomsModal';

const RoomsTable = () => {
  const [data, setData] = useState([
    { id: 101, type: 'A', inroom: '2', price: "26/08/2002", status: "123456789", },
    { id: 102, type: 'B', inroom: '2', price: "26/08/2002", status: "123456789", },
    { id: 103, type: 'C', inroom: '2', price: "26/08/2002", status: "123456789", },

  ]);

  const columns = [
    { Header: 'Rooms no', accessor: 'id' },
    { Header: 'Type', accessor: 'type' },
    { Header: 'In Room', accessor: 'inroom' },
    { Header: 'Price', accessor: 'price' },
    { Header: 'Status', accessor: 'status' },
    { Header: 'Actions', Cell: ({ row }) => <Popup modal trigger={<button>Click Me</button>}>
    {close => <RoomsModal close={close}/>}
  </Popup> },
  ];

  const tableInstance = useTable({ columns, data });

  return (
    <Table tableInstance={tableInstance} />
  );
};

export default RoomsTable;

{/* <Modal data={row.original} updateData={setData} />  */}