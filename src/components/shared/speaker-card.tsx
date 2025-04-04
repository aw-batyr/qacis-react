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
  about_speaker: string;
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
    <>
      <article
        className={cn(
          "bg-surface_container hover:bg-[#222A32]/[8%] transition-all relative w-full flex flex-col cursor-pointer text-left",
          className
        )}
      >
        <div className="h-[288px] w-full">
          <img
            src={image?.path || "/speaker.svg"}
            alt={name ?? "speaker"}
            className="size-full object-contain"
          />
        </div>

        <div className="mt-4 mx-6 mb-6 flex flex-1 flex-col justify-between">
          <div>
            <h3 className="text-xl">{name}</h3>
            <h5
              className="text-sm text-on_surface_v"
              dangerouslySetInnerHTML={{ __html: job_title ?? "" }}
            />
          </div>
          <div>
            <hr className="border-outline_v my-2" />
            <div className="flex items-center gap-1">
              <img src={image_country?.path} alt={country} />
              <h5>{country}</h5>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
