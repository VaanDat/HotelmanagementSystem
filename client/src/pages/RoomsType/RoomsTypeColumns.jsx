import Popup from "reactjs-popup";
import Edit from '../../assets/edit.png'
import ActionRoomsType from "./Modals/ActionRoomsType";

export const RoomsTypeColumns = [
    { Header: 'Type', accessor: 'TYPE'},
    { Header: 'Level', accessor: 'LEVEL'},
    { Header: 'Price', accessor: 'PRICE'},
    { Header: 'Capacity', accessor: 'CAPACITY' },
    { Header: 'Surchage Rate', accessor: 'SC_RATE' },
    { Header: 'Description', accessor: 'DESCRIPTION' },
    {
      Header: 'Action', Cell: ({ row }) => <Popup modal trigger={<button className="translate-x-3"><img src={Edit} alt="" className="w-7 h-7" /></button>}>
        {close => <ActionRoomsType close={close} ID={row.original.ID} type={row.original.TYPE} level={row.original.LEVEL} price={row.original.PRICE}
        capacity={row.original.CAPACITY} rate={row.original.SC_RATE} desc={row.original.DESCRIPTION}
        />}
      </Popup>
    },
  ];