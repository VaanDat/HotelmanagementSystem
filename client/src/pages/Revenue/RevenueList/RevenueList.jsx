import { useEffect, useState } from 'react';
import { useTable } from 'react-table';
import Table from '../../../Table';
import { useMemo } from 'react';
import { ReservationsColumns } from '../../Reservations/ReservationsColumns';

export default function RevenueList({deliverstate, month, year}) {

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
        const receiptmonth = month;
        const receiptyear = year;
        const getReservations = async () => {
          // let temp = axios.get('http://localhost:5000/customers')
          const response = await fetch(`http://localhost:5000/reservationmonthscale?userid=${userid}&month=${receiptmonth}&year=${receiptyear}`);
          const jsonData = await response.json(); 
          console.log(jsonData);
          setData(jsonData);
        }
        getReservations()
      },[])

    const data = useMemo(() => ReservationData);
    const columns = useMemo(() => ReservationsColumns);

    const tableInstance = useTable({ columns, data });

    return (
        <div className=''>
            <div onClick={()=>deliverstate(false)}>back</div>
            <Table tableInstance={tableInstance} />
        </div>
    );
};

