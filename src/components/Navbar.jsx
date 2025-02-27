import './Navbar.css';
import { TiShoppingCart } from "react-icons/ti";
import { BsSearch } from "react-icons/bs";
import { VscColorMode } from "react-icons/vsc";
import { FiShoppingBag } from "react-icons/fi";
import { VscThreeBars } from "react-icons/vsc";
import { TfiClose } from "react-icons/tfi";
import { useContext } from 'react';
import { datacontext } from '../context/UserContext';
import Cart from './Cart';

function Navbar({ searchQuery, onSearchChange }) {
    let { cnt,clicked,dark,setDark,speak, sidecart, setsidecart, sidebar, setsidebar } = useContext(datacontext);
    let msg = null;
    if(!clicked){
        msg ="Empty Cart..";
    }

    return (
        <div className={`nav ${dark ? 'dark-theme' : ''}`}>
            <div className='nav-icon'>
                <TiShoppingCart />
            </div>
            <b>Shopio</b>
            <form className='search' onSubmit={(e) => e.preventDefault()}>
                <input type='text' placeholder='Search Shopio..' id='search-box' value={searchQuery} onChange={(e) => onSearchChange(e.target.value)} />
                <BsSearch id='search-icon' />
            </form>

            <div className='login'>
                <a href="/login">Login</a>
                <a href="/SignUp">SignUp</a>
            </div>
            <div className='theme' onClick={() => { setDark(dark = !dark); dark ? speak("dark theme activated") : speak("light theme activated") }}>
                <VscColorMode />
            </div>
            <div className='cart-icon' onClick={() => { setsidecart(true) }}>
                <FiShoppingBag />
                <span>{cnt}</span>
            </div>
            <div className='siderbar' onClick={() => { setsidebar(true) }}>
                <VscThreeBars id='sidebar-icon' />
            </div>
            <div className={`s ${sidecart ? 'cart-container' : ''}`}>
                <span className='incart-title'>Order items</span>
                <TfiClose className='cartbar-close' onClick={() => { setsidecart(false) }} /> 
                <span id='defmsg'>{msg}</span>
                <div className='cart-item'>
                    <Cart />
                </div>
            </div>
            <div className={`s s1 ${sidebar ? 'cart-container' : ''}`}>
                <TfiClose className='sidebar-cross' onClick={() => { setsidebar(false) }} />
                <ul className='sidebar-content'>
                    <li>Login</li>
                    <li>Signup</li>
                    <li onClick={() => { setDark(dark = !dark); dark ? speak("dark theme activated") : speak("light theme activated") }}><VscColorMode /></li>
                    <li onClick={() => { setsidecart(true) }}><FiShoppingBag /> <span id='zero'>{cnt}</span></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;