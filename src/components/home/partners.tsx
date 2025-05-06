import { cn } from "@/lib/utils";
import { FC } from "react";
import { Container } from "../layout";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useLangStore } from "@/store/lang";
import { usePartners } from "@/services/hooks/use-partners";
import { Loading } from "../shared";
import { Link } from "react-router-dom";

export const Partners: FC = () => {
  const lang = useLangStore((state) => state.lang);
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: true,
      duration: 75,
    },
    [Autoplay({ stopOnInteraction: false, delay: 3000 })]
  );

  const { data, isPending } = usePartners();

  if (isPending) return <Loading />;

  return (
    <section className={cn("py-20 bg-surface_container")}>
      <Container className="flex flex-col gap-6">
        <h2 className="text-3xl">{lang === "ru" ? "Партнёры" : "Partners"}</h2>

        <div ref={emblaRef} className="embla overflow-hidden">
          <div className="embla__container flex">
            {data?.map((item, i) =>
              item.link ? (
                <Link
                  target="_blank"
                  to={item.link}
                  key={i}
                  className="bg-[#E0E6EB] flex embla__slide mr-6 min-w-0 flex-[0_0_288px] items-center justify-center h-[128px] w-full"
                >
                  <img
                    src={item?.image?.path}
                    alt="logo"
                    className="object-contain"
                  />
                </Link>
              ) : (
                <div
                  key={i}
                  className="bg-[#E0E6EB] flex embla__slide mr-6 min-w-0 flex-[0_0_288px] items-center justify-center h-[128px] w-full"
                >
                  <img
                    src={item?.image?.path}
                    alt="logo"
                    className="object-contain"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};
