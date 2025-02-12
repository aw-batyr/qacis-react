import { cn } from "@/lib/utils";
import { FC } from "react";
import { Container } from "../layout";
import { useTranslation } from "react-i18next";

interface Props {
  className?: string;
}

export const Place: FC<Props> = ({ className }) => {
  const { t } = useTranslation("about");

  const items = t("venue.items", { returnObjects: true }) as string[];

  return (
    <section className={cn(" gap-6 relative overflow-hidden", className)}>
      <Container className="md:py-20 py-10 grid-cols-1 lg:grid-cols-2 lg:gap-12 gap-0 grid">
        <div className="">
          <h3 className="h2 mb-6 xl:max-w-[496px]">{t("venue.title")}</h3>
          <div className="flex flex-col gap-6">
            {items.map((item, i) => (
              <p
                key={i}
                className="text-lg text-on_surface_v normal xl:max-w-[496px]"
              >
                {item}
              </p>
            ))}
          </div>
        </div>

        <div className="h-full max-size-[600px] flex-[0_0_50%]">
          <img
            src="/about-place.jpg"
            alt="venue"
            className="size-full object-contain"
          />
        </div>
      </Container>
    </section>
  );
};
