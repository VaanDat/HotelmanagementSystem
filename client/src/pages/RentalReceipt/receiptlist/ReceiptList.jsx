import { useEffect, useState } from 'react';
import { useTable } from 'react-table';
import Table from '../../../Table';
import { useMemo } from 'react';
import { ReservationsColumns } from '../../Reservations/ReservationsColumns';
import { ReceiptColumns } from './ReceiptColumns';

export default function ReceiptList({deliverstate, month, year}) {

    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
    const [openReceiptList, setOpenReceiptList] = useState(true);
    const [ReservationData, setData] = useState([]);

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    useEffect(() => {
        let user = JSON.parse(localStorage.getItem("userAuth"))
        let userid = user.ID;
        const getReservations = async () => {
          // let temp = axios.get('http://localhost:5000/customers')
          const response = await fetch(`http://localhost:5000/rentalreceipt?userid=${userid}`);
          const jsonData = await response.json(); 
          console.log(jsonData);
          setData(jsonData);
        }
        getReservations()
      },[])

    const data = useMemo(() => ReservationData);
    const columns = useMemo(() => ReceiptColumns);

    const tableInstance = useTable({ columns, data });

    return (
        <div className='translate-y-[100px]'>
            {/* <div onClick={()=>deliverstate(false)}>back</div> */}
            <Table tableInstance={tableInstance} />
        </div>
    );
};

