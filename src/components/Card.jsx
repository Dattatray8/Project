import { useContext } from 'react';
import './Card.css';
import { datacontext } from '../context/UserContext';

function Card(props) {
    let {addtocart,dark} = useContext(datacontext);
    
    return (
        <div className={`card ${dark ? 'dark-card' : ''}`}>
            <img src={props.img} alt="" />
            <p id='product-name'>{props.pname}</p>
            <p id='discount'>{props.discount}</p>
            <p id='product-price'>{props.pprice}
                <strike id="old-price">{props.oldp}</strike>
            </p>
            <button id='add-to-cart-btn' onClick={()=>{ addtocart(props.img,props.pprice,props.pname)}}>Add to cart</button>
        </div>
    );
}

export default Card;