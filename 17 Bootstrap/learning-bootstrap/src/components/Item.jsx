import styles from "./Item.module.css";

const Item = ({ foodItem }) => {
  // let { foodItem } = props;
  const handleBuyButtonClicked = (event) => {
    console.log(event);
    console.log(`${foodItem} being bought`);
  };

  return (
    <li className={` ${styles["kg-item"]} list-group-item`}>
      {foodItem}
      <button
        className={`${styles.button} btn btn-info`}
        onClick={(event) => handleBuyButtonClicked(event)}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
