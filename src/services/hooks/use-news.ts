import { useQuery } from "@tanstack/react-query";
import { getNews } from "../";

export const useNews = () => {
  const { data, isPending } = useQuery({
    queryKey: ["news"],
    queryFn: () => getNews(),
    select: ({ data }) => data.data,
  });

  return { data, isPending };
};
