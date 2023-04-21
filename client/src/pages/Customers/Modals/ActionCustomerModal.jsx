import "../../../css/localpopup.css"
import "../../../css/localpopupbasic.css"
import DatePicker from "react-datepicker";
import { useState, useMemo, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select'
import countryList from 'react-select-country-list'
import axios from "axios"


export default function ActionCustomerModal({ close, ID, name, room,  gender, birthday, phone, identity, country, address}) {
    const [startDate, setStartDate] = useState(new Date());
    const [value, setValue] = useState('')
    const options = useMemo(() => countryList().getData(), [])

    const [nFULL_NAME, setnewFullName] = useState(name)
    const [nROOM, setnewRoom] = useState(room)
    const [nGENDER, setnewGender] = useState(gender)
    const [nBIRTHDAY, setnewBirthday] = useState(birthday)
    const [nPHONE_NUMBER, setnewPhone] = useState(phone)
    const [nIDENTITY_NUMBER, setnewIdentity] = useState(identity)
    const [nCOUNTRY, setnewCountry] = useState(country)
    const [nADDRESS, setnewAddress] = useState(address)

    const [CustomerData, setData] = useState([]);

    useEffect(() => {
      const getCustomer = async () => {
        // let temp = axios.get('http://localhost:5000/customers')
        const response = await fetch("http://localhost:5000/customers");
        const jsonData = await response.json(); 
        setData(jsonData);
      }
      getCustomer()
    },[])
  
    console.log(ID)
    const data = useMemo(() => CustomerData);


    const changeHandler = (value) => {
        setValue(value);
        setnewCountry(value.label);
    }


    const UpdateCustomer = (ID) => {
        console.log('thanh cong')
        axios.put("http://localhost:5000/updatecustomers", {
            id: ID,
            name: nFULL_NAME,
            room: nROOM,
            gender: nGENDER,
            birthday: nBIRTHDAY,
            phone: nPHONE_NUMBER,
            identity: nIDENTITY_NUMBER,
            country: nCOUNTRY,
            address: nADDRESS,
        }).then(
            (response) => {
                alert("updated")
            }
        )
    }

    const DeleteCustomer = (ID) => {
        axios.delete(`http://localhost:5000/deletecustomer/${ID}`)
    }

    const handleSubmit = (e) => {
        e.prevenDefault();
    }


    return (
        <div className="pl-24 h-[22rem]">
            <div className="translate-x-[47rem] text-2xl">
                <a className="close cursor-pointer" onClick={close}>
                    &times;
                </a>
            </div>
            <form onSubmit={handleSubmit} className="grid grid-rows-4 grid-flow-col gap-x-2 gap-y-4 -translate-x-16">
                
                <div className="ml-8 mt-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-900 dark:text-white">Full name</label>
                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-10 w-[18rem] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="text"
                        name="name"
                        id="name"
                        defaultValue={name}
                        onChange={(e) => {
                            setnewFullName(e.target.value);
                        }}

                    />
                </div>
                <div className="ml-8 mt-1">
                    <label htmlFor="gender" className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender </label>
                    <select onChange={(e) => {
                        setnewGender(e.target.value);
                    }}
                        defaultValue={gender}
                        className="ml-[50px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-[6rem] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="gender" name="gender">
                        <option value="male">male</option>
                        <option value="female">female</option>
                        <option value="others">others</option>
                    </select>
                </div>
                <div className="ml-8 mt-1 flex">
                    <label htmlFor="birthday" className="mb-2 mt-1 text-sm font-medium text-gray-900 dark:text-white">Birthday</label>
                    <DatePicker id="birthday" dateFormat="dd/MM/yyyy" value={nBIRTHDAY} className="ml-12  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-[6rem] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " selected={startDate} onChange={(date) => {
                        const dateString = new Date(date).toLocaleDateString()
                        setStartDate(date);
                        setnewBirthday(dateString)
                    }} />
                </div>
                <div className="ml-8 mt-1">
                    <label htmlFor="phone" className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-2 w-[18rem] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="text"
                        name="phone"
                        id="phone"
                        defaultValue={phone}
                        onChange={(e) => {
                            setnewPhone(e.target.value);
                        }}
                    />
                </div>
                <div className="ml-8 mt-2">
                    <label htmlFor="identity" className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Identity</label>
                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-12 w-[14rem] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="text"
                        name="identity"
                        id="identity"
                        defaultValue={identity}
                        onChange={(e) => {
                            setnewIdentity(e.target.value);
                        }}

                    />
                </div>
                <div className="flex mt-3 ml-8">
                    <label htmlFor="country" className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Country</label>
                    <Select id="country" className="z-10 w-[10rem] ml-12 -translate-y-1" options={options} value={value} 
                        onChange={changeHandler}
                        defaultInputValue={country}
                        />
                </div>
                <div className="flex mt-3 ml-8">
                    <label htmlFor="country" className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-12 w-[14rem] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 -translate-y-2 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="text"
                        name="address"
                        id="address"
                        defaultValue={address}
                        onChange={(e) => {
                            setnewAddress(e.target.value);
                        }}

                    />
                </div>
                <div className="ml-8 mt-1">
                    <label htmlFor="room" className="text-sm font-medium text-gray-900 dark:text-white">Room</label>
                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-[60px] w-[6rem] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="text"
                        name="room"
                        id="room"
                        defaultValue={room}
                        onChange={(e) => {
                            setnewRoom(e.target.value);
                        }}
                    />
                </div>
                <div className="relative mt-2 translate-y-[16rem]">
                    <button className="right-0 bottom-0 -translate-x-40 absolute  bg-[#f59e0b] text-white p-2 rounded-lg" 
                    onClick={()=>{DeleteCustomer(ID)}}
                        >Delete</button>
                    <button className="right-0 bottom-0 absolute -translate-x-4 bg-[#374151] text-white p-2 w-[8rem] rounded-lg cursor-pointer" type="submit" onClick={()=>{UpdateCustomer(ID)}}>Save Changes</button>
                </div>
            </form>
        </div>
    )
}