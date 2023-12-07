import { FC } from "react";
import { StoreProduct } from "./../../mocks/mockedData";
import classes from "./storeItem.module.css";

type StoreItemProps = Omit<StoreProduct, "id" | "category">;

export const StoreItem: FC<StoreItemProps> = ({ price, name }) => {
  return (
    <div className={classes.gridRow}>
      <input type="checkbox" />
      <p>{name}</p>
      <p>{`${price} ₽`}</p>
    </div>
  );
};
