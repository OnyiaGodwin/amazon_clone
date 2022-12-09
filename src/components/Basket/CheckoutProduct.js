import React from "react";

import { useStateValue } from "../../store/StateProvider";
import classes from "./CheckoutProduct.module.css";

import FlipMove from "react-flip-move";

function CheckoutProduct({ id, title, price, image, rating, hideButton }) {
  const [state, dispatch] = useStateValue();

  // const removeItem = (item) => item.filter((id))
  const removeItemFromBasket = () => {
    dispatch({
      type: "REMOVE_ITEM_FORM_BASKET",
      id: id,
    });
  };

  return (
    <FlipMove>
      <div className={classes.checkoutProduct}>
        <img className={classes.checkoutProduct__image} src={image} alt="" />

        <div className={classes.checkoutProduct__info}>
          <p className={classes.checkoutProduct__title}>{title}</p>

          <p className={classes.checkoutProduct__price}>
            <small>$</small>
            <strong>{price}</strong>
          </p>

          <div className={classes.checkoutProduct__rating}>
            {Array(rating)
              .fill()
              .map(() => (
                <p>⭐</p>
              ))}
          </div>
          {!hideButton && (
            <button onClick={removeItemFromBasket}>Remove from Basket</button>
          )}
        </div>
      </div>
    </FlipMove>
  );
}

export default CheckoutProduct;
