import { cn } from "@/lib/utils";
import { FC } from "react";
import { Container } from "../layout";
import { TimeCard } from "../shared";

interface Props {
  className?: string;
}

export const times = [
  {
    name: "День регистрации",
    date: "28 апреля 2025 года",
  },
  {
    name: "День 1",
    date: "29 апреля 2025 года",
  },
  {
    name: "День 2",
    date: "30 апреля 2025 года",
  },
];

export const Time: FC<Props> = ({ className }) => {
  return (
    <section className={cn("bg-surface_container py-[160px]", className)}>
      <Container>
        <h2 className="text-3xl mb-6">Время работы конференции</h2>
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
