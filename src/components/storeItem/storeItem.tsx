import { FC } from "react";
import { StoreProduct } from "./../../mocks/mockedData";
import classes from "./storeItem.module.css";

type StoreItemProps = Omit<StoreProduct, "id">;

export const StoreItem: FC<StoreItemProps> = ({ price, name, category }) => {
  return (
    <div className={classes.gridRow}>
      <input type="checkbox" />
      <p>{name}</p>
      <p>{category}</p>
      <p>{`${price} ₽`}</p>
    </div>
  );
};
