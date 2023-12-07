import { useAppSelector, useAppDispatch } from "../../hooks";
import { changeCartItems } from "../../store/slicers";
import classes from "./sideBarContent.module.css";

export const SideBarContent = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.app.cartItems);

  const handleDelete = (id: number) => {
    const newItems = new Map(cartItems.entries());
    newItems.delete(id);
    dispatch(changeCartItems(newItems));
  };

  return (
    <>
      <h3>Корзина</h3>
      {[...cartItems.values()].map(({ id, price, name }) => {
        return (
          <div key={id} className={classes.cartItemWrapper}>
            <p>{`${name} ${price}₽`}</p>
            <button className={classes.delete} onClick={() => handleDelete(id)}>
              <img src={"/cross.svg"} />
            </button>
          </div>
        );
      })}
    </>
  );
};
