import { cn } from "@/lib/utils";
import { FC } from "react";
import { Container } from "../layout";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useLangStore } from "@/store/lang";
import { usePartners } from "@/services/hooks/use-partners";
import { Loading } from "../shared";

export const Partners: FC = () => {
  const lang = useLangStore((state) => state.lang);
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 2000 }),
  ]);

  const { data, isPending } = usePartners();

  if (isPending) return <Loading />;

  return (
    <section className={cn("py-20 bg-surface_container")}>
      <Container className="flex flex-col gap-6">
        <h2 className="text-3xl">{lang === "ru" ? "Партнёры" : "Partners"}</h2>

        <div
          ref={emblaRef}
          className="embla overflow-hidden flex items-center gap-6"
        >
          <div className="embla__container flex items-center">
            {data?.map((item, i) => (
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
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
