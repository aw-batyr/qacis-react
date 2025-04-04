import { FC } from "react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  img: string;
  info: string;
  name: string;
}

export const SpeakerModal: FC<Props> = ({ className, img, info, name }) => {
  console.log(name);

  return (
    <div
      className={cn(
        "flex flex-col lg:flex-row lg:h-auto h-[90vh] pb-3 gap-4 !items-start ",
        className
      )}
    >
      <h3 className="text-xl lg:hidden">{name}</h3>
      <div className="flex flex-[0_0_30%] justify-center items-start">
        <img src={img ?? ""} alt={name} className="size-full object-contain" />
      </div>
      <div>
        <h3 className="text-xl hidden lg:block">{name}</h3>
        <hr className="my-4 border-outline_v" />
        <div
          dangerouslySetInnerHTML={{ __html: info ?? "" }}
          className="speaker-modal flex-[0_0_68%] normal !pb-4"
        />
      </div>
    </div>
  );
};
