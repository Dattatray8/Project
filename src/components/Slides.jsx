import './Slides.css';
import iphonead from '../images/iphonead.jpg';
import laptopad from '../images/laptopad.webp';
import headphonead from '../images/headphonead.webp';
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

function Slides(){
    let images = [iphonead, laptopad, headphonead];
    let index = 0;

    function next() { index = (index + 1) % images.length; updateImage(); }
    function prev() { index = (index - 1 + images.length) % images.length; updateImage(); }
    function updateImage() { document.getElementById("slider").src = images[index]; }
    setInterval(next, 5000);
    return (
        <div className="slide-container">
            <img src={iphonead} alt="" id='slider'/>
            <button id='btn-left' onClick={prev}><SlArrowLeft /></button>
            <button id='btn-right' onClick={next}><SlArrowRight /></button>
        </div>
    );
}

export default Slides;