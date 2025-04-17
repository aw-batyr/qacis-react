import { useQuery } from "@tanstack/react-query";
import { getSponsors } from "../services";
import { useLangStore } from "@/store/lang";

export const useSponsors = () => {
  const lang = useLangStore((state) => state.lang);

  const { data, isPending } = useQuery({
    queryKey: ["sponsors", lang],
    queryFn: () => getSponsors(lang),
    select: ({ data }) => data.data,
  });

  return { data, isPending };
};
