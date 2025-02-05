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
  const { t } = useTranslation("home");

  const buttons = t("buttons", { returnObjects: true }) as Array<{
    text: string;
    link: string;
  }>;

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-end">
          <div className="flex flex-col gap-6 mt-10 md:mt-16">
            <h2 className="h2 text-on_primary">{about.title}</h2>
            <p className="p !text-on_primary_v">{about.paragraph}</p>
            <Link to={"/about"}>
              <Button variant="outline" className="md:w-fit w-full">
                {about.button}
              </Button>
            </Link>
          </div>

          <div className="h-[333px] w-auto rounded-[2px] overflow-hidden">
            <video
              muted
              autoPlay
              loop
              controls
              src="https://qacis.turkmenexpo.com/app/storage/app/media/video/1%20Conference%202025_1.mp4"
              className="size-full object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
