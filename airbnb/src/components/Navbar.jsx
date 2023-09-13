import react from 'react';
import Logo from "../images/airbnb-logo.png"

export default function Navbar(){
    return (
        
        <nav className>

            <img src={Logo} alt="img" className ="nav--logo" />
        </nav>
    )
}
