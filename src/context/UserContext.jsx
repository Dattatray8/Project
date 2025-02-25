import { createContext,  useState } from "react";
// import { useNavigate } from "react-router-dom";

export const datacontext = createContext();

// const navi = useContext();

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

    // let voiceRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

    // let recognition = new voiceRecognition()

    // recognition.onresult = (e) => {
    //     const speakedText = e.results[0][0].transcript.toLowerCase();
    //     // console.log(speakedText);
    //     if(speakedText.includes("mobile")||speakedText.includes("mobiles")){
    //         navi("/mobiles");
    //     }
    // }

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
        setDark,
        speak,
        // recognition
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