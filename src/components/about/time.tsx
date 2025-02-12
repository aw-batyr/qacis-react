import { cn } from "@/lib/utils";
import { FC } from "react";
import { Container } from "../layout";
import { Loading, TimeCard } from "../shared";
import { useTranslation } from "react-i18next";
import { useExhibitionTime } from "@/services/hooks/use-exhibition-time";

interface Props {
  className?: string;
}

export const Time: FC<Props> = ({ className }) => {
  const { t } = useTranslation("about");
  const { data, isPending } = useExhibitionTime();

  if (isPending) return <Loading />;

  return (
    <section className={cn("bg-surface_container md:py-20 py-10", className)}>
      <Container>
        <h2 className="h2 mb-6">{t("time.title")}</h2>
        <div className="flex flex-col md:flex-row items-center gap-6">
          {data?.map((item, i) => (
            <TimeCard
              bottomClassName="!bg-white rounded-b-[2px]"
              {...item}
              key={i}
              className="w-full"
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
