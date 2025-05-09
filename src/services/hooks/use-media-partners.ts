import { useQuery } from "@tanstack/react-query";
import { getMediaPartners } from "../services";

export const useMediaPartners = () => {
  const { data, isPending } = useQuery({
    queryKey: ["partners"],
    queryFn: () => getMediaPartners(),
    select: ({ data }) => data.data,
  });

  return { data, isPending };
};
