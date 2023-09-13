import react from 'react';
import Pic from "../images/photo-grid.png"

export default function Navbar(){
    return (
        <section className = "Hero">
            <img src ={Pic} alt="pic" className="Hero-img"/>
            <h1 className="Hero-header">Online Experiences</h1>
            <p className="Hero-Para">Join unique interactive activities led by one of a kind hosts - all without leaving home</p>
        </section>
       
    )
}
