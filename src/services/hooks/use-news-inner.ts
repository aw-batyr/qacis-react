import { useQuery } from "@tanstack/react-query";
import { getNewsInner } from "../";

export const useNewsInner = (id: number, lang: string) => {
  const { data, isPending } = useQuery({
    queryKey: ["news-inner", id, lang],
    queryFn: () => getNewsInner(id, lang),
    select: ({ data }) => data.data,
  });

  return { data, isPending };
};
