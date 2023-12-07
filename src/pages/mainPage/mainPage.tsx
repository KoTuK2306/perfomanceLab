import { Header, Pagination, StoreItems } from "../../components";
import classes from "./mainPage.module.css";
import { useAppSelector } from "./../../hooks/useAppSelector";

export const MainPage = () => {
  const items = useAppSelector((state) => state.app.items);
  const itemsPerPage = useAppSelector((state) => state.app.itemsPerPage);

  return (
    <>
      <Header />
      <section className={classes.content}>
        <StoreItems />
        <Pagination pagesCount={Math.ceil(items.length / itemsPerPage)} />
      </section>
    </>
  );
};
