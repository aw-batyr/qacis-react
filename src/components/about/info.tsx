import { cn } from "@/lib/utils";
import { FC } from "react";
import { Container } from "../layout";
import { useTranslation } from "react-i18next";

interface Props {
  className?: string;
}

export const Info: FC<Props> = ({ className }) => {
  const { t } = useTranslation("about");

  // Получаем заголовки
  const firstTitle = t("info.first_title");
  const secondTitle = t("info.second_title");

  // Получаем массивы с текстами
  const firstBlock = t("info.first_block", { returnObjects: true }) as Array<{
    text: string;
  }>;
  const secondBlock = t("info.second_block", { returnObjects: true }) as Array<{
    text: string;
  }>;

  return (
    <section className={cn("md:py-20 py-10", className)}>
      <Container className="flex flex-col md:gap-16 gap-8">
        <div className="flex flex-col gap-6">
          <h2 className="h2">{firstTitle}</h2>
          <div className="flex flex-col gap-3 p">
            {firstBlock.map(({ text }, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="h2">{secondTitle}</h2>
          <div className="flex flex-col gap-3 p">
            {secondBlock.map(({ text }, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
