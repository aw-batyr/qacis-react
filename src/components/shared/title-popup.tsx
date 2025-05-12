import { FC } from "react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  triggerValue: string;
}

export const TitlePopup: FC<Props> = ({ className, triggerValue }) => {
  return (
    <div className={cn("relative", className)}>
      <h3>{triggerValue}</h3>
    </div>
  );
};
