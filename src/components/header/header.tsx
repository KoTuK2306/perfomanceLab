import { BurgerLogo } from "../../images";
import classes from "./header.module.css";

export const Header = () => {
  return (
    <header className={classes.header}>
      <img src="/logo.svg"></img>
      <h1>Тестовое задание</h1>
      <button className={classes.burger}>
        <BurgerLogo />
      </button>
    </header>
  );
};
