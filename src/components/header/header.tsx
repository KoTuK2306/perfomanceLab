import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { changeIsOpenSideBar } from "../../store/slicers";
import classes from "./header.module.css";

export const Header = () => {
  const dispatch = useAppDispatch();
  const isOpenSideBar = useAppSelector((state) => state.app.isOpenSideBar);

  return (
    <header className={classes.header}>
      <img src="/logo.svg"></img>
      <h1>Тестовое задание</h1>
      <button
        className={classes.burger}
        onClick={() => dispatch(changeIsOpenSideBar(!isOpenSideBar))}
      >
        <img src="/shoppingCart.svg" />
      </button>
    </header>
  );
};
