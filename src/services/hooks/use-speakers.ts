import { useQuery } from "@tanstack/react-query";
import { getSpeakers } from "../services";
import { useLangStore } from "@/store/lang";

export const useSpeakers = () => {
  const lang = useLangStore((state) => state.lang);

  const { data, isPending } = useQuery({
    queryKey: ["speakers", lang],
    queryFn: () => getSpeakers(lang),
    select: ({ data }) => data.data,
  });

  return { data, isPending };
};
