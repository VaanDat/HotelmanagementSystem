import { Fade as Hamburger } from 'hamburger-react'
import { slide as Menu } from "react-burger-menu";
import "./css/Sidebarstyle.css"
import { Link } from 'react-router-dom';

export default function Sidebar(){
    // return(
    //     <button className="top-10">
    //     <Hamburger></Hamburger>
    //     </button>
    // )
    return (
        // Pass on our props
        <Menu {...Sidebar}>
          <div className="">
            <a className="menu-item flex mb-8">
              <Link to={'/'}>Home</Link>
            </a>
      
            <a className="menu-item flex mb-8">
              <Link to={'/rooms'}>Rooms</Link>
            </a>
      
            <a className="menu-item flex mb-8" href="/pizzas">
              About
            </a>
      
            <a className="menu-item flex mb-8" href="/desserts">
              Service
            </a>
          </div>
        </Menu>
      );
}