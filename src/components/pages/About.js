
import Testimonials from "../sections/headingPages/Testimonials";
import Heading from "../sections/headingPages/Heading";
export default function About() {
  return (
    <>
      <Heading />
      <header className="confirmation-header">
      <section className="reserve-header-text">
      <h1>Little Lemon</h1>
                <h2>Chicago, Illinois</h2>
                <p>Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario.
                 Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago,
                 and were inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers
                 continue to oversee the Little Lemon restaurant, nearly thirty years later.
                 Their passion for Mediterranean cuisine shines through in every dish,
                 creating an unforgettable dining experience for our guests.</p>
                </section>
      </header>
      <Testimonials />
    </>
  );
}
