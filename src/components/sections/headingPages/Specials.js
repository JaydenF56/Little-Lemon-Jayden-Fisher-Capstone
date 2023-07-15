import Carousel from './SpecialsCarousel';
import GreekSalad from '../../../assets/food/greek-salad.jpg';
import Bruschetta from '../../../assets/food/bruschetta.jpg';
import LemonDessert from '../../../assets/food/lemon-dessert.jpg';
import SpecialCard from './CardInfo/SpecialCard';

export default function Specials() {
    return (
<section className="specials">
  <article className="specials-topbar">
    <div className="centered-content">
      <a className="action-button" href={require('../../../assets/menu.webp')} target="_blank" rel="noreferrer">Online Menu</a>
    </div>
  </article>

  <section className="specials-cards">
  <SpecialCard
    image={GreekSalad}
    name="Greek Salad"
    price="$15.99"
    description="Indulge in the flavors of the Mediterranean with our refreshing Greek Salad. Crisp lettuce, juicy tomatoes, tangy feta cheese, and briny olives come together in perfect harmony. Tossed with a dash of salt, a hint of hot pepper, and a drizzle of extra virgin olive oil, this salad is a delightful symphony of taste."
  />
  <SpecialCard
    image={Bruschetta}
    name="Bruschetta"
    price="$18.95"
    description="Experience the classic Italian flavors of our Bruschetta. Crispy toasted bread topped with ripe tomatoes, savory prosciutto, and a generous layer of cheese. Each bite is bursting with the perfect balance of textures and flavors. Seasoned with just the right amount of salt and finished with a drizzle of high-quality olive oil, this appetizer is a true delight for your taste buds."
  />
  <SpecialCard
    image={LemonDessert}
    name="Lemon Dessert"
    price="$9.85"
    description="Indulge your sweet tooth with our tantalizing Lemon Dessert. Delicately baked lemon bread coated with a touch of salt and sugar, creating a perfectly balanced combination of sweet and tangy flavors. Each bite is a burst of citrusy goodness, complemented by the subtle hints of lemon zest. This dessert is a delightful finale to your meal, leaving you craving for more."
  />
 </section>
<section className="specials-carousel">
   <Carousel />
   </section>
  </section>
    );
}