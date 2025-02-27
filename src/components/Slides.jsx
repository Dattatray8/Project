import './Slides.css';
import iphonead from '../images/iphonead.jpg';
import laptopad from '../images/laptopad.webp';
import headphonead from '../images/headphonead.webp';
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { useState } from 'react';

function Slides() {
    let images = [
        {src: iphonead, link: '/iphone'},
        {src: laptopad, link: '/laptops'},
        {src: headphonead, link: '/headphones'},
    ];
    const [index,setindex] = useState(0);

    function next() { setindex((index + 1) % images.length) }
    function prev() { setindex((index - 1 + images.length) % images.length)  }
    setInterval(next,5000);
    
    return (
        <div className="slide-container">
            <a href={images[index].link}>
                <img src={images[index].src} alt="" id='slider' />
            </a>
            <button id='btn-left' onClick={prev}><SlArrowLeft /></button>
            <button id='btn-right' onClick={next}><SlArrowRight /></button>
        </div>
    );
}

export default Slides;