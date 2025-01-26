import { cn } from "@/lib/utils";
import { FC } from "react";
import { Container } from "../layout";
import { SpeakerCard } from "../shared";
import { Button } from "../ui";

interface Props {
  className?: string;
}

export const Speakers: FC<Props> = ({ className }) => {
  return (
    <section className={cn("my-20", className)}>
      <Container className="flex flex-col gap-6">
        <h2 className="text-3xl">Наши уважаемые спикеры</h2>
        <div className="grid grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <SpeakerCard
              key={i}
              name="Франческо Далавэли"
              position="Генеральный директор компании"
              img="/speaker.svg"
            />
          ))}
        </div>

        <Button variant="outline" className="text-on_surface mx-auto">
          Все спикеры
        </Button>
      </Container>
    </section>
  );
};
