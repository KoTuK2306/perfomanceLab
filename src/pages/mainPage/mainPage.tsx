import { useEffect, useState } from "react";
import {
  Categories,
  Header,
  Pagination,
  SideBar,
  StoreItems,
} from "../../components";
import { Sorting } from "../../enums";
import { StoreProduct } from "../../mocks";
import { sortStoreItems } from "../../utils";
import { useAppSelector } from "../../hooks/useAppSelector";
import classes from "./mainPage.module.css";

export const MainPage = () => {
  const items = useAppSelector((state) => state.app.items);
  const itemsPerPage = useAppSelector((state) => state.app.itemsPerPage);
  const currentCategory = useAppSelector((state) => state.app.currentCategory);
  const sorting = useAppSelector((state) => state.app.sorting);
  const [filteredItems, setFilteredItems] = useState<StoreProduct[]>([]);

  useEffect(() => {
    setFilteredItems(
      items.filter(({ category }) => category === currentCategory)
    );
  }, [currentCategory, items]);

  useEffect(() => {
    if (sorting !== Sorting.UNDEFINED) {
      setFilteredItems(sortStoreItems(filteredItems, sorting));
    }
  }, [sorting]);

  return (
    <>
      <Header />
      <section className={classes.content}>
        <Categories />
        <StoreItems items={filteredItems} />
        <Pagination
          pagesCount={Math.ceil(filteredItems.length / itemsPerPage)}
        />
        <SideBar />
      </section>
    </>
  );
};
