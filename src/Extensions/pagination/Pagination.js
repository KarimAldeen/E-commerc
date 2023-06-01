import React from "react";
import classes from "./Pagination.module.scss";
import ReactPaginate from "react-paginate";
import PropTypes from "prop-types";

import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

const Pagination = ({ page, setPage, total, per_page, ...props }) => {
  const [pageCount, setPageCount] = React.useState(0);

  React.useLayoutEffect(() => {
    if (Number.isInteger(total) && total > 0) {
      setPageCount(Math.ceil(total / per_page));
    }
  }, [total, per_page]);

  React.useLayoutEffect(() => {
    if (pageCount > 0 && page >= pageCount) {
      setPage(pageCount - 1);
    }
  }, [page, pageCount, setPage]);

  return (
    <ReactPaginate
      onPageChange={(e) => setPage(e.selected)}
      pageCount={pageCount}
      forcePage={Math.min(page, pageCount - 1)}
      pageRangeDisplayed={2}
      renderOnZeroPageCount={null}
      breakLabel="..."
      nextLabel={<GrLinkNext className={classes.icon} />}
      nextLinkClassName={classes.next}
      previousLabel={<GrLinkPrevious className={classes.icon} />}
      previousLinkClassName={classes.prev}
      containerClassName={classes.pagination}
      activeLinkClassName={classes.active_page}
      disabledLinkClassName={classes.disabled_buton}
      pageLinkClassName={classes.item}
      {...props}
    />
  );
};

Pagination.propTypes = {
  page: PropTypes.number,
  setPage: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  per_page: PropTypes.number.isRequired,
};

export default Pagination;
