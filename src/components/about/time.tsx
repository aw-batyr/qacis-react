import { cn } from "@/lib/utils";
import { FC } from "react";
import { Container } from "../layout";
import { TimeCard } from "../shared";

interface Props {
  className?: string;
}

export const times = [
  {
    name: "Монтаж выставки",
    date: "1 — 27 апреля 2025 года",
  },
  {
    name: "Работа",
    date: "29 — 1 мая 2025 года",
  },
  {
    name: "Демонтаж",
    date: "1 — 2 мая 2025 года",
  },
];

export const Time: FC<Props> = ({ className }) => {
  return (
    <section className={cn("bg-surface_container py-[160px]", className)}>
      <Container>
        <h2 className="text-3xl mb-6">Время выставки</h2>
        <div className="flex items-center gap-6">
          {times.map((item) => (
            <TimeCard
              bottomClassName="!bg-white rounded-b-[2px]"
              {...item}
              key={item.name}
              className="w-full"
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
