import "../../../css/localpopupbasic.css";
import "../../../css/localpopup.css";
import { useState, useMemo, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import countryList from "react-select-country-list";
import axios from "axios";

export default function AddRoomModal({ close }) {
  const [startDate, setStartDate] = useState(new Date());
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);
  const [isOpenPopup1, setIsOpenPopup1] = useState(false);

  const changeHandler = (value) => {
    setValue(value);
  };

  const [ROOM_NO, setRoomNo] = useState("");
  const [TYPE, setType] = useState("A");
  const [IN_ROOM, setInRoom] = useState("");
  const [PRICE, setPrice] = useState("");
  const [STATUS, setStatus] = useState("");
  const [DESCRIPTION, setDesc] = useState("");

  const [RoomsTypeList, setRTList] = useState([]);

  const displayInfo = () => {
    console.log(ROOM_NO, TYPE, IN_ROOM, PRICE, STATUS);
  };

  // displayInfo()

  const addRoom = () => {
    let user = JSON.parse(localStorage.getItem("userAuth"));
    let userid = user.ID;
    console.log(ROOM_NO, TYPE, IN_ROOM, PRICE, STATUS, DESCRIPTION);
    axios
      .post("http://localhost:5000/createroom", {
        userid: userid,
        roomno: ROOM_NO,
        type: TYPE,
        inroom: IN_ROOM,
        price: PRICE,
        status: STATUS,
        description: DESCRIPTION,
      })
      .then(() => {
        console.log("thanh cong");
      });
  };

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("userAuth"));
    let userid = user.ID;
    const getRoomsType = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/roomstype?userId=${userid}`
        );
        const jsonData = await response.json();
        console.log(jsonData);
        setRTList(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getRoomsType();
  }, []);
  // getRoomsType()

  const RTdata = useMemo(() => RoomsTypeList);

  return (
    <div className="block h-[25rem] absolute translate-x-[-190px] translate-y-[-200px] bg-white border rounded-md ">
      <div className="translate-x-[630px] translate-y-[3px]  text-2xl">
        <a className="close cursor-pointer" onClick={close}>
          &times;
        </a>
      </div>
      <h2 className=" -mt-1 text-2xl flex justify-center"> ADD ROOM</h2>
      <hr class="border-black w-[550px] ml-12 mt-4"></hr>
      <form className="w-[40rem] grid grid-cols-2 gap-x-2 gap-y-12  mt-2 mr-1 items-center ml-4">
        <div className="ml-8 translate-y-[40px] text-xl font-medium -top-6 relative text-gray-900 dark:text-white">
          {" "}
          <label
            htmlFor="roomno"
            className="mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Room no
          </label>
          <input
            className="ml-8 -mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-[7rem] h-[2.6rem] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            name="roomno"
            id="roomno"
            onChange={(e) => {
              setRoomNo(e.target.value);
            }}
          />
        </div>
        <div className="ml-8 translate-y-[10px]">
          <label
            htmlFor="type"
            className="mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Type
          </label>
          <select
            className="ml-12 w-[3rem] p-1 rounded-sm"
            id="type"
            onChange={(e) => {
              setType(e.target.value);
            }}
          >
            {RTdata.map((val, key) => {
              return (
                <option className="rounded-xl" value={val.TYPE}>
                  {val.TYPE}
                </option>
              );
            })}
          </select>
        </div>
        <div className="ml-8 translate-y-[-5px] flex">
          <label
            htmlFor="inroom"
            className="mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            In Room
          </label>
          <input
            className="ml-9 -mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-[7rem] h-[2.6rem] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            name="inroom"
            id="inroom"
            onChange={(e) => {
              setInRoom(e.target.value);
            }}
          />
        </div>
        <div className="ml-8 translate-y-[-6px] flex">
          <label
            htmlFor="phone"
            className="mb-2 translate-y-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Price (vnd)
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-2 w-[7rem] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            name="price"
            id="price"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>
        <div className="ml-8 translate-y-[-30px] flex">
          <label
            htmlFor="description"
            className="mb-2 translate-y-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-4 w-[12rem] h-[5rem] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 break-words"
            type="text"
            name="description"
            id="description"
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
        </div>

        <div className="ml-8 translate-y-[-54px]">
          <label
            htmlFor="identity"
            className="mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Status
          </label>
          <select
            className="ml-12"
            id="type"
            name="type"
            onChange={(e) => {
              setStatus(e.target.value);
            }}
          >
            <option value="empty">empty</option>
            <option value="checkedin">checked in</option>
          </select>
        </div>

        <div className="relative translate-y-8">
          {/* <button className="right-0 bottom-0 translate-y-20 -translate-x-40 absolute  bg-[#f59e0b] text-white p-2 rounded-lg" type="submit">Delete</button> */}
          <button
            className="right-0 bottom-0 absolute translate-y-[-40px] translate-x-[18rem] bg-emerald-600 text-white p-2 rounded-lg"
            onClick={addRoom}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
