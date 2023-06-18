import Popup from "reactjs-popup";
import Edit from '../../../assets/edit.png'
import CheckDetail from "../../Reservations/Modals/Detail/CheckDetail";
import UpdateStatus from "../../Reservations/Status/UpdateStatus";
import EditDataModal from "../../Reservations/Modals/EditDataModals/EditDataModal"
import { useContext } from 'react';
import CheckReceiptDetail from "./Detail/CheckReceiptDetail";

export const ReceiptColumns = [
    

    { Header: 'ID', accessor: (row,index) => index + 1},
    { Header: 'Full name', accessor: 'FULL_NAME' },
    { 
    Header: 'Details', Cell: ({ row }) => <Popup modal trigger={<button className="p-2 bg-[#60a5fa] text-white rounded-lg">Check</button>}>
    {close => <CheckReceiptDetail ROWDATA={row.original}
    />}
  </Popup> },
    { Header: 'Address', accessor: 'ADDRESS'},
    { Header: 'Printday', accessor: 'PRINTDAY'},
    { Header: 'Description', accessor: 'DESCRIPTION'},
    { Header: 'Price', accessor: 'PRICE', Cell: ({ value }) => (
      <div>
        {value.toLocaleString(undefined, {
        })}
      </div>
    ), },
    { Header: 'Status', Cell: ({row}) => <UpdateStatus ID={row.original.ID} STATUS={row.original.STATUS} DEPARTURE={row.original.DEPARTURE}></UpdateStatus>
    },
  ];