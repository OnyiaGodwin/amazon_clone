import React from "react";
import { useNavigate } from "react-router-dom";

import CurrencyFormat from "react-currency-format";

import { useStateValue } from "../../store/StateProvider";
import { getBasketTotal } from "../../store/reducer";
import classes from "./Subtotal.module.css";

function Subtotal() {
  const [state, dispatch] = useStateValue();
  //  console.log("This is for the basket:", state.basket)

  const navigate = useNavigate();

  return (
    <div className={classes.subtotal}>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({state?.basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(state.basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={(e) => navigate("/payment")}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
