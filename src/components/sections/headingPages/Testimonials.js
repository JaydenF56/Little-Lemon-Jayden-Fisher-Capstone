import Carousel from './TestimonialCarousel'
import TestimonialCard from './CardInfo/TestimonialCard';
export default function Testimonials() {
    return (
        <section className="testimonials">
            <article className="testimonials-topbar">
                    <h1>Testimonials</h1>
            </article>


            <section className="testimonials-cards">
            <TestimonialCard
      name="Sophia Martinez"
          description="Absolutely delicious! The flavors of the Mediterranean cuisine at Little Lemon are unparalleled."
      />
        <TestimonialCard
        name="Olivia Johnson"
           description="My dog, Luna, couldn't resist the cozy atmosphere and the mouthwatering food at this place."
        />
      <TestimonialCard
    name="Ethan Thompson"
    description="I've tried many Mediterranean restaurants, but Little Lemon sets a new standard with its amazing flavors and textures."
     />
      <TestimonialCard
       name="Emily Wilson"
     description="Friendly staff, delightful ambiance, and a perfect spot to have a family meal."
       />
      <TestimonialCard
     name="Daniel Lee"
        description="After a long day at work, the food here rejuvenated me. Highly recommended!"
        />
        <TestimonialCard
         name="Samantha Rodriguez"
         description="Arriving at Little Lemon after a tiring journey was worth it. The food surpassed my expectations."
        />
            <TestimonialCard
             name="Aiden Campbell"
           description="The food here is outstanding! If you're in Chicago, don't miss the chance to try it out."
    />
            <TestimonialCard
             name="Isabella Roberts"
             description="This restaurant was a lifesaver for me during exam time. I'll definitely be ordering from here again!"
             />
            </section>

            <section className="testimonials-carousel">
                <Carousel />
            </section>
        </section>
    );
}