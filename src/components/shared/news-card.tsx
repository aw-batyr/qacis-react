import { cn } from "@/lib/utils";
import { FC } from "react";
import { ArrowRight } from "lucide-react";
import { FeaturedImage } from "@/services/types/news";
import { Link } from "react-router-dom";

interface Props {
  id: number;
  date?: string;
  title?: string;
  featured_images?: FeaturedImage[];
  published_at: string;
  className?: string;
}

export const NewsCard: FC<Props> = ({
  className,
  featured_images,
  title,
  id,
  published_at,
}) => {
  return (
    <Link to={`/news/${id}`}>
      <article
        className={cn("bg-surface_container flex flex-col gap-6", className)}
      >
        <div className="flex flex-col gap-4 px-6 pt-6">
          <div className="flex items-center justify-between">
            <h4>{published_at.slice(0, 10).split("-").reverse().join(".")}</h4>

            <ArrowRight />
          </div>

          <hr />

          <h3 className="text-[20px] leading-[130%] line-clamp-3">{title}</h3>
        </div>

        <img
          src={featured_images?.[0]?.path || ""}
          alt="news image"
          className="w-full h-[220px] object-cover"
        />
      </article>
    </Link>
  );
};
