import React from "react";

import useStateWithUrlParams from "hooks/useStateWithUrlParams";

export const usePaginationWithUrl = () => {
  const [pageParam, setPageParam] = useStateWithUrlParams("page", 1);
  const [page, setPage] = React.useState(
    Math.max(parseInt(pageParam) - 1, 0) || 0
  );

  const handleSetPage = React.useCallback(
    (newValue) => {
      setPage(newValue);
      setPageParam(newValue + 1);
    },
    [setPageParam]
  );

  return {
    page,
    queryPage: page + 1,
    setPage: handleSetPage,
  };
};
