import { Categories as CategoriesEnum } from "../../mocks";
import classes from "./categories.module.css";
import { useAppSelector } from "./../../hooks/useAppSelector";
import { useAppDispatch } from "./../../hooks/useAppDispatch";
import { changeCategory } from "../../store/slicers";

export const Categories = () => {
  const dispatch = useAppDispatch();
  const currentCategory = useAppSelector((state) => state.app.currentCategory);

  return (
    <div className={classes.categoriesWrapper}>
      <h2>Категории:</h2>
      {Object.values(CategoriesEnum).map((category) => {
        return (
          <button
            onClick={() => dispatch(changeCategory(category))}
            className={
              category === currentCategory
                ? `${classes.button} ${classes.activeButton}`
                : classes.button
            }
            key={category}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
