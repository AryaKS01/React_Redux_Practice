import styles from "./Item.module.css";

const Item = ({ foodItem }) => {
  // let { foodItem } = props;
  return (
    <li className={` ${styles["kg-item"]} list-group-item`}>{foodItem}</li>
  );
};

export default Item;
