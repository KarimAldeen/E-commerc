import { useState, useEffect } from "react";

export const useTotalData = (data) => {
  
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (data && data?.total) {
      setTotal(data?.total || 0);
    }
  }, [data]);

  return total;
};
