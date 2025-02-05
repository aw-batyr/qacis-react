import { Language, useLangStore } from "@/store/lang";
import { FC } from "react";
import { useMediaQuery } from "usehooks-ts";

export const HomeHero: FC = () => {
  const lang = useLangStore((state) => state.lang);

  const lg = useMediaQuery("(min-width: 1024px)");
  const md = useMediaQuery("(min-width: 768px)");

  const folder = lang === Language.RU ? Language.RU : Language.EN;

  function getBanner() {
    if (lg) return `/banners/${folder}/lg.jpg`;
    else if (md) return `/banners/${folder}/md.jpg`;
    else return `/banners/${folder}/sm.jpg`;
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
