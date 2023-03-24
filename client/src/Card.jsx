import { useState } from "react"
import { Link } from "react-router-dom";

export default function Card(props) {
    const [popup, setPopup] = useState(false);
    const toggleModal = () => {
        setPopup(!popup)
    }
    return (

        <div className="max-w-[25rem] h-[25rem] text-center ml-[4rem] mb-[3rem] rounded-2xl mt-10 mb-[7rem]">
            <div className="flex flex-col justify-center">
                <dir className="img -ml-10 -mt-1">
                        <img className="h-[18rem] w-[25rem] rounded-t-2xl" src={props.images} alt="" />
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" onClick={toggleModal}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                        
                    </dir>
                <div className="bg-[#e9d8a6] rounded-2xl text-sky-900">
                    <div className="title">
                        <h3>{props.title}</h3>
                    </div>
                    <div className="description">
                        <h3>{props.description}</h3>
                    </div>
                    <h3>{props.cost}/đêm</h3>
                    <button className="bg-[#e97c61] py-2 px-3 my-4 rounded-xl text-white">
                        <Link to ={`/roomdetail/${props.id}`}>xem phòng</Link></button>
                </div>
              
            </div>
            {popup && (
                <div className="popup">
                    <div className="hide"></div>
                    <div className="popup-content">
                        <button onClick={toggleModal}>Close</button>
                        <img src={props.images} alt="" />
                    </div>
                </div>
            )}
        </div>
    )
}