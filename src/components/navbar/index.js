import React from "react";
import '../../style/navbar.css'
import { useNavigate,useLocation } from 'react-router-dom'
const Navbar = () => {
    const Location = useLocation()
    const Nevigate = useNavigate()
    const path = Location.pathname
    return (
        <>
            <nav>
                <input type="checkbox" id="check" />
                <label for="check" className="checkbtn">
                    <i className="fas fa-bars"></i>
                </label>
                {/* <label className="logo">DesignX</label> */}
                <a id="Home" onClick={() => Nevigate("/")}>Tech</a>
                <ul id="pages-nav">
                    <li><a className={path === "/about" && "active"} onClick={() => Nevigate("/about")}>About</a></li>
                    <li><a className={path === "/blog" && "active"} onClick={() => Nevigate("/blog")}>Blog</a></li>
                    <li><a className={path === "/service" && "active"} onClick={() => Nevigate("/service")}>services</a></li>
                    <li><a className={path === "/contact" && "active"} onClick={() => Nevigate("/contact")}>Contact</a></li>
                </ul>
            </nav>
            <section></section>
        </>
    )
}
export default Navbar