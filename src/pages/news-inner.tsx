import { Container } from "@/components/layout";
import { Loading, NewsCard } from "@/components/shared";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { useNews } from "@/services/hooks/use-news";
import { useNewsInner } from "@/services/hooks/use-news-inner";
import { FC } from "react";
import { useParams } from "react-router-dom";

export const NewsInner: FC = () => {
  const { id } = useParams();

  const pageId = Number(id);
  useScrollTop(pageId);

  const { data, isPending } = useNewsInner(pageId);
  const { data: news } = useNews();

  if (isPending) return <Loading />;

  return (
    <Container className="py-20 pb-[120px]">
      <section className="w-[868px] mx-auto flex flex-col gap-10">
        <div>
          <h1 className="text-on_surface text-[32px] leading-10">
            {data?.title}
          </h1>
          <h4>{data?.published_at}</h4>
        </div>

        <div className="w-full h-[480px]">
          <img
            src={data?.featured_images[0]?.path || ""}
            alt="news image"
            className="size-full object-cover"
          />
        </div>

        <p className="text-lg text-on_surface_v">{data?.content}</p>
      </section>

      <hr className="mt-10 mb-20" />

      <section>
        <h2 className="text-3xl mb-6">Читайте также:</h2>
        <div className="grid grid-cols-3 gap-6">
          {news?.slice(0, 3).map((item) => (
            <NewsCard {...item} key={item.title} />
          ))}
        </div>
      </section>
    </Container>
  );
};
