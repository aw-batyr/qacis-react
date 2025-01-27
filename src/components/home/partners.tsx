import { cn } from "@/lib/utils";
import { FC } from "react";
import { Container } from "../layout";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
interface Props {
  className?: string;
}

const data = [
  {
    logo: "/partners/1.png",
  },
  {
    logo: "/partners/2.png",
  },
  {
    logo: "/partners/3.png",
  },
  {
    logo: "/partners/4.png",
  },
  {
    logo: "/partners/5.png",
  },
  {
    logo: "/partners/6.png",
  },
];

export const Partners: FC<Props> = ({ className }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 2000 }),
  ]);

  return (
    <section className={cn("py-20 bg-surface_container", className)}>
      <Container className="flex flex-col gap-6">
        <h2 className="text-3xl">Партнёры</h2>

        <div
          ref={emblaRef}
          className="embla overflow-hidden flex items-center gap-6"
        >
          <div className="embla__container flex items-center">
            {data.map((item) => (
              <div className="bg-[#E0E6EB] flex embla__slide mr-6 min-w-0 flex-[0_0_288px] items-center justify-center h-[128px] w-full">
                <img src={item.logo} alt="logo" className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
