import Popup from "reactjs-popup";
import ActionRoomModal from "./Modals/ActionRoomModal";
import Edit from '../../assets/edit.png'

export const RoomsColumns = [
    { Header: 'Rooms no', accessor: 'ROOM_NO' },
    { Header: 'Type', accessor: 'TYPE' },
    { Header: 'In Room', accessor: 'IN_ROOM' },
    { Header: 'Price', accessor: 'PRICE' },
    { Header: 'Status', accessor: 'STATUS' },
    { Header: 'Description', accessor: 'DESCRIPTION' },
    { Header: 'Actions', Cell: ({ row }) => <Popup modal trigger={<button><img className="w-7 h-7 translate-x-4" src={Edit} alt="" /></button>}>
    {close => <ActionRoomModal close={close} ID={row.original.ID} roomno={row.original.ROOM_NO} type={row.original.TYPE} inroom={row.original.IN_ROOM} price={row.original.PRICE} 
    status={row.original.STATUS} desc={row.original.DESCRIPTION}/>}
  </Popup> },
  ];