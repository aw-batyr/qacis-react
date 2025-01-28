import { cn } from "@/lib/utils";
import { FC } from "react";
import { Container } from "../layout";

interface Props {
  className?: string;
}

const data = [
  {
    title: "Бизнесменам,",
    subtitle: "стремящимся к выходу на международные рынки",
    icon: "/theme-1.svg",
  },
  {
    title: "Сертификационным органам,",
    subtitle: "работающим над внедрением инновационных стандартов",
    icon: "/theme-2.svg",
  },
  {
    title: "Потребителям,",
    subtitle: "заинтересованным в повышении качества продукции",
    icon: "/theme-3.svg",
  },
];

export const Theme: FC<Props> = ({ className }) => {
  return (
    <section className={cn("bg-surface_container md:py-20 py-10", className)}>
      <Container className="flex flex-col gap-6 md:gap-10">
        <h2 className="h2">Кому будет полезно?</h2>

        <div className="flex flex-col md:flex-row items-center gap-6">
          {data.map((item) => (
            <div key={item.title} className="flex items-center gap-4 w-full">
              <img
                src={item.icon}
                alt="theme icon"
                className="size-12 md:size-auto"
              />

              <div>
                <h4 className="text-lg text-primary mb-2">{item.title}</h4>
                <h5 className="text-on_surface_v text-base">{item.subtitle}</h5>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 p">
          <p>
            Конференция станет значимым событием, укрепляющим позиции
            Туркменистана на мировой арене, способствующим развитию
            бизнес-процессов и открывающим новые перспективы для роста.
          </p>
          <p>
            Мероприятие пройдет в течение двух дней в Ашхабаде. Дополнительно
            перед основной программой будут организованы обучающие семинары,
            чтобы участники смогли глубже разобраться в темах конференции.
          </p>
        </div>
      </Container>
    </section>
  );
};
