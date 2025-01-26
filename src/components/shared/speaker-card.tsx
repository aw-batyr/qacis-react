import { cn } from "@/lib/utils";
import { FC } from "react";

interface Props {
  name: string;
  img: string;
  position: string;
  className?: string;
}

export const SpeakerCard: FC<Props> = ({ className, name, position, img }) => {
  return (
    <article className={cn("h-[384px] bg-surface_container", className)}>
      <img
        src={img}
        alt="speaker"
        className="h-[288px] size-full object-cover"
      />

      <div className="mt-4 mx-6 mb-6">
        <h3 className="text-xl">{name}</h3>
        <h5 className="text-sm text-on_surface_v">{position}</h5>
      </div>
    </article>
  );
};
