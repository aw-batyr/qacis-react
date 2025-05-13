import { useQuery } from "@tanstack/react-query";
import { getPresentationsCategories } from "../services";
import { useLangStore } from "@/store/lang";

export const usePresentationsCategories = () => {
  const lang = useLangStore((state) => state.lang);

  const { data, isPending } = useQuery({
    queryKey: ["presentaions-categories", lang],
    queryFn: () => getPresentationsCategories(lang),
    select: ({ data }) => data.data,
  });

  return { data, isPending };
};
