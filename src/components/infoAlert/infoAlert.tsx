import { useEffect } from "react";
import { useAppSelector } from "../../hooks";
import classes from "./infoAlert.module.css";
import { useAppDispatch } from "./../../hooks/useAppDispatch";
import { changeIsOpenInfoAlert } from "../../store/slicers";

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
