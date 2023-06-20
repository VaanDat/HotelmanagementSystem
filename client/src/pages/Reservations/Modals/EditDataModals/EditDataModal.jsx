import { useState, useMemo, useEffect } from "react";
import '../../../../css/AddReservation.css'
import DatePicker from "react-date-picker";
import { differenceInDays } from 'date-fns';
import Modal from 'react-modal';
import 'react-date-picker/dist/DatePicker.css';
import e from "cors";
import axios from "axios";
import { set } from "lodash";
import ChooseCustomer from "../PickDataModals/ChooseCustomer";
import ShowCustomerTable from "../../TableHandle/Customer/ShowCustomerTable";
import { TextSearchFilter } from '../../../../components/TextSearchFilter';
import { Checkbox } from '../../../../components/Checkbox';
import { useTable, useFilters, useRowSelect } from 'react-table';
import ShowCustomerTableDesign from '../../TableHandle/Customer/ShowCustomerTableDesign';
import ShowCustomerEditTableDesign from "./ShowCustomerEditTableDesign";
import ShowRoomTable from "../../TableHandle/Room/ShowRoomTable";
import ReserEditRoomsTable from "./ReserEditRoomsTable";


Modal.setAppElement('#root');


export default function EditDataModal({ close, ID, RoomID, roomname, roomtype, regisdatetime, arrivaltime, departuretime }) {
  const [method, setMethod] = useState('Cash')
  const [buttonColor, setButtonColor] = useState("bg-gray-500")
  const [showCardInput, setShowCardInput] = useState(false);
  const [showCouponInput, setShowCouponInput] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [arrival, setArrival] = useState(arrivaltime)
  const [departure, setDeparture] = useState(departuretime)
  const [numOfDays, setNumOfDays] = useState(0);
  const [regis, setRegis] = useState(regisdatetime);
  const [price, setPrice] = useState(0);
  const [phuthu, setPhuthu] = useState([]);
  const [customerIDs, setCustomerIDs] = useState([]);
  // const [cusList, setCusList] = useState([]);


  const handleCloseModal = () => {
    if (cusDeliver.length > maxCus) {
      alert(`Number of customers in 1 room must be smaller than ${maxCus}.`);
    } else {
      localStorage.removeItem('pickedCustomers')
      localStorage.removeItem('RoomPickData')
      setPrice(0)
      setArrival(null)
      setDeparture(null)
      setNumOfDays(0)
      setButtonColor("bg-gray-500")
      close();
    }

  };





  const handleMethodChange = (event) => {
    const selectedMethod = event.target.value;
    setMethod(selectedMethod);
    if (selectedMethod === 'card') {
      setShowCardInput(true);
      setShowCouponInput(false);
    } else if (selectedMethod === 'coupon') {
      setShowCouponInput(true);
      setShowCardInput(false);
    }
    else {
      setShowCardInput(false);
      setShowCouponInput(false);
    }
  };

  function getDaysDifference(startDate, endDate) {
    const diffTime = Math.abs(endDate - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  }

  useEffect(() => {
    if (arrival && departure) {
      const daysDifference = differenceInDays(new Date(departure), new Date(arrival));
      setNumOfDays(daysDifference);
    } // or whatever default value you want to set
  },[])

  const customStyles = {
    content: {
      backgroundColor: 'white', // set the background color to transparent
      boxShadow: 'none', // remove the shadow effect
      width: '73rem', // set a custom width
      height: '33rem', // set a custom height
      top: '50%', // position the modal vertically in the middle
      left: '50%', // position the modal horizontally in the middle
      transform: 'translate(-50%, -50%)', // center the modal
      borderRadius: '1rem'

    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.1)', // set the background color of the overlay
    },
  };

  let customers = JSON.parse(localStorage.getItem('pickedCustomers'))
  let room = JSON.parse(localStorage.getItem('RoomPickData'))



  useEffect(() => {
    const getPhuthu = async () => {
      // let temp = axios.get('http://localhost:5000/customers')
      const response = await fetch("http://localhost:5000/tilephuthu");
      const jsonData = await response.json();
      setPhuthu(jsonData[0].TiLePhuThu);
      console.log(phuthu)
    }
    getPhuthu()
  }, [])




  let user = JSON.parse(localStorage.getItem("userAuth"))
  let userid = user.ID;


  const [cusDeliver, setCusDeliver] = useState([]);
  const maxCus = 3

  useEffect(() => {
    // Perform any actions with the cusDeliver variable here
    console.log(cusDeliver);
  }, [cusDeliver]);

  const [CustomerData, setData] = useState([]);


  useEffect(() => {
    const getCustomer = async () => {
      // let temp = axios.get('http://localhost:5000/customers')
      let user = JSON.parse(localStorage.getItem("userAuth"))
      let userid = user.ID;
      try {
        const response = await fetch(`http://localhost:5000/customers?userId=${userid}`);
        const jsonData = await response.json();
        console.log(jsonData);
        setData(jsonData);
      } catch (error) {
        console.log("Error fetching data:", error)
      }
    }
    getCustomer()
  }, [])

  const defaultColumn = useMemo(() => ({ Filter: '' }), []);

  const data = useMemo(() => CustomerData);
  const columns = useMemo(
    () => [
      // { Header: 'ID', accessor: (row, index) => index + 1 },
      { Header: 'Full name', accessor: 'FULL_NAME', Filter: TextSearchFilter },
      { Header: 'Room', accessor: 'ROOM' },
      { Header: 'Birthday', accessor: 'BIRTHDAY' },
      { Header: 'Phone Number', accessor: 'PHONE_NUMBER' },
    ],
    []
  );

  const tableInstance = useTable(
    { columns, data, defaultColumn },
    useFilters,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: 'selection',
          // Header: ({ getToggleAllRowsSelectedProps }) => (
          //   <Checkbox {...getToggleAllRowsSelectedProps()} />
          // ),
          // Cell: ({ row }) => <Checkbox {...row.getToggleRowSelectedProps()} />,
        },
        ...columns,
      ]);
    }
  );
  const [CusofDetail, setCusofDetail] = useState([]);
  const [customerIDlist, setCustomerIDList] = useState([]);



  useEffect(() => {
    const getCustomer = async () => {
      let user = JSON.parse(localStorage.getItem("userAuth"));
      let userid = user.ID;
      let rid = ID;
      try {
        const response = await fetch(`http://localhost:5000/reservationdetail?ReservationId=${rid}`);
        const jsonData = await response.json();
        console.log(jsonData);
        setCusofDetail(jsonData);
        const cidList = jsonData.map((detail) => detail.CID);
        setCustomerIDList(cidList);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    getCustomer();
  }, []);

  console.log("Tuan")
  console.log()


  const setObj = (selectedData) => {
    // const cidList = selectedData.map((item) => item.);
    // setCusofDetail(selectedData);
    // handleSelect(selectedData)
  }

  const [persons, setpersons] = useState(customerIDlist.length);
  const [selectedCus, setSelectedCus] = useState([]);
  const [newCus, setNewCus] = useState([]);


  const definepersonsnumber = (selectedData) => {
    setSelectedCus(selectedData)
  };




  useEffect(() => {
    if (Array.isArray(selectedCus)) {
      const modifiedArray1 = selectedCus.map(obj => obj.original);
      setNewCus(modifiedArray1);
      setpersons(selectedCus.length)
    }
  }, [selectedCus]);



  const [selectedRoom, setSelectedRoom] = useState([])
  const [newRoom, setNewRoom] = useState([])

  const defineroom = (selectedData) => {
    console.log("bmt")
    console.log(selectedData)
    setSelectedRoom(selectedData)
  }

  useEffect(() => {
    if ((selectedRoom)) {
      const modifiedArray2 = selectedRoom.original;
      setNewRoom(modifiedArray2);
    }
  }, [selectedRoom])

  console.log(newRoom)


  useEffect(() => {
    if (newRoom && newCus) {
      const hasNonVietnameseCustomer = newCus.some(
        (customer) => customer.COUNTRY !== "Viet Nam"
      );
      if (newCus.length <= 2) {
        if (hasNonVietnameseCustomer) {
          setPrice(newRoom.PRICE * numOfDays * 1.5)
        }
        else {
          setPrice(newRoom.PRICE * numOfDays)
        }
      }
      else {
        if (hasNonVietnameseCustomer) {
          setPrice(newRoom.PRICE * numOfDays * (phuthu / 100) * 1.5)
        }
        else {
          setPrice(newRoom.PRICE * numOfDays * (phuthu / 100))
        }

      }
    }
  }, [newRoom]);


  useEffect(() => {
    if (price > 0) {
      setButtonColor("bg-sky-400")
    }
  })

  console.log("laca")
  console.log(RoomID)

  const UpdateReservation = async () => {
    try {
      const response = await axios.put('http://localhost:5000/updatereservation', {
        userid: userid,
        id: ID,
        roomid: newRoom.ID,
        room: newRoom.ROOM_NO,
        roomtype: newRoom.TYPE,
        regisdate: regis,
        arrival: arrival,
        departure: departure,
        price: price,
      });
      console.log("thanh cong")
      console.log(response);
      const reservationID = ID;
      UpdateReservationDetail(reservationID);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };



  const UpdateReservationDetail = async (reservationID) => {
    try {
      axios.delete(`http://localhost:5000/deletereservationdetail/${reservationID}`)
      for (const customer of newCus) {
        await axios.post("http://localhost:5000/createreservationdetail", {
          customerID: customer.ID,
          userid: userid,
          reserID: reservationID,
          fullname: customer.FULL_NAME,
          address: customer.ADDRESS,
          custype: customer.COUNTRY,
          identity: customer.IDENTITY_NUMBER,
          birthday: customer.BIRTHDAY,
        });
      }
      console.log("Reservation detail updated successfully");
      window.location.reload();
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };


  const DeleteReservationDetail = async() => {
    const id = ID;
    try{
    axios.delete(`http://localhost:5000/deletereservationdetail/${id}`)
    console.log("thanh cong delete reservation detail")
    const reservationID = id;
    DeleteReservation(reservationID);
    } catch (error){
      console.error("Error deleting reservation detail:", error);
    }
  }

  const DeleteReservation = async(reservationID) => {
    try{
      axios.delete(`http://localhost:5000/deletereservation/${reservationID}`)
      console.log("thanh cong delete reservation")
      window.location.reload()
    }
    catch(error){
      console.log("Error deleting reservation", error)
    }
  }


  return (
    <div className="h-[44rem] overflow-auto">
      <div onClick={handleCloseModal} className="text-2xl absolute top-0 right-0 -translate-x-[0.5rem] cursor-pointer">&times;</div>

      <div className="grid grid-cols-1 gap-x-4 gap-y-0 mt-10">
        <div>
          <div className="bg-[#f8e9e9] h-[14rem] py-[30px] relative rounded-t-xl -mt-5 w-[50rem]">
            <div className="translate-y-[-2rem]">
              <div className="w-[34rem] h-[8rem] ml-4 mt-8">
                <ShowCustomerEditTableDesign tableInstance={tableInstance} handleSelect={setObj} makeSelectableRows={true}
                  selectedIDs={customerIDlist} deliverrows={definepersonsnumber} />
              </div>
              <div className="translate-x-[36rem] translate-y-[-8rem] absolute z-10">
                <div
                  className="cursor-pointer bg-slate-50 rounded-lg p-2 absolute w-[11rem] text-center">Customers:</div>

                {/* <div htmlFor="registration" className="h-[11rem] w-[11rem] p-2 overflow-auto border-4 border-white rounded-xl">
                  {CusofDetail.length === 0 ? (
                    <div>No customers</div>
                  ) : (
                    CusofDetail.map((item, key) => (
                      <div key={item.CID} className="flex mt-[2rem] mb-[-2rem] text-xs">
                        <div className="ml-[] truncate">{item.FULL_NAME}</div>
                        <div className="absolute translate-x-[6rem]">{item.BIRTHDAY}</div>
                      </div>
                    ))
                  )}
                </div> */}
              </div>
            </div>
          </div>
          <div>
            <div className="bg-[#f8e9e9] h-[13rem] grid-flow-col gap-y-[3rem] py-[30px] px-[10px] w-[50rem] rounded-b-lg">
              <ReserEditRoomsTable RoomID={RoomID} roomname={roomname} roomtype={roomtype} deliverroom={defineroom} />

            </div>

          </div>
          <div className="bg-[#f8e9e9] grid grid-rows-3 h-[12rem] w-[30rem] grid-flow-col gap-y-[2rem] py-[30px] px-[10px] rounded-xl mt-[0.5rem]">
            <div className="ml-8">
              <label htmlFor="registration" className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Registration Date</label>
              <DatePicker id="arrival" format="dd-MM-y" selected={regis} value={regis} className="bg-white w-[8rem] ml-8 h-[2.3rem]" onChange={(date) => {
                const dateString = new Date(date).toLocaleDateString()
                setStartDate(date);
                setRegis(dateString)
              }} />
            </div>
            <div className="grid grid-rows-2 grid-flow-col">
              <div className="flex ml-8 -mt-2">
                <div>
                  <label htmlFor="">Persons:</label>
                  <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-10 w-[4rem] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="text"
                    name="persons"
                    id="persons"
                    value={persons}


                  // onChange={(e) => {
                  //     setFullName(e.target.value);
                  // }}
                  />
                </div>

              </div>
              <div className="flex mt-6">
                <div className="ml-8 flex flex-col">
                  <div htmlFor="arrival" className="mb-2 mt-1 text-sm font-medium text-gray-900 dark:text-white">Arrival</div>
                  <DatePicker id="arrival" format="dd-MM-y" selected={startDate} value={arrival} className="bg-white w-[8rem] h-[2.3rem]" onChange={(date) => {
                    const dateString = new Date(date).toLocaleDateString()
                    setStartDate(date);
                    setArrival(dateString)
                  }}
                  />
                </div>
                <div className="ml-12 flex flex-col">
                  <div htmlFor="departure" className="mb-2 mt-1 text-sm font-medium text-gray-900 dark:text-white">Departure</div>
                  <DatePicker id="departure" format="dd-MM-y" selected={endDate} minDate={startDate} value={departure} className="bg-white w-[8rem] h-[2.3rem]" onChange={(date) => {
                    const dateString = new Date(date).toLocaleDateString()
                    setEndDate(date);
                    setDeparture(dateString)
                    const diff = getDaysDifference(startDate, date);
                    setNumOfDays(diff)
                  }} />
                </div>
                <div className="mt-8 ml-[3.5rem] font-medium">Days: {numOfDays}</div>
              </div>
            </div>
            <div className="bg-[#f8e9e9] translate-x-[28.5rem] grid grid-rows-3 h-[12rem] translate-y-[-2.4rem] grid-flow-col gap-y-[3rem] py-[30px] px-[10px] mt-[0.5rem] ml-[1rem] rounded-xl w-[20rem] absolute">

              <div className="grid grid-cols-2 grid-flow-row">
                <div className="ml-8 flex">
                  <label htmlFor="" className="font-medium">Payment</label>
                  <div htmlFor="room" className="mb-2 mt-1 text-sm ml-2 font-medium text-gray-900 dark:text-white">
                    {room === null ? '' : `${room.ROOM_NO}`}</div>

                </div>
              </div>
              <div className="ml-8 flex -mt-6">
                <label htmlFor="" className="font-medium">Method</label>
                <select value={method} onChange={handleMethodChange}
                  className="translate-x-[62px] mt-2 -translate-y-4  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-[6rem] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="gender" name="gender">
                  <option value="cash">cash</option>
                  <option value="card">card</option>
                  <option value="coupon">coupon</option>
                </select>
                {showCardInput && (
                  <div className="translate-x-[-9.3rem] flex translate-y-[2rem]">
                    <label htmlFor="card-number font-medium">Card Number:</label>
                    <input
                      className="rounded-xl p-2 ml-6 w-[6rem] translate-x-[1.6rem] "
                      type="text"
                      id="card-number"
                      name="card-number"
                      placeholder="Enter card number"
                    />
                  </div>
                )}
                {showCouponInput && (
                  <div className="translate-x-[-9.3rem] translate-y-[2.7rem]">
                    <label htmlFor="card-number font-medium">Coupon code:</label>
                    <input
                      className="rounded-xl p-2 ml-6 translate-x-[6rem] translate-y-[-1.8rem] w-[6rem]"
                      type="text"
                      id="coupon"
                      name="coupon"
                      placeholder="Enter coupon code"
                    />
                  </div>
                )}


              </div>
              <div className="ml-8">
                <label htmlFor="" className="font-semibold">Total Price:</label>
                <span className="ml-6">{price}</span>
                <div htmlFor="description" className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                </div>

              </div>
            </div>
          </div>
        </div>

        <button className={`font-medium translate-x-[40rem] translate-y-[39rem] text-white rounded-xl p-2 ${buttonColor} absolute z-10`}
          disabled={price == 0 || !regis}
          onClick={() => { UpdateReservation() }}
        >Save Changes</button>
        <button className="font-medium translate-x-[34rem] px-4 bg-[#f59e0b] translate-y-[39rem] text-white rounded-xl p-2  absolute z-10"
        onClick={() => { DeleteReservationDetail()}}
        >
          Delete</button>
      </div>

    </div>

  );
}



