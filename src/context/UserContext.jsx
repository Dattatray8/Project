import { createContext, useState } from "react";

export const datacontext = createContext();

function UserContext({ children }) {
    const [added, setadded] = useState(false);
    const [dark, setDark] = useState(false);

    const [cnt, setcnt] = useState(0);
    const [clicked, setclicked] = useState(false);
    const [cartItems, setcartItems] = useState([]);

    function addtocart(img, price, name) {
        setcartItems((prev) => [...prev, { img, price, name }]);
        setadded(true);
        setcnt(cnt + 1);
        setclicked(true);
    }

    const value = {
        added,
        setadded,
        cnt,
        setcnt,
        clicked,
        setclicked,
        cartItems,
        setcartItems,
        addtocart,
        dark,
        setDark
    }

    return (
        <div>
            <datacontext.Provider value={value}>
                {children}
            </datacontext.Provider>
        </div>
    );
}

export default UserContext;