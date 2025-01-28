import { cn } from "@/lib/utils";
import { FC } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Container } from "../layout";

interface Props {
  className?: string;
}

export const Bron: FC<Props> = ({ className }) => {
  return (
    <section
      className={cn("md:py-20 py-10 relative overflow-hidden", className)}
    >
      <img
        src="/CTA.png"
        className="absolute top-0 left-0 size-full -z-10 object-cover"
      />

      <Container>
        <h2 className="h2 text-center !text-on_primary md:mb-6 mb-1.5">
          Приглашение к участию
        </h2>
        <p className="text-center md:text-lg text-sm md:text-primary_02 text-primary_02/60 max-w-[808px] mx-auto mb-10">
          Торгово-промышленная палата Туркменистана приглашает бизнес-сообщество
          со всего мира присоединиться к этому уникальному событию, которое
          станет важным шагом к укреплению позиций Туркменистана на глобальной
          экономической арене.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-6">
          <Link to={"/delegate-form"} className="w-full">
            <Button className="w-full bg-white text-primary hover:bg-white/90 ">
              Стать делегатом
            </Button>
          </Link>
          <Link to={"/B2B-B2G"} className="w-full">
            <Button className="w-full bg-white text-primary hover:bg-white/90">
              B2B | B2G встречи
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};
