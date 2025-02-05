import { cn } from "@/lib/utils";
import { FC } from "react";
import { Container } from "../layout";
import { useTranslation } from "react-i18next";

interface Props {
  className?: string;
}

export const Theme: FC<Props> = ({ className }) => {
  const { t } = useTranslation("about");

  const title = t("theme.title");

  const items = t("theme.items", { returnObjects: true }) as Array<{
    title: string;
    subtitle: string;
    icon: string;
  }>;

  const paragraphs = t("theme.paragraphs", { returnObjects: true }) as Array<{
    text: string;
  }>;

  return (
    <section className={cn("bg-surface_container md:py-20 py-10", className)}>
      <Container className="flex flex-col gap-6 md:gap-10">
        <h2 className="h2">{title}</h2>

        <div className="flex flex-col md:flex-row items-center gap-6">
          {items.map((item) => (
            <div key={item.title} className="flex items-center gap-4 w-full">
              <img
                src={item.icon}
                alt="theme icon"
                className="size-12 md:size-auto"
              />
              <div>
                <h4 className="text-lg text-primary mb-2">{item.title}</h4>
                <h5 className="text-on_surface_v text-base">{item.subtitle}</h5>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 p">
          {paragraphs.map((item, index) => (
            <p key={index}>{item.text}</p>
          ))}
        </div>
      </Container>
    </section>
  );
};
