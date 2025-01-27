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
  className?: string;
}

export const NewsCard: FC<Props> = ({
  className,
  featured_images,
  title,
  id,
}) => {
  return (
    <Link to={`/news/${id}`}>
      <article
        className={cn("bg-surface_container flex flex-col gap-6", className)}
      >
        <div className="flex flex-col gap-4 px-6 pt-6">
          <div className="flex items-center justify-between">
            <div>
              <span>17 </span>
              <span>января</span>
            </div>

            <ArrowRight />
          </div>

          <hr />

          <h3 className="text-[20px] leading-[130%] line-clamp-3">{title} </h3>
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
