import { StoreItem } from "../storeItem";
import { useAppSelector } from "./../../hooks";
import classes from "./storeItems.module.css";

export const StoreItems = () => {
  const items = useAppSelector((state) => state.app.items);
  console.log(items);

  return (
    <div className={classes.gridWrapper}>
      <div className={classes.head}>
        <div />
        <p>Наименование товара</p>
        <p>Категория</p>
        <p>Цена</p>
      </div>
      <div className={classes.body}>
        {items.map(
          ({ id, category, name, price }) =>
            id < 18 && (
              <StoreItem
                key={id}
                category={category}
                name={name}
                price={price}
              />
            )
        )}
      </div>
    </div>
  );
};
