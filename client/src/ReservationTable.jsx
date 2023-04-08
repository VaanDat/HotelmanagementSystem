import React, { useState } from 'react';
import { useTable } from 'react-table';
import Modal from './Modal';
import Table from './Table';

const ReservationTable = () => {
  const [data, setData] = useState([
    { id: 1, name: 'John Doe', registdate: '2023-03-28', time: '12:00 PM' },
    { id: 2, name: 'Jane Doe', registdate: '2023-03-29', time: '2:00 PM' },
    { id: 3, name: 'Tuan Anh', registdate: '2023-09-23', time: '4:00 PM' },
  ]);

  const columns = [
    { Header: 'ID', accessor: 'id' },
    { Header: 'Customer', accessor: 'name' },
    { Header: 'Regist Date', accessor: 'registdate' },
    { Header: 'Arrival', accessor: 'arrival' },
    { Header: 'Room', accessor: 'room' },
    { Header: 'Status', accessor: 'status' },
    { Header: 'Actions', Cell: ({ row }) => <Modal data={row.original} updateData={setData} /> },
  ];

  const tableInstance = useTable({ columns, data });

  return (
    <Table tableInstance={tableInstance} />
  );
};

export default ReservationTable;

    