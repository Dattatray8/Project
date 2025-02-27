import './App.css';
import { datacontext } from './context/UserContext';
import { useContext } from 'react';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Slides from './components/Slides';
import Card from './components/Card';
import iphone15 from './images/iphone15.webp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import iphone16 from './images/iphone16.webp';
import iphone13 from './images/iphone13.webp';
import iphone16max from './images/iphone16promax.webp';
import sgs23ul from './images/sgs23ul.webp';
import sga23 from './images/sga23.webp';
import sgs24fe from './images/sgs24fe.webp';
import sgs25 from './images/sgs25.jpg';
import redmi13 from './images/redmi13.webp';
import redminote13 from './images/redminote13pro.webp';
import redminote14 from './images/redminote14.webp';
import redmia3x from './images/redmia3x.webp';
import vivot3x from './images/vivot3x.jpg';
import vivov50 from './images/vivov50.jpg';
import vivoy18t from './images/vivoy18t.jpg';
import vivox200 from './images/vivox200.jpg';
import jbl from './images/jbl.webp';
import boat from './images/boat450.webp';
import boultq from './images/boultq.webp';
import boultx from './images/boultx.jpg';
import lenovothink from './images/lenovothinkpad.jpg';
import lenovov14 from './images/lenovov14.webp';
import lenovoslim3 from './images/lenovoslim3.webp';
import lenovoloq from './images/lenovoloq.jpg';
import hp15 from './images/hp15.webp';
import hp255 from './images/hp255.webp';
import hpvictus from './images/hpvictus.webp';
import hp14 from './images/hp14.webp';
import dellg15 from './images/delg15.webp';
import dell3530 from './images/dell3530.webp';
import dell5630 from './images/dell5630.webp';
import dell3440 from './images/dell3440.webp';
import acernitro from './images/acerv.webp';
import aceralg from './images/aceralg.webp';
import acerneo from './images/acerneo.webp';
import acerswift from './images/acerswift.webp';
import React, { useState } from 'react';
import { FaRobot } from "react-icons/fa6";
import Footer from './components/Footer';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  function FilterCard({ children }) {
    if (!searchQuery) return children;
    const filtercards = React.Children.toArray(children).filter(card =>
      card.props.pname.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return filtercards;
  }
  let { dark, setDark, setordered, speak, setsidecart, setsidebar } = useContext(datacontext);

  let voiceRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

  let recognition = new voiceRecognition()

  recognition.onresult = (e) => {
    const speakedText = e.results[0][0].transcript.toLowerCase();
    console.log(speakedText);
    if (speakedText.includes("place") || speakedText.includes("place order")) {
      setordered(true);
      setTimeout(() => {
        setordered(false);
      }, 5000);
      speak("Your order has been placed.")
    }
    if (speakedText.includes("youtube")) {
      window.open("https://www.youtube.com/", "_blank")
    }
    if (speakedText.includes("google")) {
      window.open("https://www.google.com/", "_blank")
    }
    if (speakedText.includes("chrome")) {
      window.open("https://www.chrome.com/", "_blank")
    }
    if (speakedText.includes("who") || speakedText.includes("you")|| speakedText.includes("hu r u")) {
      speak("i am your virtual assistant")
    }
    if (speakedText.includes("dark")) {
      setDark(dark = !dark); dark ? speak("dark theme activated") : speak("light theme activated")
    }
    if (speakedText.includes("light")) {
      setDark(dark = !dark); dark ? speak("dark theme activated") : speak("light theme activated")
    }
    if (speakedText.includes("order") || speakedText.includes("order-section")) {
      setsidecart(true)
    }
    if (speakedText.includes("sidebar")) {
      setsidebar(true)
    }
    if (speakedText.includes("close order") || speakedText.includes("close order-section")) {
      setsidecart(false)
    }
    if (speakedText.includes("close sidebar")) {
      setsidebar(false)
    }
  }

  return (
    <BrowserRouter>
      <div className={`app ${dark ? 'dark-app' : ''}`}>
        <div id='navbar'>
          <Navbar searchQuery={searchQuery} onSearchChange={setSearchQuery} /></div>
        <div className='category category1'>
          <Categories title="All" link="/"> </Categories>
          <Categories title="Mobiles" link="/mobiles"> </Categories>
          <Categories title="Laptops" link="/laptops"> </Categories>
          <Categories title="HeadPhones" link="/headphones"> </Categories>
        </div>
        <Slides />
        <Routes>
          <Route path='/' element={
            <div className='card-container'>
              <FilterCard>
                <Card img={iphone15} pname="Iphone15" discount="-23%" pprice="Rs. 61499/-" oldp="79000"></Card>
                <Card img={lenovothink} pname="Lenovo ThinkPad" pprice="Rs. 17538/-" discount="-65%" oldp="49999"></Card>
                <Card img={jbl} pname="JBL Tune 510BT" pprice="Rs. 2799/-" discount="-37%" oldp="4449"></Card>
                <Card img={dell3530} pname="Dell Inspiron 3530" pprice="Rs. 57490/-" discount="-21%" oldp="72598"></Card>
                <Card img={redmi13} pname="Redmi 13 5G" pprice="Rs. 11973/-" discount="-33%" oldp="17999"></Card>
                <Card img={dell5630} pname="Dell Insprion 5630" pprice="Rs. 64490/-" discount="-29%" oldp="90999"></Card>
                <Card img={sgs23ul} pname="Samsung S23 Ultra" pprice="Rs. 71999/-" discount="-52%" oldp="149999"></Card>
                <Card img={lenovov14} pname="Lenovo V14" pprice="Rs. 37168/-" discount="-26%" oldp="49990"></Card>
                <Card img={redminote13} pname="Redmi Note 13 Pro" pprice="Rs. 18488/-" discount="-40%" oldp="30999"></Card>
                <Card img={acernitro} pname="Acer Nitro V" pprice="Rs. 78999/-" discount="-24%" oldp="103999"></Card>
                <Card img={boultx} pname="Boult X Mustang" pprice="Rs. 2499/-" discount="-64%" oldp="6999"></Card>
                <Card img={hp15} pname="HP 15" pprice="Rs. 54990/-" discount="-23%" oldp="71773"></Card>
                <Card img={iphone16} pname="Iphone16" discount="-9%" pprice="Rs. 72900/-" oldp="79000"></Card>
                <Card img={dell3440} pname="Dell latitude 3440" pprice="Rs. 29990/-" discount="-27%" oldp="40999"></Card>
                <Card img={aceralg} pname="Acer ALG" pprice="Rs. 61990/-" discount="-33%" oldp="92999"></Card>
                <Card img={boultq} pname="Boult Q headphone" pprice="Rs. 1999/-" discount="-67%" oldp="5999"></Card>
                <Card img={acerneo} pname="Acer Predator helios neo 16" pprice="Rs. 143999/-" discount="-9%" oldp="157999"></Card>
                <Card img={sga23} pname="Samsung Galaxy A23" pprice="Rs. 28999/-" discount="-22%" oldp="36999"></Card>
                <Card img={acerswift} pname="Acer Swift 9014" pprice="Rs. 51990/-" discount="-13%" oldp="59999"></Card>
                <Card img={sgs25} pname="Samsung S25 5G" pprice="Rs. 80999/-"></Card>
                <Card img={lenovoslim3} pname="Lenovo IdeaPad Slim 3" pprice="Rs. 64490/-" discount="-26%" oldp="86890"></Card>
                <Card img={iphone13} pname="Iphone13" discount="-25%" pprice="Rs. 52499/-" oldp="69900"></Card>
                <Card img={hp14} pname="HP Pavilion 14" pprice="Rs. 75990/-" discount="-22%" oldp="97867"></Card>
                <Card img={iphone16max} pname="Iphone16 Pro Max" discount="-4%" pprice="Rs. 177900/-" oldp="184900"></Card>
                <Card img={lenovoloq} pname="Lenovo LOQ" pprice="Rs. 65490/-" discount="-21%" oldp="82690"></Card>
                <Card img={dellg15} pname="Dell G15" pprice="Rs. 78990/-" discount="-26%" oldp="106331"></Card>
                <Card img={redminote14} pname="Redmi Note 14 5G" pprice="Rs. 21999/-" discount="-12%" oldp="24999"></Card>
                <Card img={vivov50} pname="Vivo V50 5G" pprice="Rs. 36999/-" discount="-14%" oldp="42999"></Card>
                <Card img={hpvictus} pname="HP Victus" pprice="Rs. 60990/-" discount="-16%" oldp="72718"></Card>
                <Card img={vivoy18t} pname="Vivo Y18t" pprice="Rs. 9499/-" discount="-32%" oldp="13999"></Card>
                <Card img={boat} pname="boAt Rockerz 450" pprice="Rs. 1399/-" discount="-65%" oldp="3990"></Card>
                <Card img={sgs24fe} pname="Samsung S24 FE" pprice="Rs. 59999/-" discount="-29%" oldp="59999"></Card>
                <Card img={hp255} pname="HP Laptop 255" pprice="Rs. 24150/-" discount="-27%" oldp="32999"></Card>
                <Card img={vivot3x} pname="Vivo T3X 5G" pprice="Rs. 13564/-" discount="-29%" oldp="18999"></Card>
                <Card img={vivox200} pname="Vivo X200 Pro" pprice="Rs. 94999/-" discount="-7%" oldp="101999"></Card>
                <Card img={redmia3x} pname="Redmi A3X" pprice="Rs. 7499/-" discount="-32%" oldp="10999"></Card>
              </FilterCard>
            </div>
          }></Route>

          <Route path='/mobiles' element={
            <>
              <div className='category'>
                <Categories title="All" link="/mobiles"> </Categories>
                <Categories title="Iphone" link="/iphone"> </Categories>
                <Categories title="Samsung" link="/samsung"> </Categories>
                <Categories title="Redmi" link="/redmi"> </Categories>
                <Categories title="Vivo" link="/vivo"> </Categories>
              </div>
              <div className='card-container'>
                <FilterCard>
                  <Card img={iphone15} pname="Iphone15" discount="-23%" pprice="Rs. 61499/-" oldp="79000"></Card>
                  <Card img={redminote13} pname="Redmi Note 13 Pro" pprice="Rs. 18488/-" discount="-40%" oldp="30999"></Card>
                  <Card img={vivot3x} pname="Vivo T3X 5G" pprice="Rs. 13564/-" discount="-29%" oldp="18999"></Card>
                  <Card img={iphone16} pname="Iphone16" discount="-9%" pprice="Rs. 72900/-" oldp="79000"></Card>
                  <Card img={redminote14} pname="Redmi Note 14 5G" pprice="Rs. 21999/-" discount="-12%" oldp="24999"></Card>
                  <Card img={sgs23ul} pname="Samsung S23 Ultra" pprice="Rs. 71999/-" discount="-52%" oldp="149999"></Card>
                  <Card img={vivov50} pname="Vivo V50 5G" pprice="Rs. 36999/-" discount="-14%" oldp="42999"></Card>
                  <Card img={redmi13} pname="Redmi 13 5G" pprice="Rs. 11973/-" discount="-33%" oldp="17999"></Card>
                  <Card img={vivoy18t} pname="Vivo Y18t" pprice="Rs. 9499/-" discount="-32%" oldp="13999"></Card>
                  <Card img={iphone13} pname="Iphone13" discount="-25%" pprice="Rs. 52499/-" oldp="69900"></Card>
                  <Card img={sgs24fe} pname="Samsung S24 FE" pprice="Rs. 59999/-" discount="-29%" oldp="59999"></Card>
                  <Card img={vivox200} pname="Vivo X200 Pro" pprice="Rs. 94999/-" discount="-7%" oldp="101999"></Card>
                  <Card img={sga23} pname="Samsung Galaxy A23" pprice="Rs. 28999/-" discount="-22%" oldp="36999"></Card>
                  <Card img={redmia3x} pname="Redmi A3X" pprice="Rs. 7499/-" discount="-32%" oldp="10999"></Card>
                  <Card img={sgs25} pname="Samsung S25 5G" pprice="Rs. 80999/-"></Card>
                  <Card img={iphone16max} pname="Iphone16 Pro Max" discount="-4%" pprice="Rs. 177900/-" oldp="184900"></Card>
                </FilterCard>
              </div>
            </>
          }></Route>

          <Route path='/iphone' element={
            <>
              <div className='category'>
                <Categories title="All" link="/mobiles"> </Categories>
                <Categories title="Iphone" link="/iphone"> </Categories>
                <Categories title="Samsung" link="/samsung"> </Categories>
                <Categories title="Redmi" link="/redmi"> </Categories>
                <Categories title="Vivo" link="/vivo"> </Categories>
              </div>
              <div className='card-container'>
                <FilterCard>
                  <Card img={iphone15} pname="Iphone15" discount="-23%" pprice="Rs. 61499/-" oldp="79000"></Card>
                  <Card img={iphone16} pname="Iphone16" discount="-9%" pprice="Rs. 72900/-" oldp="79000"></Card>
                  <Card img={iphone13} pname="Iphone13" discount="-25%" pprice="Rs. 52499/-" oldp="69900"></Card>
                  <Card img={iphone16max} pname="Iphone16 Pro Max" discount="-4%" pprice="Rs. 177900/-" oldp="184900"></Card>
                </FilterCard>
              </div>
            </>
          }></Route>

          <Route path='/samsung' element={
            <>
              <div className='category'>
                <Categories title="All" link="/mobiles"> </Categories>
                <Categories title="Iphone" link="/iphone"> </Categories>
                <Categories title="Samsung" link="/samsung"> </Categories>
                <Categories title="Redmi" link="/redmi"> </Categories>
                <Categories title="Vivo" link="/vivo"> </Categories>
              </div>
              <div className='card-container'>
                <FilterCard>
                  <Card img={sgs23ul} pname="Samsung S23 Ultra" pprice="Rs. 71999/-" discount="-52%" oldp="149999"></Card>
                  <Card img={sga23} pname="Samsung Galaxy A23" pprice="Rs. 28999/-" discount="-22%" oldp="36999"></Card>
                  <Card img={sgs24fe} pname="Samsung S24 FE" pprice="Rs. 59999/-" discount="-29%" oldp="59999"></Card>
                  <Card img={sgs25} pname="Samsung S25 5G" pprice="Rs. 80999/-"></Card>
                </FilterCard>
              </div>
            </>
          }></Route>

          <Route path='/redmi' element={
            <>
              <div className='category'>
                <Categories title="All" link="/mobiles"> </Categories>
                <Categories title="Iphone" link="/iphone"> </Categories>
                <Categories title="Samsung" link="/samsung"> </Categories>
                <Categories title="Redmi" link="/redmi"> </Categories>
                <Categories title="Vivo" link="/vivo"> </Categories>
              </div>
              <div className='card-container'>
                <FilterCard>
                  <Card img={redmi13} pname="Redmi 13 5G" pprice="Rs. 11973/-" discount="-33%" oldp="17999"></Card>
                  <Card img={redminote13} pname="Redmi Note 13 Pro" pprice="Rs. 18488/-" discount="-40%" oldp="30999"></Card>
                  <Card img={redminote14} pname="Redmi Note 14 5G" pprice="Rs. 21999/-" discount="-12%" oldp="24999"></Card>
                  <Card img={redmia3x} pname="Redmi A3X" pprice="Rs. 7499/-" discount="-32%" oldp="10999"></Card>
                </FilterCard>
              </div>
            </>
          }></Route>

          <Route path='/vivo' element={
            <>
              <div className='category'>
                <Categories title="All" link="/mobiles"> </Categories>
                <Categories title="Iphone" link="/iphone"> </Categories>
                <Categories title="Samsung" link="/samsung"> </Categories>
                <Categories title="Redmi" link="/redmi"> </Categories>
                <Categories title="Vivo" link="/vivo"> </Categories>
              </div>
              <div className='card-container'>
                <FilterCard>
                  <Card img={vivot3x} pname="Vivo T3X 5G" pprice="Rs. 13564/-" discount="-29%" oldp="18999"></Card>
                  <Card img={vivov50} pname="Vivo V50 5G" pprice="Rs. 36999/-" discount="-14%" oldp="42999"></Card>
                  <Card img={vivoy18t} pname="Vivo Y18t" pprice="Rs. 9499/-" discount="-32%" oldp="13999"></Card>
                  <Card img={vivox200} pname="Vivo X200 Pro" pprice="Rs. 94999/-" discount="-7%" oldp="101999"></Card>
                </FilterCard>
              </div>
            </>
          }></Route>

          <Route path='/laptops' element={
            <>
              <div className='category'>
                <Categories title="All" link="/laptops"> </Categories>
                <Categories title="Lenovo" link="/lenovo"> </Categories>
                <Categories title="HP" link="/hp"> </Categories>
                <Categories title="Dell" link="/dell"> </Categories>
                <Categories title="Acer" link="/acer"> </Categories>
              </div>
              <div className='card-container'>
                <FilterCard>
                  <Card img={lenovov14} pname="Lenovo V14" pprice="Rs. 37168/-" discount="-26%" oldp="49990"></Card>
                  <Card img={hp14} pname="HP Pavilion 14" pprice="Rs. 75990/-" discount="-22%" oldp="97867"></Card>
                  <Card img={acerneo} pname="Acer Predator helios neo 16" pprice="Rs. 143999/-" discount="-9%" oldp="157999"></Card>
                  <Card img={dell3530} pname="Dell Inspiron 3530" pprice="Rs. 57490/-" discount="-21%" oldp="72598"></Card>
                  <Card img={lenovoloq} pname="Lenovo LOQ" pprice="Rs. 65490/-" discount="-21%" oldp="82690"></Card>
                  <Card img={hp15} pname="HP 15" pprice="Rs. 54990/-" discount="-23%" oldp="71773"></Card>
                  <Card img={dellg15} pname="Dell G15" pprice="Rs. 78990/-" discount="-26%" oldp="106331"></Card>
                  <Card img={hp255} pname="HP Laptop 255" pprice="Rs. 24150/-" discount="-27%" oldp="32999"></Card>
                  <Card img={dell5630} pname="Dell Insprion 5630" pprice="Rs. 64490/-" discount="-29%" oldp="90999"></Card>
                  <Card img={dell3440} pname="Dell latitude 3440" pprice="Rs. 29990/-" discount="-27%" oldp="40999"></Card>
                  <Card img={lenovoslim3} pname="Lenovo IdeaPad Slim 3" pprice="Rs. 64490/-" discount="-26%" oldp="86890"></Card>
                  <Card img={acerswift} pname="Acer Swift 9014" pprice="Rs. 51990/-" discount="-13%" oldp="59999"></Card>
                  <Card img={hpvictus} pname="HP Victus" pprice="Rs. 60990/-" discount="-16%" oldp="72718"></Card>
                  <Card img={aceralg} pname="Acer ALG" pprice="Rs. 61990/-" discount="-33%" oldp="92999"></Card>
                  <Card img={acernitro} pname="Acer Nitro V" pprice="Rs. 78999/-" discount="-24%" oldp="103999"></Card>
                  <Card img={lenovothink} pname="Lenovo ThinkPad" pprice="Rs. 17538/-" discount="-65%" oldp="49999"></Card>
                </FilterCard>
              </div>
            </>
          }></Route>

          <Route path='lenovo' element={
            <>
              <div className='category'>
                <Categories title="All" link="/laptops"> </Categories>
                <Categories title="Lenovo" link="/lenovo"> </Categories>
                <Categories title="HP" link="/hp"> </Categories>
                <Categories title="Dell" link="/dell"> </Categories>
                <Categories title="Acer" link="/acer"> </Categories>
              </div>
              <div className='card-container'>
                <FilterCard>
                  <Card img={lenovothink} pname="Lenovo ThinkPad" pprice="Rs. 17538/-" discount="-65%" oldp="49999"></Card>
                  <Card img={lenovov14} pname="Lenovo V14" pprice="Rs. 37168/-" discount="-26%" oldp="49990"></Card>
                  <Card img={lenovoslim3} pname="Lenovo IdeaPad Slim 3" pprice="Rs. 64490/-" discount="-26%" oldp="86890"></Card>
                  <Card img={lenovoloq} pname="Lenovo LOQ" pprice="Rs. 65490/-" discount="-21%" oldp="82690"></Card>
                </FilterCard>
              </div>
            </>
          }></Route>

          <Route path='hp' element={
            <>
              <div className='category'>
                <Categories title="All" link="/laptops"> </Categories>
                <Categories title="Lenovo" link="/lenovo"> </Categories>
                <Categories title="HP" link="/hp"> </Categories>
                <Categories title="Dell" link="/dell"> </Categories>
                <Categories title="Acer" link="/acer"> </Categories>
              </div>
              <div className='card-container'>
                <FilterCard>
                  <Card img={hp15} pname="HP 15" pprice="Rs. 54990/-" discount="-23%" oldp="71773"></Card>
                  <Card img={hp255} pname="HP Laptop 255" pprice="Rs. 24150/-" discount="-27%" oldp="32999"></Card>
                  <Card img={hpvictus} pname="HP Victus" pprice="Rs. 60990/-" discount="-16%" oldp="72718"></Card>
                  <Card img={hp14} pname="HP Pavilion 14" pprice="Rs. 75990/-" discount="-22%" oldp="97867"></Card>
                </FilterCard>
              </div>
            </>
          }></Route>

          <Route path='dell' element={
            <>
              <div className='category'>
                <Categories title="All" link="/laptops"> </Categories>
                <Categories title="Lenovo" link="/lenovo"> </Categories>
                <Categories title="HP" link="/hp"> </Categories>
                <Categories title="Dell" link="/dell"> </Categories>
                <Categories title="Acer" link="/acer"> </Categories>
              </div>
              <div className='card-container'>
                <FilterCard>
                  <Card img={dellg15} pname="Dell G15" pprice="Rs. 78990/-" discount="-26%" oldp="106331"></Card>
                  <Card img={dell3530} pname="Dell Inspiron 3530" pprice="Rs. 57490/-" discount="-21%" oldp="72598"></Card>
                  <Card img={dell5630} pname="Dell Insprion 5630" pprice="Rs. 64490/-" discount="-29%" oldp="90999"></Card>
                  <Card img={dell3440} pname="Dell latitude 3440" pprice="Rs. 29990/-" discount="-27%" oldp="40999"></Card>
                </FilterCard>
              </div>
            </>
          }></Route>

          <Route path='acer' element={
            <>
              <div className='category'>
                <Categories title="All" link="/laptops"> </Categories>
                <Categories title="Lenovo" link="/lenovo"> </Categories>
                <Categories title="HP" link="/hp"> </Categories>
                <Categories title="Dell" link="/dell"> </Categories>
                <Categories title="Acer" link="/acer"> </Categories>
              </div>
              <div className='card-container'>
                <FilterCard>
                  <Card img={acernitro} pname="Acer Nitro V" pprice="Rs. 78999/-" discount="-24%" oldp="103999"></Card>
                  <Card img={aceralg} pname="Acer ALG" pprice="Rs. 61990/-" discount="-33%" oldp="92999"></Card>
                  <Card img={acerneo} pname="Acer Predator helios neo 16" pprice="Rs. 143999/-" discount="-9%" oldp="157999"></Card>
                  <Card img={acerswift} pname="Acer Swift 9014" pprice="Rs. 51990/-" discount="-13%" oldp="59999"></Card>
                </FilterCard>
              </div>
            </>
          }></Route>

          <Route path='/headphones' element={
            <div className='card-container'>
              <FilterCard>
                <Card img={jbl} pname="JBL Tune 510BT" pprice="Rs. 2799/-" discount="-37%" oldp="4449"></Card>
                <Card img={boat} pname="boAt Rockerz 450" pprice="Rs. 1399/-" discount="-65%" oldp="3990"></Card>
                <Card img={boultq} pname="Boult Q headphone" pprice="Rs. 1999/-" discount="-67%" oldp="5999"></Card>
                <Card img={boultx} pname="Boult X Mustang" pprice="Rs. 2499/-" discount="-64%" oldp="6999"></Card>
              </FilterCard>
            </div>
          }></Route>
        </Routes>
        <div>
          <FaRobot id='assistant-btn' onClick={() => { recognition.start(); }} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
