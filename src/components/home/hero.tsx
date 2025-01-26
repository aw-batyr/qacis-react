import { FC } from "react";

export const HomeHero: FC = () => {
  return (
    <section className="flex flex-col gap-5 h-[600px]">
      <div className="embla">
        <div className="embla__container">
          <div className="embla__slide h-[600px] object-cover">
            <img src="/banner.png" alt="" className="size-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};
