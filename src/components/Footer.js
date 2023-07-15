import { Link } from "react-router-dom";
import facebookImage from '../assets/food/facebook.png';
import instagramImage from '../assets/food/instagram.png';

export default function Footer() {
  return (
    <footer>
      <menu>
        <li className="img-footer">
          <img
            src={require("../assets/footer-logo.png")}
            alt="Little Lemon logo"
          ></img>
        </li>
        <li className="contact">
          <h1 className="footer-header">Navigation</h1>
          <ul className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <a
              href={require("../assets/menu.webp")}
              target="_blank"
              rel="noreferrer"
            >
              Menu
            </a>
            <Link to="/reservations">Reservations</Link>
            <Link to="/order">Order</Link>
            <Link to="/login">Login</Link>
          </ul>
        </li>

        <li>
          <h1 className="footer-header">Contact</h1>
          <ul className="footer-links">
            <li>123 Fake St</li>
            <li>Chicago Illinois</li>
            <br></br>
            <li>(629)-555-5555</li>
            <br></br>
            <a
              href="mailto: info@littlelemon.com"
              target="_blank"
              rel="noreferrer"
            >
              insert email here
            </a>
          </ul>
        </li>
        <li>
          <h1 className="footer-header">Connect</h1>
          <ul className="footer-links">
        <a
         href="https://www.facebook.com/"
         target="_blank"
         rel="noreferrer"
        >
          <img src={facebookImage} alt="Facebook" />
         </a>
         <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={instagramImage} alt="Instagram" />
      </a>
       </ul>
        </li>
      </menu>
    </footer>
  );
}
