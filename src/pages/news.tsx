import { Container } from "@/components/layout";
import { Loading, NewsCard } from "@/components/shared";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { useNews } from "@/services/hooks/use-news";
import { FC } from "react";

export const News: FC = () => {
  useScrollTop();
  const { data, isPending } = useNews();

  if (isPending) return <Loading />;

  return (
    <Container className="page-padding">
      <h1 className="text-center md:text-5xl text-3xl mb-10">Новости</h1>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
        {data?.map((item) => (
          <NewsCard {...item} key={item.title} />
        ))}
      </div>
    </Container>
  );
};
