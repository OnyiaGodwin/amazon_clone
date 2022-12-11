import React from "react";
import Display from "./Display";

import classes from "./Home.module.css";
import Product from "./Product";

function Home() {
  return (
    <div className={classes.home}>
      <div className={classes.home__container}>
        <div className={classes.home__image}>
          <Display />
        </div>

        <div className={classes.home__row}>
          {/** Product 1 */}
          <Product
            id="12321441"
            title="HP Spectre x360 Convertible Laptop - 16-f0013dx Intel Core i7-11390H 5.0 GHz, Iris Xe Graphics 16 GB 512 PCIe NVMe 16.0-3K+ (3072x1920) Touch W11H Nocturne Blue, 16-16.99 inches"
            price={"2,499.00"}
            image="https://m.media-amazon.com/images/I/511tEZcc6lL._AC_SX425_.jpg"
            rating={5}
          />

          <Product
            id="12321341"
            title='Lenovo IdeaPad Flex 5i 14" Convertible Laptop, FHD (1920 x 1080) Touch Display, Intel Core i5-1135G7 Processor, 8GB DDR4 RAM, 128GB SSD, Intel Iris Xe Graphics, Windows 10, 82HS000FUS, Graphite Grey'
            price={699.99}
            image="https://m.media-amazon.com/images/I/71VoLjTu8OL._AC_SX425_.jpg"
            rating={4}
          />

          <Product
            id="437380145"
            title="Android 12 Tablet, Headwolf WPad 1 10.1 inch Tablet, FHD 1920*1200 Display, MediaTek Octa-core CPU, 4GB RAM 128GB ROM, 8MP+16MP Dual Camera, 5G WiFi, Kid Space Learning Tablet, 6600mAh Battery, BT 5.0"
            price={169.99}
            image="https://m.media-amazon.com/images/I/61jJAQmYb2L._AC_SX425_.jpg"
            rating={3}
          />
        </div>

        <div className={classes.home__row}>
          {/** Product 2 */}
          <Product
            id="123279715"
            title="Hanes Men's Sweatshirt, EcoSmart Fleece Hoodie, Cotton-Blend Fleece Hooded Sweatshirt, Plush Fleece Pullover Hoodie"
            price={39.99}
            image="https://m.media-amazon.com/images/I/61n+vIfzOKL._AC_UL1500_.jpg"
            rating={4}
          />

<Product
            id="90829332"
            title="Amazon Essentials Family Holiday Cotton Pajama Sleepwear"
            price={10.0}
            image="https://m.media-amazon.com/images/I/81dtAPicBSL._AC_UL1500_.jpg"
            rating={4}
          />

          <Product
            id="49538094"
            title="Midea WHD-113FSS1 Compact Refrigerator, 3.1 cu ft, Stainless Steelm"
            price={239.99}
            image="https://m.media-amazon.com/images/I/515la7RinWL._AC_UY218_.jpg"
            rating={4}
          />
        </div>

        <div className={classes.home__row}>
          {/** Product 2 */}
          <Product
            id="12321371"
            title="Roblox Digital Gift Card - 2,200 Robux [Includes Exclusive Virtual Item] [Online Game Code]"
            price={25.0}
            image="https://thumb.knygos-static.lt/N89O29vgGvLJS33WddIHbppf3lo=/fit-in/0x800/filters:cwatermark(static/wm.png,500,75,30)/images/books/1164048/517wplljoxl--sx329-bo1-204-203-200-.jpg"
            rating={4}
          />

          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            rating={4}
          />
        </div>

        <div className={classes.home__row}>
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            rating={3}
          />

          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            rating={5}
          />

          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            rating={4}
          />
        </div>

        <div className={classes.home__row}>
          <Product
            id="90829332127"
            title="iOttie Easy One Touch 5 Dashboard & Windshield Universal Car Mount Phone Holder Desk Stand for -iPhone, Samsung, Moto, Huawei, Nokia, LG, Smartphones"
            price={24.95}
            image="	https://m.media-amazon.com/images/I/61XzOG9rAwL._AC_SX679_.jpg"
            rating={4}
          />

          <Product
            id="9082933245"
            title='Madison Park Essentials Room in a Bag Faux Silk Comforter Set - Luxe Diamond Tufting All Season Bedding, Matching Curtains, Decorative Pillows, Grey King(104"x92") 24 Piece'
            price={188.66}
            image="https://m.media-amazon.com/images/I/81QyUqRes9L._AC_SX569_.jpg"
            rating={4}
          />
          <Product
            id="9082945332"
            title="SAMSUNG 65-Inch Class Crystal 4K UHD AU8000 Series HDR, 3 HDMI Ports, Motion Xcelerator, Tap View, PC on TV, Q Symphony, Smart TV with Alexa Built-In (UN65AU8000FXZA, 2021 Model)"
            price={138.0}
            image="https://m.media-amazon.com/images/I/71yi46Ali0L._AC_SX425_.jpg"
            rating={4}
          />
        </div>

        <div className={classes.home__row}>
          <Product
            id="9082934432127"
            title='Bluey & Bingo 8" Mini Plush Bundle - 2 Pack (13066)'
            price={19.99}
            image="https://m.media-amazon.com/images/I/81ZyH2-jxWL._AC_SX569_.jpg"
            rating={4}
          />

          <Product
            id="908293324545"
            title="Interesting Facts For Curious Minds: 1572 Random But Mind-Blowing Facts About History, Science, Pop Culture And Everything In Between Paperback – July 18, 2022"
            price={14.99}
            image="https://m.media-amazon.com/images/I/518z5dvykPL._SX348_BO1,204,203,200_.jpg"
            rating={4}
          />
        </div>

        <div className={classes.home__row}>
<Product
            id="9082931432"
            title="YODOLLA Convertible Sectional Sofa Couch for Living Room, L Shaped Couch with Reversible Chaise, Grey Modular Sectional Sofa Couch with Ottoman, Grey"
            price={999.98}
            image="https://m.media-amazon.com/images/I/61yEI8CCqFL._AC_SX425_.jpg"
            rating={4}
          />

          <Product
            id="90829332"
            title="Pro Breeze Smart Air Conditioner Portable 10,000 BTU - 1130W Portable Air Conditioner with 4-in-1 Function, 300 Sq Ft Coverage, 24 Hour Timer & Window Venting Kit Included - AC Unit with Wifi & App"
            price={399.99}
            image="https://m.media-amazon.com/images/I/613vvWR-zPS._AC_UY218_.jpg"
            rating={4}
          />
        </div>

        <div className={classes.home__row}>
        <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.99}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
