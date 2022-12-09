import React from "react";
import { useStateValue } from "../../store/StateProvider";
import classes from "./Checkout.module.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  const selectedCatItem = basket.map((item) => {
    return (
      <CheckoutProduct
        id={item.id}
        title={item.title}
        price={item.price}
        image={item.image}
        rating={item.rating}
      />
    );
  });
  return (
    <div className={classes.checkout}>
      <div className={classes.checkout__left}>
        <img
          className={classes.checkout__ad}
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="add_image"
        />

        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className={classes.checkout__title}>Your shopping Basket</h2>

          {/** List of items added to the basket */}
          {selectedCatItem}
        </div>
      </div>

      <div className={classes.checkout__right}>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
