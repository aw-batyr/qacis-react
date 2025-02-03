import { FC, useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Container } from "@/components/layout";
import { EmblaDots, OfferCard } from "../shared";

export const HomeOffers: FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start" });
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) {
        emblaApi.scrollTo(index);
      }
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setActiveIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="bg-surface_high py-10 relative overflow-hidden">
      <Container>
        <div ref={emblaRef} className="embla">
          <div className="mb-4 flex gap-6 embla__container">
            <OfferCard
              img="/offer-1.png"
              className="embla__slide flex-[0_0_300px] sm:flex-[0_0_600px]"
              title="Гостиницы, трансфер, визы"
              btnText="Скачать путеводитель"
              link="https://qacis.turkmenexpo.com/app/storage/app/media/travel_guide/Travel_guide_ru.pdf"
              text="По вопросам размещения в гостиницах, визовой поддержки, транспортного и экскурсионного обслуживания Вы можете ознакомиться с путеводителем"
            />
            <OfferCard
              link="https://qacis.turkmenexpo.com/app/storage/app/media/floor%20plan/Floor%20plan.pdf"
              img="/offer-2.png"
              btnText="Скачать план выставки"
              className="embla__slide flex-[0_0_300px] sm:flex-[0_0_600px]"
              title="Ознакомьтесь с планом выставки ITSE 2025"
              text="Как выбрать лучшее место на выставке? Вы всегда должны помнить, что удачное расположение выставочной экспозиции повышает Ваши шансы привлечь внимание Ваших потенциальных клиентов"
            />
          </div>

          <EmblaDots
            className="lg:hidden"
            scrollTo={scrollTo}
            active={activeIndex}
            slides={2}
          />
        </div>
      </Container>
    </section>
  );
};
