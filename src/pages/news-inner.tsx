import { Container } from "@/components/layout";
import { Loading, NewsCard } from "@/components/shared";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { useNews } from "@/services/hooks/use-news";
import { useNewsInner } from "@/services/hooks/use-news-inner";
import { useLangStore } from "@/store/lang";
import { FC } from "react";
import { useParams } from "react-router-dom";

export const NewsInner: FC = () => {
  const { id } = useParams();
  const lang = useLangStore((state) => state.lang);

  const pageId = Number(id);
  useScrollTop(pageId);

  const { data, isPending } = useNewsInner(pageId);
  const { data: news } = useNews(lang);

  if (isPending) return <Loading />;

  return (
    <Container className="pt-10 pb-20 md:pt-20 md:pb-[120px]">
      <section className="max-w-[888px] py-5 mx-auto flex flex-col md:gap-10 gap-6">
        <div>
          <h1 className="text-on_surface md:text-[32px] text-3xl leading-10 mb-2">
            {data?.title}
          </h1>
          <h4>
            {data?.published_at.slice(0, 10).split("-").reverse().join(".")}
          </h4>
        </div>

        <div className="w-full h-[300px] md:h-[480px]">
          <img
            src={data?.featured_images[0]?.path || ""}
            alt="news image"
            className="size-full object-cover"
          />
        </div>

        <p className="md:text-lg text-base md:medium normal text-on_surface_v">
          {data?.content}
        </p>
      </section>

      <hr className="mt-10 md:mb-20 mb-[60px]" />

      <section>
        <h2 className="h2 mb-6">Читайте также:</h2>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
          {news
            ?.filter((item) => item.id !== pageId)
            .slice(0, 3)
            .map((item) => (
              <NewsCard {...item} key={item.title} />
            ))}
        </div>
      </section>
    </Container>
  );
};
