import { useLangStore } from "@/store/lang";
import { useQuery } from "@tanstack/react-query";
import { getParticipants } from "..";

export const useParticipants = () => {
  const lang = useLangStore((state) => state.lang);

  const { data, isPending } = useQuery({
    queryKey: ["participants"],
    queryFn: () => getParticipants(lang),
    select: ({ data }) => data.data,
  });

  return { data, isPending };
};
