import { useMemo } from "react";

export const usePagination = (length: number) => {
  const createdPagination = useMemo(() => {
    return Array.from({ length: length }, (v, i) => i + 1);
  }, [length]);

  return createdPagination;
};
