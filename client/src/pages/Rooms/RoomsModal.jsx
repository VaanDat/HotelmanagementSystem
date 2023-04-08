import "../../css/localpopupbasic.css"
import "../../css/localpopup.css"
import { useState, useMemo } from "react";
import "react-datepicker/dist/react-datepicker.css";
import countryList from 'react-select-country-list'

export default function RoomsModal({ close }) {
    const [startDate, setStartDate] = useState(new Date());
    const [value, setValue] = useState('')
    const options = useMemo(() => countryList().getData(), [])

    const changeHandler = value => {
        setValue(value)
    }
    return (
        <div className="">
            <div className="translate-x-[33rem] text-2xl">
                <a className="close cursor-pointer" onClick={close}>
                    &times;
                </a>
            </div>
            <form className="">
                <div className="ml-12 mt-2 text-xl font-medium -top-6 relative text-gray-900 dark:text-white">Room no</div>



              <div className="grid grid-cols-2 gap-x-2 gap-y-12 items-center ml-4">
                    <div className="ml-8 mt-2">
                        <label htmlFor="type" className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Type</label>
                        <select className="ml-12" id="type">
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                        </select>
                    </div>
                    <div className="ml-8 mt-1 flex">
                        <label htmlFor="inroom" className="mb-2 text-sm font-medium text-gray-900 dark:text-white">In Room</label>
                        <input className="ml-9 -mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-[4rem] h-[2.6rem] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text"
                            name="inroom"
                            id="inroom"
    
                        />
                    </div>
                    <div className="ml-8 mt-1">
                        <label htmlFor="phone" className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Price (vnd)</label>
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-2 w-[10rem] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text"
                            name="price"
                            id="price"
    
                        />
                    </div>
                    <div className="ml-8 mt-2">
                        <label htmlFor="identity" className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
                        <select className="ml-12" id="type" name="type">
                            <option value="empty">empty</option>
                            <option value="checkedin">checked in</option>
                        </select>
                    </div>
              </div>
               
                <div className="relative mt-2">
                    <button className="right-0 bottom-0 translate-y-20 -translate-x-40 absolute  bg-[#f59e0b] text-white p-2 rounded-lg" type="submit">Delete</button>
                    <button className="right-0 bottom-0 absolute translate-y-20 -translate-x-8 bg-[#374151] text-white p-2 rounded-lg" type="submit">Save Changes</button>
                </div>
            </form>
        </div>
    )
}