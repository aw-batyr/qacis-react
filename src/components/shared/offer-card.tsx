import { cn } from "@/lib/utils";
import { FC } from "react";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";

interface Props {
  title: string;
  text: string;
  className?: string;
  img: string;
}

export const OfferCard: FC<Props> = ({ className, title, text, img }) => {
  return (
    <article
      className={cn(
        "sm:px-8 sm:py-6 p-4 relative overflow-hidden h-[296px] sm:w-full w-[300px] text-on_primary",
        className
      )}
    >
      <div className="absolute size-full z-10  top-0 left-0 bg-gradient-to-r from-25% from-primary to-primary/20 " />
      <img
        src={img}
        className="absolute size-full top-0 right-0 object-cover"
      />

      <div className="relative z-20 h-full">
        <h4 className="sm:text-2xl text-lg mb-4 max-w-[444px] z-20 h-16">
          {title}
        </h4>
        <p className="sm:text-base text-sm normal max-w-[360px] z-20">{text}</p>

        <Button
          className="text-sm text-white absolute bottom-0 left-0 px-0 mt-4 py-1.5 z-20"
          variant={"link"}
        >
          Скачать PDF <ArrowUpRight />
        </Button>
      </div>
    </article>
  );
};
