import { FC } from "react";
import { useMediaQuery } from "usehooks-ts";

export const HomeHero: FC = () => {
  const lg = useMediaQuery("(min-width: 1024px)");
  const md = useMediaQuery("(min-width: 768px)");

  function getBanner() {
    if (lg) return "/banners/ru/lg.jpg";
    else if (md) return "/banners/ru/md.jpg";
    else return "/banners/ru/sm.jpg";
  }

  return (
    <section className="embla">
      <div className="embla__container">
        <div className="embla__slide">
          <img
            src={getBanner()}
            alt="banner"
            className="size-full object-cover lg:max-h-[600px] "
          />
        </div>
      </div>
    </section>
  );
};
