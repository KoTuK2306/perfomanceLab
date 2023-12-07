import { Arrow } from "../../images";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { Sorting } from "../../enums";
import { changeSorting } from "../../store/slicers";
import classes from "./tableHead.module.css";

export const TableHead = () => {
  const dispatch = useAppDispatch();
  const sorting = useAppSelector((state) => state.app.sorting);

  const handleChangeNameSorting = () => {
    if (sorting !== Sorting.NAME_ASC) {
      dispatch(changeSorting(Sorting.NAME_ASC));
      return;
    }
    dispatch(changeSorting(Sorting.NAME_DESC));
  };

  const handleChangePriceSorting = () => {
    if (sorting !== Sorting.PRICE_ASC) {
      dispatch(changeSorting(Sorting.PRICE_ASC));
      return;
    }
    dispatch(changeSorting(Sorting.PRICE_DESC));
  };

  return (
    <div className={classes.head}>
      <div />
      <button
        onClick={handleChangeNameSorting}
        className={
          sorting === Sorting.NAME_ASC
            ? classes.sortButton
            : `${classes.sortButton} ${classes.rotated}`
        }
      >
        Наименование товара
        {(sorting === Sorting.NAME_ASC || sorting === Sorting.NAME_DESC) && (
          <Arrow />
        )}
      </button>
      <button
        onClick={handleChangePriceSorting}
        className={
          sorting === Sorting.PRICE_ASC
            ? classes.sortButton
            : `${classes.sortButton} ${classes.rotated}`
        }
      >
        Цена
        {(sorting === Sorting.PRICE_ASC || sorting === Sorting.PRICE_DESC) && (
          <Arrow />
        )}
      </button>
    </div>
  );
};
