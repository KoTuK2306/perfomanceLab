import { FC } from "react";
import { StoreProduct } from "../../mocks";
import { StoreItem } from "../storeItem";
import { useAppSelector } from "./../../hooks";
import classes from "./storeItems.module.css";

interface StoreItemsProps {
  items: StoreProduct[];
}

export const StoreItems: FC<StoreItemsProps> = ({ items }) => {
  const currentPage = useAppSelector((state) => state.app.currentPage);
  const itemsPerPage = useAppSelector((state) => state.app.itemsPerPage);

  return (
    <div className={classes.gridWrapper}>
      <div className={classes.head}>
        <div />
        <p>Наименование товара</p>
        <p>Цена</p>
      </div>
      <div className={classes.body}>
        {items
          .slice(
            currentPage * itemsPerPage - itemsPerPage,
            currentPage * itemsPerPage
          )
          .map(({ id, name, price }) => (
            <StoreItem key={id} name={name} price={price} />
          ))}
      </div>
    </div>
  );
};
