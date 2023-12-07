import { StoreItem } from "../storeItem";
import { useAppSelector } from "./../../hooks";
import classes from "./storeItems.module.css";

export const StoreItems = () => {
  const items = useAppSelector((state) => state.app.items);
  const currentPage = useAppSelector((state) => state.app.currentPage);
  const itemsPerPage = useAppSelector((state) => state.app.itemsPerPage);

  return (
    <div className={classes.gridWrapper}>
      <div className={classes.head}>
        <div />
        <p>Наименование товара</p>
        <p>Категория</p>
        <p>Цена</p>
      </div>
      <div className={classes.body}>
        {[...items]
          .slice(
            currentPage * itemsPerPage - itemsPerPage,
            currentPage * itemsPerPage
          )
          .map(({ id, category, name, price }) => (
            <StoreItem key={id} category={category} name={name} price={price} />
          ))}
      </div>
    </div>
  );
};
