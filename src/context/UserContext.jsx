import { createContext, useState } from "react";

export const datacontext = createContext();

function UserContext({ children }) {

    function speak(text) {
        window.speechSynthesis.cancel();
        let text_speak = new SpeechSynthesisUtterance(text)
        text_speak.volume = 1;
        text_speak.rate = 1;
        text_speak.pitch = 1;
        text_speak.lang = "en-US";
        window.speechSynthesis.speak(text_speak);
    }

    const [added, setadded] = useState(false);
    const [dark, setDark] = useState(false);
    const [cnt, setcnt] = useState(0);
    const [clicked, setclicked] = useState(false);
    const [cartItems, setcartItems] = useState([]);
    const [ordered, setordered] = useState(false);
    const [sidecart, setsidecart] = useState(false);
    const [sidebar, setsidebar] = useState(false);
    const [user,notuser] = useState(false);

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
        setDark,
        speak,
        ordered,
        setordered,
        sidebar,
        sidecart,
        setsidebar,
        setsidecart,
        user,
        notuser
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