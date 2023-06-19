import {TextSearchFilter} from '../../../../components/TextSearchFilter'
import moment from 'moment';

export const CheckReceiptDetailColumns = [
    { Header: 'ID', accessor: (row,index) => index + 1},
    { Header: 'REGISDATE', accessor: "REGISDATE"},
    { Header: 'ROOM', accessor: 'ROOM', 
    Filter: TextSearchFilter,
  },
    { Header: 'DAYS',  Cell: ({ row }) => <div>
    {Math.ceil(( (new Date(row.original.DEPARTURE)) - (new Date(row.original.ARRIVAL))) / (1000 * 60 * 60 * 24))}
  </div>,},
    { Header: 'PRICE', accessor: 'DAYPRICE', Cell: ({ value }) => (
      <div>
        {value.toLocaleString(undefined, {
        })}
      </div>
    ),},
    { Header: 'TOTAL', accessor: 'PRICE', Cell: ({ value }) => (
      <div>
        {value.toLocaleString(undefined, {
        })}
      </div>
    ), },

    // {
    //   Header: 'Action', Cell: ({ row }) => <Popup modal trigger={<button className="translate-x-3"><img src={Edit} alt="" className="w-7 h-7" /></button>}>
    //     {close => <ActionCustomerModal close={close} ID={row.original.ID} name={row.original.FULL_NAME} room={row.original.ROOM} gender={row.original.GENDER} 
    //     birthday={row.original.BIRTHDAY} phone={row.original.PHONE_NUMBER} identity={row.original.IDENTITY_NUMBER} country={row.original.COUNTRY} address={row.original.ADDRESS}/>}
    //   </Popup>
    // },
  ];