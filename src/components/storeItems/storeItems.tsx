import { FC } from "react";
import { StoreProduct } from "../../mocks";
import { StoreItem } from "../storeItem";
import { TableHead } from "../tableHead";
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
      <TableHead />
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
