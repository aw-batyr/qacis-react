import { FC } from "react";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

interface Props {
  className?: string;
  title?: string;
  contentClassName?: string;
  children: React.ReactNode;
  triggerChildren?: React.ReactNode;
}

export const Modal: FC<Props> = ({
  className,
  title,
  children,
  contentClassName,
  triggerChildren,
}) => {
  return (
    <Dialog>
      <DialogTrigger
        className={cn(
          "h-14 px-3 flex gap-3 items-center hover:bg-slate-300/50 transition-all",
          className
        )}
      >
        {title ? title : triggerChildren}
      </DialogTrigger>

      <DialogContent className={cn("overflow-auto", contentClassName)}>
        {children}
      </DialogContent>
    </Dialog>
  );
};
