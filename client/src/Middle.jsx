import './css/bg.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';

export default function Middle() {
    const [startDate1, setStartDate1] = useState(new Date());
    const [startDate2, setStartDate2] = useState(new Date());
    return (
        <div className='relative'>
            <div className="w-full h-[32rem] bg-cover bg-dunes mainhall bg-no-repeat relative">
                <h1 className='text-gray-50 font-baby text-8xl absolute top-[160px] left-20'>All path <br /> leads to Miles</h1>
            </div>
            <div className='p-20 bg-[#76C893] w-[50rem] absolute left-[500px] -translate-y-20 rounded-3xl'>
                <p className='absolute top-5 font-baby text-gray-50 text-3xl'>Find your perfect place in Ho Chi Minh !</p>

                <div className='flex gap-[50px] text-emerald-400'>
                    <div className='bg-white py-6 px-10 rounded-[10px]'>
                        check in
                        <DatePicker className='w-[80px]' selected={startDate1} onChange={(date) => setStartDate1(date)} />
                    </div>
                    <div className='bg-white py-6 px-10 rounded-[10px]'>
                        check out
                        <DatePicker className='w-[80px]' selected={startDate2} onChange={(date) => setStartDate2(date)} />
                    </div>
                    {/* <Datepicker/> */}
                </div>
                <button className='bg-[#97CED1] translate-x-[120px] translate-y-2 p-6 text-lg rounded-[10px] hover:bg-[#ACD8DA] transition delay-50 duration-300 text-gray-50 absolute top-[80px] left-[500px]'>
                    Book now
                </button>
              
            </div>
        </div>
    )

}