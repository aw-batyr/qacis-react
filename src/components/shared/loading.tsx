import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";
import { FC } from "react";

interface Props {
  className?: string;
}

export const Loading: FC<Props> = ({ className }) => {
  return (
    <div className={cn("flex items-center justify-center p-60", className)}>
      <Loader className="animate-spin text-primary size-20" />
    </div>
  );
};
