import { cn } from "@/lib/utils";
import { Image } from "@/services/types/speakers.type";
import { FC } from "react";

interface Props {
  name: string;
  image: Image | null;
  job_title: string;
  className?: string;
}

export const SpeakerCard: FC<Props> = ({
  className,
  name,
  job_title,
  image,
}) => {
  return (
    <article className={cn("bg-surface_container", className)}>
      <img
        src={image?.path || "/speaker.svg"}
        alt={name ?? "speaker"}
        className="h-[288px] size-full object-cover"
      />

      <div className="mt-4 mx-6 mb-6">
        <h3 className="text-xl">{name}</h3>
        <h5 className="text-sm text-on_surface_v">{job_title}</h5>
      </div>
    </article>
  );
};
