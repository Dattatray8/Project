import { useContext, useState, useEffect } from "react";
import { datacontext } from "../context/UserContext";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TfiClose } from "react-icons/tfi";
import './cart.css';

function Cart() {
    let { cartItems, setcartItems, setclicked, cnt, setcnt, speak, ordered, setordered } = useContext(datacontext);
    const [q, setq] = useState(1);
    // const [ordered, setordered] = useState(false);

    function remove(index) {
        setcartItems(cartItems.filter((_, i) => i !== index));
    }

    useEffect(() => {
        if (cartItems.length === 0) {
            setclicked(false); 
        }
    }, [cartItems,setclicked]);

    return (
        <div>
            {ordered && (
                <div className='o-msg'>
                    Order Has Been Placed <TfiClose id="close" onClick={()=>{setordered(false);}}/>
                </div>
            )}
            {
                cartItems.length > 0 ? (
                    cartItems.map((item, index) => (
                        <div className='order-cart' key={index}>
                            <hr />
                            <div className="order">
                                <img src={item.img} id="order-img" alt="cart" />
                                <div className="text-section">
                                    <p id="order-name">{item.name}</p>
                                    <p id="order-price">{item.price}</p>
                                </div>
                            </div>
                            <div className="btn-grp">
                                <p id="b1" onClick={() => { setq(q - 1) }}>-</p>
                                <p>{q}</p>
                                <p id="b3" onClick={() => { setq(q + 1) }}>+</p>
                                <RiDeleteBin6Line id="del" onClick={() => { remove(index); setcnt(cnt - 1); speak("Product is deleted from cart")}} />
                            </div>
                            <div className="price-sec">
                                <hr />
                                <div>
                                    <p>Price:</p>
                                    <p>Rs. {parseInt(item.price.replace(/[^0-9]/g, ''), 10)*q}/-</p>
                                </div>
                                <div>
                                    <p>Delivery fee:</p>
                                    <p>Rs. 20/-</p>
                                </div>
                                <div>
                                    <p>Total:</p>
                                    <p>Rs. {parseInt(item.price.replace(/[^0-9]/g, ''), 10) *q + 20}/-</p>
                                </div>
                                <button id="place-o" onClick={() => {
                                    setordered(true);
                                    setTimeout(() => {
                                        setordered(false);
                                    }, 5000);
                                    speak("Your order has been placed.")
                                }
                                }>Place Order</button>
                            </div>
                        </div>
                    ))
                ) : ''
            }
        </div>
    );
}

export default Cart;