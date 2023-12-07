import { FC } from "react";
import { StoreProduct } from "./../../mocks/mockedData";
import classes from "./storeItem.module.css";
import { useAppDispatch } from "./../../hooks/useAppDispatch";
import {
  changeIsOpenInfoAlert,
  changeTextInfoAlert,
} from "../../store/slicers";

type StoreItemProps = Omit<StoreProduct, "id" | "category">;

export const StoreItem: FC<StoreItemProps> = ({ price, name }) => {
  const dispatch = useAppDispatch();

  return (
    <div className={classes.gridRow}>
      <input
        type="checkbox"
        onClick={() => {
          dispatch(changeIsOpenInfoAlert(true));
          dispatch(changeTextInfoAlert("Элемент в корзину успешно добавлен"));
        }}
      />
      <p>{name}</p>
      <p>{`${price} ₽`}</p>
    </div>
  );
};
