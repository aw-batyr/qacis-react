import { cn } from "@/lib/utils";
import { FC } from "react";
import { Container } from "../layout";

interface Props {
  className?: string;
}

const data = [
  {
    title: "Ключевые сессии и обсуждения",
    subtitle:
      "Эксперты осветят глобальные тренды сертификации, вызовы, с которыми сталкиваются компании, а также инновации, такие как блокчейн и смарт-этикетки, которые становятся неотъемлемой частью процессов сертификации и маркировки.",
  },
  {
    title: "Обучающие семинары",
    subtitle:
      "Эксперты осветят глобальные тренды сертификации, вызовы, с которыми сталкиваются компании, а также инновации, такие как блокчейн и смарт-этикетки, которые становятся неотъемлемой частью процессов сертификации и маркировки.",
  },
  {
    title: "Нетворкинг",
    subtitle:
      "Эксперты осветят глобальные тренды сертификации, вызовы, с которыми сталкиваются компании, а также инновации, такие как блокчейн и смарт-этикетки, которые становятся неотъемлемой частью процессов сертификации и маркировки.",
  },
];

export const Program: FC<Props> = ({ className }) => {
  return (
    <section className={cn("py-20", className)}>
      <Container>
        <h2 className="text-3xl mb-6 text-center">Что вас ждет?</h2>
        <h4 className="text-xl mb-4 normal text-center">
          Конференция предложит насыщенную программу:
        </h4>

        <div className="flex items-center gap-6">
          {data.map((item) => (
            <article className="p-4 rounded-[2px] bg-gradient-to-t from-[#D8E6F3] to-[#EFF5FA]">
              <h4 className="text-xl text-on_primary_container mb-2">
                {item.title}
              </h4>
              <p className="text-base normal  text-on_surface_v">
                {item.subtitle}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};
