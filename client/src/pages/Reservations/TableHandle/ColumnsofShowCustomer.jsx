import { TextSearchFilter } from '../../../components/TextSearchFilter';

export const ColumnsofShowCustomer = ({ onClose }) => [
  { Header: 'ID', accessor: (row, index) => index + 1 },
  {
    Header: 'Full name',
    accessor: 'FULL_NAME',
    Filter: TextSearchFilter,
  },
  { Header: 'Room', accessor: 'ROOM' },
  { Header: 'Gender', accessor: 'GENDER' },
  { Header: 'Birthday', accessor: 'BIRTHDAY' },
  { Header: 'Phone Number', accessor: 'PHONE_NUMBER' },
  { Header: 'Identity Number', accessor: 'IDENTITY_NUMBER' },
  { Header: 'Country', accessor: 'COUNTRY' },
  { Header: 'Address', accessor: 'ADDRESS' },
  {
    Header: 'Choose',
    Cell: ({ row }) => (
      <div
        onClick={() => {
          onClose(); // call onClose function to close modal
        }}
        className="font-medium translate-x-3 cursor-pointer p-2 bg-sky-400 text-center rounded-xl text-white translate-x-[-10px]"
      >
        Pick
      </div>
    ),
  },
];