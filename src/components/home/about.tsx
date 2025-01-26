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
        <div className="flex items-center gap-6 -mt-5">
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

        <div className="flex flex-col gap-6 mt-16">
          <h2 className="text-3xl text-on_primary">О конференции</h2>
          <p className="p">
            Как уже неоднократно упомянуто, действия представителей оппозиции
            своевременно верифицированы. Являясь всего лишь частью общей
            картины, непосредственные участники технического прогресса,
            превозмогая сложившуюся непростую экономическую ситуацию, указаны
            как претенденты на роль ключевых факторов. Есть над чем задуматься:
            элементы политического процесса являются только методом
            политического участия и ограничены исключительно образом мышления. В
            целом, конечно, новая модель организационной деятельности в
            значительной степени обусловливает важность соответствующих.
          </p>
          <Button variant="outline" className="w-fit">
            Подробнее
          </Button>
        </div>
      </Container>
    </section>
  );
};
