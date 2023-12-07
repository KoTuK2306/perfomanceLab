import { FC } from "react";
import { Categories } from "../../enums";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { changeCategory } from "../../store/slicers";
import classes from "./categoryButton.module.css";

interface CategoryButtonProps {
  category: Categories;
}

export const CategoryButton: FC<CategoryButtonProps> = ({ category }) => {
  const dispatch = useAppDispatch();
  const currentCategory = useAppSelector((state) => state.app.currentCategory);

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
};
