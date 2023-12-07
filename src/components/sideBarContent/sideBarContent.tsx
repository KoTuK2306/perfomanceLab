import { useAppSelector } from "../../hooks";
import classes from "./sideBarContent.module.css";
export const SideBarContent = () => {
  const cartItems = useAppSelector((state) => state.app.cartItems);

  return (
    <>
      <h3>Корзина</h3>
      {[...cartItems.values()].map(({ id, price, name }) => {
        return (
          <div key={id} className={classes.cartItemWrapper}>
            <p>{`${name} ${price}₽`}</p>
            <button className={classes.delete}>
              <img src={"/public/cross.svg"} />
            </button>
          </div>
        );
      })}
    </>
  );
};
