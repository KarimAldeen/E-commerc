import { useGetQuery } from "./useGetQuery";
import { useEffect, useState } from "react";
import { usePaginationWithURL } from "../../hooks/usePaginationWithURL";

const PER_PAGE = 6;

export const useQueryWithUrlPagination = (
  key,
  url,
  { params = {}, ...options } = {}
) => {
  const { page, setPage, queryPage } = usePaginationWithURL();
  const [total, setTotal] = useState(0);

  const query = useGetQuery(key, url, {
    params: {
      page: queryPage,
      per_page: params?.per_page || PER_PAGE,
      ...params,
    },
    ...options,
  });

  const { data } = query;
  useEffect(() => {
    const totalInData = data?.data?.total;
    if (totalInData >= 0) {
      setTotal(totalInData);
    }
  }, [data]);

  return {
    query,
    pagination: {
      page,
      setPage,
      per_page: params.per_page || PER_PAGE,
      total,
    },
  };
};
