import Header from "../Header";
import { useAsyncValue, useParams } from "react-router-dom";
import RoomsData from "../data/RoomsData";
import { useEffect, useState } from "react";
import RoomIntro from "../RoomDTIntro"


export default function RoomDetail() {
    const { id } = useParams();
    
    const [roomData, setRoomData] = useState({});
    const room = RoomsData.filter(data => data.id == id)
    useEffect(() => {
        
        setRoomData(...room);
    }, [id])
    return (
        <>
            <Header />
            <RoomIntro images={roomData.img} desc={roomData.description} title={roomData.title} intro={roomData.intro}/>
        </>
    )
}