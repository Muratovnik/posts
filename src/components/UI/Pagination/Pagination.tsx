import UIButton from "@UI/button/UIButton";
import { usePagination } from "@hooks/usePagination";

import classes from "./Padination.module.css";

interface Props {
  totalPages: number;
  currentPage: number;
  changePage: (number: number) => void;
  className?: string;
}

const Pagination = ({
  totalPages,
  currentPage,
  changePage,
  className = "",
}: Props) => {
  const pagesArray = usePagination(totalPages);

  return (
    <div className={`${classes.pagination} ${className}`}>
      {pagesArray.map((page: number, index) => (
        <UIButton
          onClick={() => changePage(page)}
          key={page}
          className={currentPage === page ? classes["current-page"] : ""}
        >
          {page}
        </UIButton>
      ))}
    </div>
  );
};

export default Pagination;
