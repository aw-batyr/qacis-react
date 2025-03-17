import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "usehooks-ts";

export const HomeHero: FC = () => {
  const { t } = useTranslation("home");

  const lg = useMediaQuery("(min-width: 1024px)");
  const md = useMediaQuery("(min-width: 768px)");

  function getBanner() {
    if (lg) return t("banners.lg");
    else if (md) return t("banners.md");
    else return t("banners.sm");
  }

  return (
    <section className="embla">
      <div className="embla__container">
        <div className="embla__slide">
          <img
            src={getBanner()}
            alt="banner"
            className="size-full object-cover lg:max-h-[600px]"
          />
        </div>
      </div>
    </section>
  );
};
