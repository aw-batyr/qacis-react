import { useLangStore } from "@/store/lang";
import { useQuery } from "@tanstack/react-query";
import { getStaticWords } from "..";

export const useStaticWords = (id: string) => {
  const lang = useLangStore((state) => state.lang);

  const { data, isPending } = useQuery({
    queryKey: ["static-words", lang, id],
    queryFn: () => getStaticWords(lang, id),
    select: ({ data }) => data.data,
  });

  return { data, isPending };
};
