import "./App.css";
import React, { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (item) => {
    const newItem = { name: item.name, price: item.price };
    setCart([...cart, newItem]);
  };

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="App">
      <div className="Main">
        <h1>Brooke's Bakery</h1>{" "}
        <div className="itemList">
          {bakeryData.map((item, index) => (
            <BakeryItem key={index} item={item} add={() => addToCart(item)} />
          ))}
        </div>
        <div></div>
      </div>
      <div className="Cart">
        <div className="wrapper">
          <h2>Cart</h2>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price}
              </li>
            ))}
            <li>
              <span className="total-label">Total:</span> ${total.toFixed(2)}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
//  looking at changes
