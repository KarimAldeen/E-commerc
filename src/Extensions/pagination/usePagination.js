import { useState } from "react";

export const usePagination = () => {
  const [page, setPage] = useState(0);

  return {
    page,
    queryPage: page + 1,
    setPage,
  };
};
