import { useQuery } from "@tanstack/react-query";
import { getVideos } from "../services";

export const useVideos = (id: number) => {
  const { data, isPending } = useQuery({
    queryKey: ["photos"],
    queryFn: () => getVideos(id),
    select: ({ data }) => data.data,
  });

  return { data, isPending };
};
