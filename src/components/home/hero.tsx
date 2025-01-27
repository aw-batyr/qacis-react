import { FC } from "react";

export const HomeHero: FC = () => {
  return (
    <section className="embla">
      <div className="embla__container">
        <div className="embla__slide">
          <img
            src="/banner.png"
            alt="banner"
            className="size-full object-cover max-h-[600px] min-h-[420px]"
          />
        </div>
      </div>
    </section>
  );
};
