import {Card} from "./card";
import { HeroCart } from "./hero-cart";
import { CartLayout } from "./main-layout";

export const MainCart = () => {
  return <CartLayout>
    <section className="card">
      <HeroCart/>
    </section>
    <section>
    <Card/>
    </section>
  </CartLayout>;
};
