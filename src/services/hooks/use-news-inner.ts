import { useQuery } from "@tanstack/react-query";
import { getNewsInner } from "../";

export const useNewsInner = (id: number) => {
  const { data, isPending } = useQuery({
    queryKey: ["news-inner", id],
    queryFn: () => getNewsInner(id),
    select: ({ data }) => data.data,
  });

  return { data, isPending };
};
