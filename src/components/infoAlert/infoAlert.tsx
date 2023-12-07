import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { changeIsOpenInfoAlert } from "../../store/slicers";
import classes from "./infoAlert.module.css";

export const InfoAlert = () => {
  const dispatch = useAppDispatch();
  const isOpenInfoAlert = useAppSelector((state) => state.app.isOpenInfoAlert);
  const textInfoAlert = useAppSelector((state) => state.app.textInfoAlert);

  useEffect(() => {
    if (isOpenInfoAlert) {
      setTimeout(() => {
        dispatch(changeIsOpenInfoAlert(false));
      }, 1500);
    }
  }, [isOpenInfoAlert]);

  return (
    <>
      {isOpenInfoAlert && (
        <div className={classes.textAlertWrapper}>
          <p>{textInfoAlert}</p>
        </div>
      )}
    </>
  );
};
