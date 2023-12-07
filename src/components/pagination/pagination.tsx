import { FC, useEffect, useState } from "react";
import { PageButton } from "../pageButton";
import classes from "./pagination.module.css";

interface PaginationProps {
  pagesCount: number;
}

export const Pagination: FC<PaginationProps> = ({ pagesCount }) => {
  const [pages, setPages] = useState<number[]>([]);

  useEffect(() => {
    for (let i = 0; i < pagesCount; i++) {
      setPages((prevState) => [...prevState, i + 1]);
    }
  }, [pagesCount]);

  return (
    <div className={classes.paginationWrapper}>
      {pages.map((number) => {
        return <PageButton key={number} pageNumber={number} />;
      })}
    </div>
  );
};
