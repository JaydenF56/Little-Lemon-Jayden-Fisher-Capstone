import Testimonials from "../sections/headingPages/Testimonials";
import Heading from "../sections/headingPages/Heading";
import About from "../sections/headingPages/About";

export default function Order() {
  return (
    <>
      <Heading />
      <header className="confirmation-header">
      <section className="reserve-header-text">
      <h1>Little Lemon</h1>
      <h3>Chicago, Illinois</h3>
      <h2>Online Menu</h2>
      <h3>This is the online Menu</h3>
      <h3>Food stuff here</h3>
      <h3>Food stuff here</h3>
      <h3></h3>
      </section>
      </header>
      <Testimonials />
      <About />
    </>
  );
}
