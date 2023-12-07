import { FC } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { changeCurrentPage } from "../../store/slicers";
import classes from "./pageButton.module.css";

interface PageButtonProps {
  pageNumber: number;
}

export const PageButton: FC<PageButtonProps> = ({ pageNumber }) => {
  const currentPage = useAppSelector((state) => state.app.currentPage);
  const dispatch = useAppDispatch();

  return (
    <button
      className={
        currentPage === pageNumber
          ? `${classes.button} ${classes.activeButton}`
          : classes.button
      }
      onClick={() => dispatch(changeCurrentPage(pageNumber))}
    >
      {pageNumber}
    </button>
  );
};
