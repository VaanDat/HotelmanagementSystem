import Popup from "reactjs-popup";
import Edit from '../../assets/edit.png'
import ActionRoomsType from "./Modals/ActionReservations";

export const ReservationsColumns = [
    { Header: 'Id', accessor: (row,index) => index + 1},
    { Header: 'Customer', accessor: 'CUSTOMER'},
    { Header: 'From', accessor: 'CUSTYPE'},
    { Header: 'Identity', accessor: 'IDENTITY'},
    { Header: 'Address', accessor: 'ADDRESS' },
    { Header: 'Registration Date', accessor: 'REGISTRATION' },
    { Header: 'Arrival', accessor: 'ARRRIVAL' },
    { Header: 'Departure', accessor: 'DEPARTURE' },
    {
      Header: 'Action', Cell: ({ row }) => <Popup modal trigger={<button className="translate-x-3"><img src={Edit} alt="" className="w-7 h-7" /></button>}>
        {close => <ActionRoomsType close={close} ID={row.original.ID}
        />}
      </Popup>
    },
  ];