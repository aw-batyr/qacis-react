import { cn } from "@/lib/utils";
import { FC } from "react";
import { Container } from "../layout";
import { Loading, NewsCard } from "../shared";
import { Button } from "../ui";
import { useNews } from "@/services/hooks/use-news";
import { Link } from "react-router-dom";

interface Props {
  className?: string;
}

export const News: FC<Props> = ({ className }) => {
  const { data, isPending } = useNews();

  console.log(data);

  return (
    <section className={cn("bg-[url('/geo-bg.png')] py-16", className)}>
      <Container className="flex flex-col gap-8">
        <h3 className="text-3xl text-on_primary">Новости</h3>

        <div className="grid grid-cols-3 gap-6">
          {isPending ? (
            <Loading />
          ) : (
            data
              ?.slice(0, 3)
              .map((item) => (
                <NewsCard
                  className="!bg-[#E0E6EB]"
                  {...item}
                  key={item.title}
                />
              ))
          )}
        </div>

        <Link to="news" className="w-fit mx-auto">
          <Button variant={"outline"}>Все новости</Button>
        </Link>
      </Container>
    </section>
  );
};
