import "../../css/localpopupbasic.css"
import "../../css/localpopup.css"
import { useState, useMemo } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import countryList from 'react-select-country-list'

export default function RentalReceiptModal({ close }) {
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
                        <label htmlFor="type" className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Customer</label>
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-2 w-[10rem] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text"
                            name="customer"
                            id="customer"
    
                        />
                    </div>
                    <div className="ml-8 mt-1 flex">
                        <label htmlFor="date" className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                        <DatePicker className="ml-12 w-[6rem]" selected={startDate} onChange={(date) => setStartDate(date)} />
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
                        <label htmlFor="identity" className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Payfor</label>
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-2 w-[10rem] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text"
                            name="payfor"
                            id="payfor"
    
                        />
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