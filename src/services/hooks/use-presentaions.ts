import { useQuery } from "@tanstack/react-query";
import { getPresentations } from "../services";
import { useLangStore } from "@/store/lang";

export const usePresentations = (id: number) => {
  const lang = useLangStore((state) => state.lang);

  const { data, isPending } = useQuery({
    queryKey: ["presentaions", lang, id],
    queryFn: () => getPresentations(lang, id),
    select: ({ data }) => data.data,
  });

  return { data, isPending };
};
