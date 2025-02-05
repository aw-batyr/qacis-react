import { Container } from "@/components/layout";
import { Loading, NewsCard } from "@/components/shared";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { useNews } from "@/services/hooks/use-news";
import { useLangStore } from "@/store/lang";
import { FC } from "react";

export const News: FC = () => {
  useScrollTop();
  const lang = useLangStore((state) => state.lang);

  const { data, isPending } = useNews();

  if (isPending) return <Loading />;

  return (
    <Container className="page-padding">
      <h1 className="text-center md:text-5xl text-3xl mb-10">
        {lang === "ru" ? "Новости" : "News"}
      </h1>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
        {data?.map((item) => (
          <NewsCard {...item} key={item.title} />
        ))}
      </div>
    </Container>
  );
};
