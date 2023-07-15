import HeroImage from "../../assets/food/food5.jpeg";
import { Link } from "react-router-dom";
export default function Confirmation() {
  return (
    <header className="confirmation-header">

      <section className="reserve-header-text">
      <h1>Little Lemon</h1>
      <h3>Chicago, Illinois</h3>
      <h2>Your Reservation Has been Confirmed!</h2>
      <h3>A confirmation message has been sent to your email.</h3>
      <h3>Thank you for choosing the Little Lemon restaurant!</h3>
      </section>

      <section className="redirect-buttons">
        <a
          className="redirect-button"
          href={require("../../assets/menu.webp")}
          target="_blank"
          rel="noreferrer"
        >
          Menu
        </a>
        <Link className="redirect-button" to="/">
          Home 
        </Link>
        <Link className="redirect-button" to="/order">
          Order Online
        </Link>

      </section>
    </header>

  );
}
