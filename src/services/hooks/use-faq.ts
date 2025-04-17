import { useQuery } from "@tanstack/react-query";
import { getFaq } from "../services";
import { useLangStore } from "@/store/lang";

export const useFaq = () => {
  const lang = useLangStore((state) => state.lang);

  const { data, isPending } = useQuery({
    queryKey: ["faq", lang],
    queryFn: () => getFaq(lang),
    select: ({ data }) => data.data,
  });

  return { data, isPending };
};
