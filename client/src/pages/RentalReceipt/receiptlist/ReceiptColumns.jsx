import Popup from "reactjs-popup";
import Edit from '../../../assets/edit.png'
import CheckDetail from "../../Reservations/Modals/Detail/CheckDetail";
import UpdateStatus from "../../Reservations/Status/UpdateStatus";
import EditDataModal from "../../Reservations/Modals/EditDataModals/EditDataModal"
import { useContext } from 'react';

export const ReceiptColumns = [
    

    { Header: 'ID', accessor: (row,index) => index + 1},
    { Header: 'Full name', accessor: 'ROOM' },
    { 
    Header: 'Details', Cell: ({ row }) => <Popup modal trigger={<button className="p-2 bg-[#60a5fa] text-white rounded-lg">Check</button>}>
    {close => <CheckDetail close={close} ID={row.original.ID} PAYCUS={row.original.PAYCUSID}
    />}
  </Popup> },
    { Header: 'Address', accessor: 'ADDRESS'},
    { Header: 'Printday', accessor: 'PRINTDAY'},
    { Header: 'Description', accessor: 'DESCRIPTION'},
    { Header: 'Price', accessor: 'PRICE' },
    { Header: 'Status', Cell: ({row}) => <UpdateStatus ID={row.original.ID} STATUS={row.original.STATUS} DEPARTURE={row.original.DEPARTURE}></UpdateStatus>
    },
    // {
    //   Header: 'Action', Cell: ({ row }) => <Popup nested modal trigger={<button className="translate-x-3"><img src={Edit} alt="" className="w-7 h-7" /></button>}>
    //     {close => <EditDataModal 
    //     close={close} 
    //     ID={row.original.ID} 
    //     RoomID={row.original.ROOMID} 
    //     roomname={row.original.ROOM} 
    //     roomtype={row.original.ROOM_TYPE}
    //     regisdatetime={row.original.REGISDATE}
    //     arrivaltime={row.original.ARRIVAL}
    //     departuretime={row.original.DEPARTURE}
    //     />}
    //   </Popup>
    // },
  ];