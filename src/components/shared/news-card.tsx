import { cn } from "@/lib/utils";
import { FC } from "react";
import { ArrowRight } from "lucide-react";

interface Props {
  date?: string;
  title?: string;
  img?: string;
  className?: string;
}

export const NewsCard: FC<Props> = ({ className }) => {
  return (
    <article
      className={cn("bg-surface_container flex flex-col gap-6", className)}
    >
      <div className="flex flex-col gap-4 px-6 pt-6">
        <div className="flex items-center justify-between">
          <div>
            <span>17</span>
            <span>января</span>
          </div>

          <ArrowRight />
        </div>

        <hr />

        <h3 className="text-[20px] leading-[130%]">
          В Ашхабаде прошла встреча Рашида Мередова с помощником министра
          иностранных дел КНР
        </h3>
      </div>

      <img
        src="/news-img.png"
        alt="news image"
        className="size-full object-cover"
      />
    </article>
  );
};
