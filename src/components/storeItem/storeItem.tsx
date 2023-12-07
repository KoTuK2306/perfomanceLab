import { FC } from "react";
import { StoreProduct } from "./../../mocks/mockedData";
import { useAppSelector, useAppDispatch } from "../../hooks";
import {
  changeCartItems,
  changeIsOpenInfoAlert,
  changeTextInfoAlert,
} from "../../store/slicers";
import classes from "./storeItem.module.css";

type StoreItemProps = Omit<StoreProduct, "category">;

export const StoreItem: FC<StoreItemProps> = ({ id, price, name }) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.app.cartItems);

  const handleChange = (id: string) => {
    if (cartItems.has(id)) {
      const newItems = new Map(cartItems.entries());
      newItems.delete(id);
      dispatch(changeCartItems(newItems));
      dispatch(changeIsOpenInfoAlert(true));
      dispatch(changeTextInfoAlert("Элемент из корзины успешно удалён"));
      return;
    }
    const newItems = new Map(cartItems.entries());
    newItems.set(id, { id, price, name });
    dispatch(changeCartItems(newItems));
    dispatch(changeIsOpenInfoAlert(true));
    dispatch(changeTextInfoAlert("Элемент в корзину успешно добавлен"));
  };

  return (
    <div className={classes.gridRow}>
      <input
        checked={cartItems.has(id)}
        type="checkbox"
        onChange={() => handleChange(id)}
      />
      <p>{name}</p>
      <p>{`${price} ₽`}</p>
    </div>
  );
};
