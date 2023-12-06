import classes from "./circularProgress.module.css";

export const CircularProgress = () => {
  return (
    <svg className={classes.svg}>
      <circle cx="70" cy="70" r="70"></circle>
    </svg>
  );
};
