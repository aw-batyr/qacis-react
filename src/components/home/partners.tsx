import { cn } from "@/lib/utils";
import { FC } from "react";
import { Container } from "../layout";

interface Props {
  className?: string;
}

export const Partners: FC<Props> = ({ className }) => {
  return (
    <section className={cn("py-20 bg-surface_container", className)}>
      <Container className="flex flex-col gap-6">
        <h2 className="text-3xl">Партнёры</h2>

        <div className="flex items-center gap-6">
          <div className="bg-[#E0E6EB] h-[128px] w-full" />
          <div className="bg-[#E0E6EB] h-[128px] w-full" />
          <div className="bg-[#E0E6EB] h-[128px] w-full" />
          <div className="bg-[#E0E6EB] h-[128px] w-full" />
        </div>
      </Container>
    </section>
  );
};
