import { useEffect, useState } from 'react';
import { useTable } from 'react-table';
import Table from '../../../Table';
import { useMemo } from 'react';
import Popup from "reactjs-popup";
import UpdateStatus from "../../Reservations/Status/UpdateStatus";
import UpdateReceiptStatus from "./ReceiptStatus/UpdateReceiptStatus"
import CheckReceiptDetail from "./Detail/CheckReceiptDetail";
import axios from 'axios';

export default function ReceiptList({ deliverstate, month, year }) {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const [openReceiptList, setOpenReceiptList] = useState(true);
  const [ReservationData, setData] = useState([]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const columns = useMemo(
    () => [
      { Header: 'ID', accessor: (row, index) => index + 1 },
      {
        Header: 'Full name',
        accessor: 'FULL_NAME',
        Cell: ({ value, row }) => (
          <div>
            <div className="mb-2">{value}</div>
            <div className="mb-3">
              <Popup
                modal
                trigger={
                  <button className="p-2 bg-[#60a5fa] text-white rounded-lg">
                    Check
                  </button>
                }
              >
                {close => (
                  <CheckReceiptDetail ROWDATA={row.original} close={close} />
                )}
              </Popup>
            </div>
          </div>
        ),
      },
      { Header: 'Address', accessor: 'ADDRESS' },
      { Header: 'Printday', accessor: 'PRINTDAY' },
    //   {
    //     Header: 'Description',
    //     accessor: 'DESCRIPTION',
    //   },
      {
        Header: 'Price',
        accessor: 'PRICE',
        Cell: ({ value }) => (
          <div>{value.toLocaleString(undefined, {})}</div>
        ),
      },
      {
        Header: 'Status',
        Cell: ({ row }) => (
          <UpdateReceiptStatus
            ID={row.original.ID}
            STATUS={row.original.STATUS}
            DEPARTURE={row.original.DEPARTURE}
          ></UpdateReceiptStatus>
        ),
      },
    ],
    []
  );

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem('userAuth'));
    let userid = user.ID;
    const getReservations = async () => {
      const response = await fetch(
        `http://localhost:5000/rentalreceipt?userid=${userid}`
      );
      const jsonData = await response.json();
      console.log(jsonData);
      setData(jsonData);
    };
    getReservations();
  }, []);

  const data = useMemo(() => ReservationData);
  const tableInstance = useTable({ columns, data });

  return (
    <div className="translate-y-[100px]">
      <Table tableInstance={tableInstance} />
    </div>
  );
}

