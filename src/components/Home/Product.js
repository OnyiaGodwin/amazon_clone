 import React from "react";
import { useStateValue } from "../../store/StateProvider";
import classes from "./Product.module.css";

function Product({ id, title, image, price, rating }) {
  const [state, dispatch] = useStateValue(); //Pulling information from data layer

  // console.log("This is the basket >>>", state.basket)

  const addToBasket = () => {
    //dispatch the item into the data layer
    dispatch ({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      }
    })
  }

  return (
    <div className={classes.product}>
      <div className={classes.product__info}>
        <p>{title}</p>
        <p className={classes.product__price}>
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className={classes.product__rating}>
          {/* The line of code below duplicate star emoji according to the value for rating */}
          {/** The star emoji window is add by press 'WindowsKey' + '.' */}
          {Array(rating)
            .fill()
            .map(() => (
                <p key={Math.random()}>⭐</p>
            ))
          }

          {/* {Array(rating)
            .fill()
            .map((_, index) => {
              return <p>⭐</p>;
            })} */}
        </div>
      </div>

      <img src={image} alt={title} />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
