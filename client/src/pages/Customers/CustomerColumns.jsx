import Popup from "reactjs-popup";
import CustomerModal from './CustomerModal';

export const CustomerColumns = [
    { Header: 'ID', accessor: 'ID' },
    { Header: 'Full name', accessor: 'FULL_NAME' },
    { Header: 'Gender', accessor: 'gender' },
    { Header: 'Birthday', accessor: 'birthday' },
    { Header: 'Phone Number', accessor: 'phone' },
    { Header: 'Identity Number', accessor: 'identity' },
    { Header: 'Country', accessor: 'country' },
    {
      Header: 'Actions', Cell: ({ row }) => <Popup modal trigger={<button>Click Me</button>}>
        {close => <CustomerModal close={close} />}
      </Popup>
    },
  ];