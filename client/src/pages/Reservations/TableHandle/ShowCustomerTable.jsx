import { useEffect, useState } from 'react';
import { useTable, useFilters } from 'react-table';
import  ShowCustomerTableDesign  from './ShowCustomerTableDesign'
import { useMemo } from 'react';
// import { CustomerColumns } from '../../Customers/CustomerColumns';
import { ColumnsofShowCustomer } from './ColumnsofShowCustomer';
import { TextSearchFilter } from '../../../components/TextSearchFilter';


export default function ShowCustomerTable({onClose}) {

  const handleCloseModal = (props) => {
    let data = JSON.stringify(props)
    localStorage.setItem('CustomerPickData', data)
    onClose();
  };
  
  const [PickData, setPickData] = useState([])

  const [CustomerData, setData] = useState([]);

  useEffect(() => {
    const getCustomer = async () => {
      // let temp = axios.get('http://localhost:5000/customers')
      const response = await fetch("http://localhost:5000/customers");
      const jsonData = await response.json(); 
      console.log(jsonData);
      setData(jsonData);
    }
    getCustomer()
  },[])
  const defaultColumn = useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: ""
    }),
    []
  );

  const data = useMemo(() => CustomerData);
  const columns = useMemo(() => [
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
            setPickData(row.original)
            handleCloseModal(row.original);
         
    
          
            // call onClose function to close modal
          }}
          className="font-medium translate-x-3 cursor-pointer p-2 bg-sky-400 text-center rounded-xl text-white translate-x-[-10px]"
        >
          Pick
        </div>
      ),
    },
  ], []);

  const tableInstance = useTable({ columns, data, defaultColumn }, useFilters);

  return (


    <ShowCustomerTableDesign tableInstance={tableInstance} />

  );
};
