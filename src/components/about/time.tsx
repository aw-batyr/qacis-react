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
    <section
      className={cn("bg-surface_container md:py-[160px] py-10", className)}
    >
      <Container>
        <h2 className="h2 mb-6">Время работы конференции</h2>
        <div className="flex flex-col md:flex-row items-center gap-6">
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
