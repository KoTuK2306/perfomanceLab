import { CircularProgress } from "../../components";
import classes from "./loadingPage.module.css";

export const LoadingPage = () => {
  return (
    <div className={classes.mainWrapper}>
      <CircularProgress />
    </div>
  );
};
