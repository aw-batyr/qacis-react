import { cn } from "@/lib/utils";
import { FC } from "react";
import { Container } from "../layout";
import { navBtns } from "../../data";
import { Link } from "react-router-dom";
import { Button } from "../ui";

interface Props {
  className?: string;
}

export const HomeAbout: FC<Props> = ({ className }) => {
  return (
    <section className={cn("bg-[url('/geo-bg.png')] pb-16", className)}>
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-6 -mt-5">
          {navBtns.map(({ title, link }) => (
            <Link key={title} to={link} className="w-full">
              <Button
                className="bg-alternative w-full hover:bg-alternative/90"
                size="xl"
              >
                {title}
              </Button>
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-6 mt-10 md:mt-16">
          <h2 className="h2 text-on_primary">О конференции</h2>
          <p className="p">
            Международная конференция «Гарантия качества в Туркменистане,
            соответствующая международным стандартам» 29–30 апреля, Ашхабад В
            эпоху глобализации, когда соответствие международным стандартам
            становится важнейшим условием успешной работы на мировых рынках,
            проведение специализированных мероприятий, таких как Международная
            конференция «Гарантия качества в Туркменистане, соответствующая
            международным стандартам», приобретает особое значение.
          </p>
          <Link to={"/about"}>
            <Button variant="outline" className="md:w-fit w-full">
              Подробнее
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};
