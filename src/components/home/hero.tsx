import { FC } from "react";

export const HomeHero: FC = () => {
  return (
    <section className="embla">
      <div className="embla__container">
        <div className="embla__slide">
          <img
            src="/banner.png"
            alt="banner"
            className="size-full object-cover md:max-h-[600px] md:min-h-[420px] max-h-[420px] min-h-[355px]"
          />
        </div>
      </div>
    </section>
  );
};
