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
      className={cn("py-20 relative h-[384px] overflow-hidden", className)}
    >
      <img
        src="/CTA.png"
        className="absolute top-0 left-0 size-full -z-10 object-cover"
      />

      <Container>
        <h2 className="text-3xl text-center !text-on_primary mb-6">
          Приглашение к участию
        </h2>
        <p className="text-center text-lg text-primary_02 max-w-[808px] mx-auto mb-10">
          Торгово-промышленная палата Туркменистана приглашает бизнес-сообщество
          со всего мира присоединиться к этому уникальному событию, которое
          станет важным шагом к укреплению позиций Туркменистана на глобальной
          экономической арене.
        </p>

        <div className="flex items-center gap-6">
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
