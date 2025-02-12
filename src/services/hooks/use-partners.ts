import { useQuery } from "@tanstack/react-query";
import { getPartners } from "../";

export const usePartners = () => {
  const { data, isPending } = useQuery({
    queryKey: ["partners"],
    queryFn: () => getPartners(),
    select: ({ data }) => data.data,
  });

  return { data, isPending };
};
