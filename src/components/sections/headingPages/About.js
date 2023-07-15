export default function About() {
    return (

        <article className="about-us">
            <section className="hero-text">
                <h1>Little Lemon</h1>
                <h2>Chicago, Illinois</h2>
                <p className="about-subtext">Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario.
                 Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago,
                 and were inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers
                 continue to oversee the Little Lemon restaurant, nearly thirty years later.
                 Their passion for Mediterranean cuisine shines through in every dish,
                 creating an unforgettable dining experience for our guests.</p>
                </section>
                <section className="double-image">
    <img src={require('../../../assets/owners2.jpg')} alt="Little Lemon owners" className="about-image"></img>
  </section>

    </article>
    );
}