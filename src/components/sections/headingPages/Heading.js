import {Link} from 'react-router-dom';
export default function Heading() {
    return (
        <header>
            <article className="call-to-action">
                <section className="hero-text">
                    <h1>Little Lemon</h1>
                    <h2>Chicago, Illinois</h2>
                    <p className="subsection">We are a family owned Mediterranean restaurant, located in Chicago, Illinois. We focus
                    on traditional recipes served with a modern twist. Our talented chefs draw inspiration from the rich culinary heritage of the Mediterranean region, using fresh and high-quality ingredients to create flavorful and delightful dishes. From classic favorites to innovative creations, our menu offers a diverse range of options to satisfy every palate.</p>
                    <br></br>
                    <Link className="action-button" to="/reservations">Book a Table</Link>
                </section>

                <section className="hero-image">
                    <img src={require('../../../assets/food/restaurant.jpg')} alt="Little Lemon restaurant cuisine"></img>
                </section>
            </article>
      </header>
    );
}