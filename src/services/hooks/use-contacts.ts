import { useQuery } from "@tanstack/react-query";
import { getContacts } from "../services";
import { useLangStore } from "@/store/lang";

export const useContacts = () => {
  const lang = useLangStore((state) => state.lang);

  const { data, isPending } = useQuery({
    queryKey: ["contacts", lang],
    queryFn: () => getContacts(lang),
    select: ({ data }) => data.data,
  });

  return { data, isPending };
};
