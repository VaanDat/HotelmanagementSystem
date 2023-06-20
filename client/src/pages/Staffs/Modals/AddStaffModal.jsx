import "../../../css/localpopupbasic.css";
import "../../../css/localpopup.css";
import { useState, useMemo, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import countryList from "react-select-country-list";
import axios from "axios";
import DatePicker from "react-date-picker";

export default function AddStaffModal({ close }) {
  const [startDate, setStartDate] = useState(new Date());
  const [FULL_NAME, setFullName] = useState("");
  const [GENDER, setGender] = useState("Male");
  const [BIRTHDAY, setBirthday] = useState("");
  const [POSITION, setPosition] = useState("");
  const [IDENTITY_NUMBER, setIdentityNumber] = useState("");
  const [PHONE_NUMBER, setPhoneNumber] = useState("");

  let user = JSON.parse(localStorage.getItem("userAuth"));
  let userid = user.ID;

  const addStaff = () => {
    axios
      .post("http://localhost:5000/createstaff", {
        userid: userid,
        fullname: FULL_NAME,
        gender: GENDER,
        birthday: BIRTHDAY,
        position: POSITION,
        identynumber: IDENTITY_NUMBER,
        phonenumber: PHONE_NUMBER,
      })
      .then(() => {
        console.log("thanh cong");
      });
  };

  console.log("love", userid);

  return (
    <div className="block h-[23rem] w-[50rem] absolute translate-x-[-230px] translate-y-[-220px] bg-white border rounded-md">
      <div className="translate-x-[48rem] text-2xl">
        <a className="close cursor-pointer" onClick={close}>
          &times;
        </a>
      </div>
      <h2 className=" -mt-1 mb-4 text-2xl flex justify-center"> ADD STAFF</h2>

      <form className="grid grid-rows-4 grid-flow-col gap-x-2 gap-y-4 -translate-x-50">
        <div className="ml-8 mt-2">
          <label
            htmlFor="name"
            className="text-sm font-medium text-gray-900 dark:text-white"
          >
            Fullname
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-14 w-[18rem] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            name="name"
            id="name"
            onChange={(e) => {
              setFullName(e.target.value);
            }}
          />
        </div>

        <div className="ml-8 mt-1 flex">
          <label
            htmlFor="birthday"
            className="mb-2 mt-1.5 text-sm font-medium text-gray-900 dark:text-white"
          >
            Birthday
          </label>
          <DatePicker
            id="birthday"
            format="dd-MM-y"
            selected={startDate}
            value={BIRTHDAY}
            className="ml-16 w-[10rem] h-[2.3rem]"
            onChange={(date) => {
              const dateString = new Date(date).toLocaleDateString();
              setStartDate(date);
              setBirthday(dateString);
            }}
          />
        </div>
        <div className="ml-8">
          <label
            htmlFor="phone"
            className="mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Phone number
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-6 w-[18rem] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            name="phone"
            id="phone"
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          />
        </div>
        <div className="ml-8 ">
          <label
            htmlFor="identity"
            className="mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Identity number
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-4 w-[18rem] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            name="identity"
            id="identity"
            onChange={(e) => {
              setIdentityNumber(e.target.value);
            }}
          />
        </div>
        <div className=" -ml-10 mt-1">
          <label
            htmlFor="gender"
            className="mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Gender{" "}
          </label>
          <select
            value={GENDER}
            onChange={(e) => {
              setGender(e.target.value);
            }}
            className="ml-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-[6rem] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="gender"
            name="gender"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>
        </div>
        <div className="-ml-10 mt-1">
          <label
            htmlFor="gender"
            className="mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Position{" "}
          </label>
          <select
            value={POSITION}
            onChange={(e) => {
              setPosition(e.target.value);
            }}
            className="ml-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-[8rem] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="position"
            name="position"
          >
            <option value="male">Manager</option>
            <option value="female">Receptionist</option>
            <option value="others">Housekeeping</option>
            <option value="others">Chef</option>
            <option value="others">Accountant</option>
          </select>
        </div>
        <div className="relative mt-2 -translate-x-[2rem] translate-y-[5rem]">
          {/* <button className="right-0 bottom-0 -translate-x-40 absolute  bg-[#f59e0b] text-white p-2 rounded-lg">Delete</button> */}
          <button
            className="right-0 bottom-0 absolute 8 bg-emerald-700 w-[8rem] text-white p-2 rounded-lg cursor-pointer"
            onClick={addStaff}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
