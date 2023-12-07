import { Header } from "../../components";
import classes from "./mainPage.module.css";

export const MainPage = () => {
  return (
    <>
      <Header />
      <section className={classes.content} />
    </>
  );
};
