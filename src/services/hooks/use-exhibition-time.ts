import { useQuery } from "@tanstack/react-query";
import { getExhibionTime } from "../";
import { useLangStore } from "@/store/lang";

export const useExhibitionTime = () => {
  const lang = useLangStore((state) => state.lang);

  const { data, isPending } = useQuery({
    queryKey: ["exhibition-time", lang],
    queryFn: () => getExhibionTime(lang),
    select: ({ data }) => data.data,
  });

  return { data, isPending };
};
