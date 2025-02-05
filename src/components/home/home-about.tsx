import { cn } from "@/lib/utils";
import { FC } from "react";
import { Container } from "../layout";
import { Link } from "react-router-dom";
import { Button } from "../ui";
import { useTranslation } from "react-i18next";

interface Props {
  className?: string;
}

export const HomeAbout: FC<Props> = ({ className }) => {
  // Указываем namespace "home"
  const { t } = useTranslation("home");

  // Получаем массив кнопок. Опция returnObjects: true нужна для возврата объектов из массива.
  const buttons = t("buttons", { returnObjects: true }) as Array<{
    text: string;
    link: string;
  }>;

  // Получаем данные секции "about"
  const about = t("about", { returnObjects: true }) as {
    title: string;
    paragraph: string;
    button: string;
  };

  return (
    <section className={cn("bg-[url('/geo-bg.png')] pb-16", className)}>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-6 -mt-5">
          {buttons.map(({ text, link }) => (
            <Link key={text} to={link} className="w-full">
              <Button
                className="bg-alternative w-full hover:bg-alternative/90"
                size="xl"
              >
                {text}
              </Button>
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-6 mt-10 md:mt-16">
          <h2 className="h2 text-on_primary">{about.title}</h2>
          <p className="p !text-on_primary_v">{about.paragraph}</p>
          <Link to={"/about"}>
            <Button variant="outline" className="md:w-fit w-full">
              {about.button}
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};
