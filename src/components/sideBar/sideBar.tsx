import { SideBarContent } from "../sideBarContent";
import { useAppSelector } from "../../hooks/useAppSelector";
import classes from "./sideBar.module.css";

export const SideBar = () => {
  const isOpenSideBar = useAppSelector((state) => state.app.isOpenSideBar);

  return (
    <div
      className={
        !isOpenSideBar
          ? classes.sideBarWrapper
          : `${classes.sideBarWrapper} ${classes.activeSideBar}`
      }
    >
      {isOpenSideBar && <SideBarContent />}
    </div>
  );
};
