import { cn } from "@/lib/utils";
import { FC } from "react";
import { Container } from "../layout";

interface Props {
  className?: string;
}

export const Place: FC<Props> = ({ className }) => {
  return (
    <section
      className={cn(
        "flex lg:flex-row flex-col ;g:pt-0 pt-10 items-center gap-6 relative h-[556px] overflow-hidden",
        className
      )}
    >
      <Container>
        <h3 className="h2 lg:w-[312px] mb-6">Место проведения</h3>
        <p className="p lg:w-[490px] normal">
          Торгово-промышленная палата Туркменистана создана в целях содействия
          развитию экономики Туркменистана, ее интегрированию в мировую
          хозяйственную систему, формированию современной промышленной,
          финансовой и торговой инфраструктуры, создания благоприятных условий
          для предпринимательской деятельности, оказания содействия в
          установлении торгово-экономических, научных и технических связей с
          зарубежными партнерами.
        </p>

        <img
          src="/map.png"
          alt="map"
          className="lg:block hidden absolute top-0 right-0 lg:w-[900px] h-full object-cover"
        />
      </Container>
      <img src="/map.png" alt="map" className="w-full h-auto lg:hidden" />
    </section>
  );
};
