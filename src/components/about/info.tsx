import { cn } from "@/lib/utils";
import { FC } from "react";
import { Container } from "../layout";

interface Props {
  className?: string;
}

export const Info: FC<Props> = ({ className }) => {
  return (
    <section className={cn("py-20", className)}>
      <Container className="flex flex-col gap-16">
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl">
            Международная конференция «Гарантия качества в Туркменистане
          </h2>
          <div className="flex flex-col gap-3 text-on_surface_v text-lg">
            <p>
              Международная конференция «Гарантия качества в Туркменистане,
              соответствующая международным стандартам» 29–30 апреля, Ашхабад
            </p>
            <p>
              В эпоху глобализации, когда соответствие международным стандартам
              становится важнейшим условием успешной работы на мировых рынках,
              проведение специализированных мероприятий, таких как Международная
              конференция «Гарантия качества в Туркменистане, соответствующая
              международным стандартам», приобретает особое значение.
            </p>
            <p>
              29–30 апреля в Ашхабаде участники конференции соберутся на
              уникальной платформе для обсуждения ключевых тенденций в области
              сертификации и маркировки продукции, обмена опытом и внедрения
              передовых практик. Это мероприятие объединит ведущих экспертов,
              представителей бизнеса и государственных структур для совместного
              обсуждения стратегий повышения качества продукции и ее
              соответствия международным требованиям.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-3xl">Почему это важно для вашего бизнеса?</h2>

          <div className="flex flex-col gap-3 text-on_surface_v text-lg">
            <p>
              В условиях роста конкуренции и усиления требований к качеству
              сертификация становится неотъемлемым элементом успешной
              деятельности.
            </p>
            <p>
              Сертификация продукции – будь то в сфере безопасности, экологии
              или технологий – открывает компании доступ к новым рынкам,
              повышает доверие потребителей и укрепляет конкурентные
              преимущества.
            </p>
            <p>
              Глобальные стандарты диктуют новые правила: от производителей
              требуется соблюдение строгих сертификационных процедур, что делает
              участие в таких форумах ключевым шагом для обновления знаний,
              установления полезных контактов и освоения современных решений в
              области сертификации.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
