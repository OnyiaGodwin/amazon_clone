import React from "react";

import { Link } from "react-router-dom";
import { useStateValue } from "../../store/StateProvider";
import classes from "./Header.module.css";
import { auth } from "../../firebase";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { signOut } from "firebase/auth";


function Header() {
  const [state, dispatch] = useStateValue();

  const authenticationHandler = () => {
    if (state.user) {
      //auth.signOut();     //This is for firebase v8 web sdk

      signOut(auth);        //This is for firebase v9 web sdk
    }
  };

  return (
    <div className={classes.header}>
      <Link to="/">
        {/** The Link here makes it possible for you to go to the home page when the amazon image is clicked on */}
        <img
          className={classes.header__logo}
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon_image"
        />
      </Link>

      <div className={classes.header__search}>
        <input className={classes.header__searchInput} type="text" />
        {/** Search Logo */}
        <SearchIcon className={classes.header__searchIcon} />
      </div>

      <div className={classes.header__nav}>
        <Link to={!state.user && "/login"}>
          <div
            onClick={authenticationHandler}
            className={classes.header__option}
          >
            <span className={classes.header__optionLineOne}>
              {state.user ? state.user?.email : "Hello Guest"}
            </span>
            <span className={classes.header__optionLineTwo}>
              {state.user ? "Sign out" : "Sign in"}
            </span>
          </div>
        </Link>

        <Link to="/orders">
          <div className={classes.header__option}>
            <span className={classes.header__optionLineOne}>Returns</span>
            <span className={classes.header__optionLineTwo}>& Orders</span>
          </div>
        </Link>

        <div className={classes.header__option}>
          <span className={classes.header__optionLineOne}>Your</span>
          <span className={classes.header__optionLineTwo}>Prime</span>
        </div>

        <Link to="/checkout">
          <div className={classes.header__optionBasket}>
            <ShoppingBasketIcon />
            <span
              className={`${classes.header__optionLineTwo} ${classes.header__basketCount}`}
            >
              {state?.basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
