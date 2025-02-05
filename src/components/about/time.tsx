import { cn } from "@/lib/utils";
import { FC } from "react";
import { Container } from "../layout";
import { TimeCard } from "../shared";
import { useTranslation } from "react-i18next";

interface Props {
  className?: string;
}

export const Time: FC<Props> = ({ className }) => {
  const { t } = useTranslation("about");

  // Получаем данные времени из i18n
  const times = t("time.items", { returnObjects: true }) as Array<{
    name: string;
    date: string;
  }>;

  return (
    <section
      className={cn("bg-surface_container md:py-[160px] py-10", className)}
    >
      <Container>
        <h2 className="h2 mb-6">{t("time.title")}</h2>
        <div className="flex flex-col md:flex-row items-center gap-6">
          {times.map((item) => (
            <TimeCard
              bottomClassName="!bg-white rounded-b-[2px]"
              {...item}
              key={item.name}
              className="w-full"
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
