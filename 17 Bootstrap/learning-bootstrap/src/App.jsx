// import React from "react";
import "./App.css";

function App() {
  let foodItems = ["Dal", "Green veg", "Milk", "Salad", "Fish oil"];
  return (
    // <React.Fragment>
    <>
      <h1>Healthy Food</h1>
      <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item} class="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
    // </React.Fragment>
  );
}

export default App;
