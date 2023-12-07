import { Categories as CategoriesEnum } from "../../enums";
import { CategoryButton } from "../categoryButton";
import classes from "./categories.module.css";

export const Categories = () => {
  return (
    <div className={classes.categoriesWrapper}>
      <h2>Категории:</h2>
      {Object.values(CategoriesEnum).map((category) => (
        <CategoryButton category={category} />
      ))}
    </div>
  );
};
