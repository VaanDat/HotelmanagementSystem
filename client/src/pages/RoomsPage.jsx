import Card from "../Card";
import Header from "../Header";
import RoomsData from "../data/RoomsData";

export default function RoomsPage(){
    return(
        <div className="bg-[#fdfcdc]">
        <Header></Header>
        <section className="gallery top">
            <div className="container grid grid-cols-3 place-content-evenly">
                {
                    RoomsData.map((value)=>{
                    return(
                       <>
                            {/* <img src="images/rooms-3.jpg"/> */}
                            <div>
                                <Card images={value.img} title={value.title} description={value.description} cost={value.cost} id={value.id}/>
                            </div>
                       </>
                        )})
                       
                        
                }
            </div>

        </section>
        </div>
    )
}