// import React from "react";
import "./App.css";
import Item from "./components/Item";

function App() {
  let foodItems = ["Dal", "Green veg", "Milk", "Salad", "Fish oil"];
  return (
    // <React.Fragment>
    <>
      <h1>Healthy Food</h1>
      <ul className="list-group">
        {foodItems.map((item) => (
          <Item key={item} foodItem={item}></Item>
        ))}
      </ul>
    </>
    // </React.Fragment>
  );
}

export default App;
