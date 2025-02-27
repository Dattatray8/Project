import { FaFacebook, FaInstagram,  FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import './Footer.css';
import { useContext } from "react";
import { datacontext } from "../context/UserContext";

function Footer() {
    let {dark} = useContext(datacontext);
    return (
        <div>
            <footer className={`footer ${dark ? 'dark-footer' : ''}`}>
                <div className="foot-container">
                    <div className="foot-sec">
                        <h2>Shopio</h2>
                        <p>Your trusted online shopping store.</p>
                    </div>
                    <div className="foot-sec">
                        <h3>Quick Shopping</h3>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/mobiles">Mobiles</a></li>
                            <li><a href="/laptops">Laptops</a></li>
                            <li><a href="/headphones">Headphones</a></li>
                        </ul>
                    </div>
                    <div className="foot-sec">
                        <h3>Policies</h3>
                        <ul>
                            <li><a href="/">Privacy Policy</a></li>
                            <li><a href="/">Terms & Conditions</a></li>
                        </ul>
                    </div>
                    <div className="foot-sec">
                        <h3>Follow us</h3>
                        <div className="icons">
                            <a href="https://facebook.com"><FaFacebook /></a>
                            <a href="https://instagram.com"><FaInstagram /></a>
                            <a href="https://twitter.com"><FaXTwitter /></a>
                            <a href="https://linkedin.com"><FaLinkedin /></a>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="foot-bottom">
                    <p>© 2025 Shopio. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;