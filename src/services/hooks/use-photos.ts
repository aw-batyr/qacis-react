import { useQuery } from "@tanstack/react-query";
import { getPhotos } from "../services";

export const usePhotos = (id: number) => {
  const { data, isPending } = useQuery({
    queryKey: ["photos", id],
    queryFn: () => getPhotos(id),
    select: ({ data }) => data.data,
  });

  return { data, isPending };
};
