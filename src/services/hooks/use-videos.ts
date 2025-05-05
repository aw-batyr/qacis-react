import { useQuery } from "@tanstack/react-query";
import { useLangStore } from "@/store/lang";
import { getVideos } from "../services";

export const useVideos = () => {
  const lang = useLangStore((state) => state.lang);

  const { data, isPending } = useQuery({
    queryKey: ["photos", lang],
    queryFn: () => getVideos(lang),
    select: ({ data }) => data.data,
  });

  return { data, isPending };
};
