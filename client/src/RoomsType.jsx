import RoomsTypeData from "./data/RoomsTypeData"

export default function RoomsType(){
    return(
        <div>
            <section className="Roomstype gallery container flex gap-x-24 grid grid-cols-3">
                    {
                        RoomsTypeData.map((value) => {
                            return(
                                
                                <div className="w-[300px] cursor-pointer rounded-2xl flex h-[400px] relative top-[140px] -left-[80px] bg-white text-center">
                                  
                                    <img className="rounded-2xl" src={value.img} alt="" />
                                    <div className={`bg-[#60a5fa] py-2 px-8 rounded-tl-xl rounded-br-xl absolute bottom-0 right-0 font-delafield text-white text-4xl ${value.type === "A" && "bg-[#a8a9ac]"} ${value.type === "B" && "bg-slate-600"} ${value.type === "C" && "bg-[#23314d]"}`}>{value.type}</div>
                                </div>
                                
                            )
                        })
                    }
              
            </section>
        </div>
    )
}