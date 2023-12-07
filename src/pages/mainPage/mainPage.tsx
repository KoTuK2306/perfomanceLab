import { useEffect, useState } from "react";
import { Categories, Header, Pagination, StoreItems } from "../../components";
import { StoreProduct } from "../../mocks";
import { useAppSelector } from "./../../hooks/useAppSelector";
import classes from "./mainPage.module.css";

export const MainPage = () => {
  const items = useAppSelector((state) => state.app.items);
  const itemsPerPage = useAppSelector((state) => state.app.itemsPerPage);
  const currentCategory = useAppSelector((state) => state.app.currentCategory);
  const [filteredItems, setFilteredItems] = useState<StoreProduct[]>([]);

  useEffect(() => {
    setFilteredItems(
      items.filter(({ category }) => category === currentCategory)
    );
  }, [currentCategory, items]);

  return (
    <>
      <Header />
      <section className={classes.content}>
        <Categories />
        <StoreItems items={filteredItems} />
        <Pagination
          pagesCount={Math.ceil(filteredItems.length / itemsPerPage)}
        />
      </section>
    </>
  );
};
