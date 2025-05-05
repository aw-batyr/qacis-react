import { useQuery } from "@tanstack/react-query";
import { useLangStore } from "@/store/lang";
import { getPhotos } from "../services";

export const usePhotos = (id: number) => {
  const lang = useLangStore((state) => state.lang);

  const { data, isPending } = useQuery({
    queryKey: ["photos", lang, id],
    queryFn: () => getPhotos(lang, id),
    select: ({ data }) => data.data,
  });

  return { data, isPending };
};
