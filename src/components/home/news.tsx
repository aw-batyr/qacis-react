import { cn } from "@/lib/utils";
import { FC } from "react";
import { Container } from "../layout";
import { NewsCard } from "../shared";
import { Button } from "../ui";

interface Props {
  className?: string;
}

export const News: FC<Props> = ({ className }) => {
  return (
    <section className={cn("bg-[url('/geo-bg.png')] py-16", className)}>
      <Container className="flex flex-col gap-8">
        <h3 className="text-3xl text-on_primary">Новости</h3>

        <div className="grid grid-cols-3 gap-6">
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>

        <Button variant={"outline"} className="w-fit mx-auto">
          Все новости
        </Button>
      </Container>
    </section>
  );
};
