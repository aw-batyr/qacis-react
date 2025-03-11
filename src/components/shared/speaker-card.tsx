import { cn } from "@/lib/utils";
import { Image } from "@/services/types/speakers.type";
import { FC } from "react";

interface Props {
  name: string;
  image: Image | null;
  job_title: string;
  className?: string;
  country?: string;
  image_country: Image | null;
}

export const SpeakerCard: FC<Props> = ({
  className,
  name = "",
  job_title = "",
  image = { path: "" },
  country = "",
  image_country = { path: "" },
}) => {
  return (
    <article
      className={cn("bg-surface_container relative flex flex-col", className)}
    >
      <img
        src={image?.path || "/speaker.svg"}
        alt={name ?? "speaker"}
        className="h-[288px] w-full object-cover"
      />

      <div className="mt-4 mx-6 mb-6 flex flex-1 flex-col justify-between">
        <div>
          <h3 className="text-xl">{name}</h3>
          <h5
            className="text-sm text-on_surface_v"
            dangerouslySetInnerHTML={{ __html: job_title ?? "" }}
          />
        </div>
        <div>
          {" "}
          {/* Убрано h-full */}
          <hr className="border-outline_v my-2" />
          <div className="flex items-center gap-1">
            <img src={image_country?.path} alt={country} />
            <h5>{country}</h5>
          </div>
        </div>
      </div>
    </article>
  );
};
