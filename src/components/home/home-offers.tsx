import { FC, useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Container } from "@/components/layout";
import { EmblaDots, OfferCard } from "../shared";
import { useTranslation } from "react-i18next";

export const HomeOffers: FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start" });
  const [activeIndex, setActiveIndex] = useState(0);

  const { t } = useTranslation("home");

  // Получаем массив офферов из локализации
  const offers = t("offers", { returnObjects: true }) as Array<{
    title: string;
    text: string;
    button: string;
    link?: string;
    img?: string;
  }>;

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
            {offers.map((offer, index) => (
              <OfferCard
                {...offer}
                key={index}
                img={offer.img || `/offer-${index + 1}.png`}
                className="embla__slide flex-[0_0_300px] sm:flex-[0_0_600px]"
                link={
                  index === 0
                    ? "https://qacis.turkmenexpo.com/app/storage/app/media/travel_guide/Travel_guide_ru.pdf"
                    : "https://qacis.turkmenexpo.com/app/storage/app/media/floor%20plan/Floor%20plan.pdf"
                }
              />
            ))}
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
