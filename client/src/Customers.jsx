import plus from "./assets/plus.png"

export default function Customers(){
    return(
        <div className="list">
            <button className="bg-[#60a5fa] flex gap-4 py-2 px-4 text-sm rounded-xl text-white hover:bg-[#93c5fd] transition duration-300 relative top-[100px] left-[750px]">
                Add Customer
              <img src={plus} alt="" className="w-5 h-5" />

            </button>
            <ul className="flex gap-20 -ml-[100px] relative text- top-[120px] font-neon w-[1020px] bg-[#e5e7eb] py-2 px-4 rounded-2xl">
                <ul>ID
                    <li>
                        1
                    </li>
                    <li>
                        1
                    </li>
                </ul>
                <ul>Full name
                    <li>
                        Mai Anh Tuấn
                    </li>
                </ul>
                <ul>Gender</ul>
                <ul>Date of birth</ul>
                <ul>Phone number</ul>
                <ul>Identity number</ul>
                <ul>Country</ul>
                <ul>Action</ul>
            </ul>
        </div>
    )
}