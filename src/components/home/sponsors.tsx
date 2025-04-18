import { cn } from "@/lib/utils";
import { FC } from "react";
import { Container } from "../layout";
import { useSponsors } from "@/services/hooks/use-sponsors";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Loading } from "../shared";
import { useTranslation } from "react-i18next";

interface Props {
  className?: string;
}

export const Sponsors: FC<Props> = ({ className }) => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: true,
      duration: 75,
    },
    [Autoplay({ stopOnInteraction: false, delay: 3000 })]
  );

  const { data, isPending } = useSponsors();

  const { t } = useTranslation("home", { keyPrefix: "sponsors" });

  if (isPending) return <Loading />;

  return (
    <section className={cn("py-20 bg-surface_container", className)}>
      <Container className="flex flex-col gap-6">
        <h2 className="text-3xl">{t("title")}</h2>

        <div
          ref={emblaRef}
          className="embla overflow-hidden flex items-center gap-6"
        >
          <div className="embla__container flex items-center">
            {data?.map((item, i) =>
              item.link ? (
                <Link
                  target="_blank"
                  to={item.link}
                  key={i}
                  className="bg-[#E0E6EB] embla__slide mr-6 min-w-0 flex-[0_0_288px] items-center justify-center h-[128px] w-full"
                >
                  <img
                    src={item?.image?.path}
                    alt="logo"
                    className="object-contain"
                  />
                  <div className="bg-secondary_container text-xs text-center py-1 px-2">
                    {item.name}
                  </div>
                </Link>
              ) : (
                <div
                  key={i}
                  className="bg-[#E0E6EB] embla__slide mr-6 min-w-0 flex-[0_0_288px] items-center justify-center min-h-[128px] w-full"
                >
                  <div className="h-[128px] w-full bg-[#E0E6EB]">
                    <img
                      src={item?.image?.path}
                      alt="logo"
                      className="object-contain size-full"
                    />
                  </div>
                  <div className="bg-secondary_container text-xs text-center py-1 px-2">
                    {item.name}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};
