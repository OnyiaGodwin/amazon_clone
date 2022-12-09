import React from "react";
import Display from "./Display";

import classes from "./Home.module.css";
import Product from "./Product";

function Home() {
  return (
    <div className={classes.home}>
      <div className={classes.home__container}>
        {/* <img
          className={classes.home__image}
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        /> */}

        <div className={classes.home__image}>
        <Display />
        </div>

        <div className={classes.home__row}>
          {/** Product 1 */}
          <Product
            id="12321341"
            title="The lean startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            image="https://thumb.knygos-static.lt/N89O29vgGvLJS33WddIHbppf3lo=/fit-in/0x800/filters:cwatermark(static/wm.png,500,75,30)/images/books/1164048/517wplljoxl--sx329-bo1-204-203-200-.jpg"
            rating={5}
          />
          {/** Product 2 */}
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            rating={4}
          />
        </div>

        <div className={classes.home__row}>
          {/** Product 1 */}
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            rating={3}
          />
          {/** Product 2 */}
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            rating={5}
          />
          {/** Product 3 */}
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            rating={4}
          />
        </div>

        <div className={classes.home__row}>
          {/** Product 1 */}
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;