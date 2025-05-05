import { FC, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Chevron } from "./";
import { Link } from "react-router-dom";
import { Modal } from "./modal";
import { cn } from "@/lib/utils";
import { useUiStore } from "@/store/ui";
import { SubscribeForm } from "../forms/subscribe-form";

interface Props {
  className?: string;
  triggerClassName?: string;
  title: string;
  color?: string;

  onMenu?: VoidFunction;

  dropDownContent?: {
    modal?: boolean;
    text: string;
    link?: string;
    blank?: boolean;
  }[];
}

export const Menu: FC<Props> = ({
  title,
  dropDownContent,
  color,
  onMenu,
  triggerClassName,
}) => {
  const setBurger = useUiStore((state) => state.setBurger);
  const [open, setOpen] = useState(false);

  return (
    <Popover onOpenChange={() => setOpen(!open)} open={open}>
      <PopoverTrigger
        className={cn(
          "flex items-center gap-2 h-10",
          color === "white" && "text-white",
          triggerClassName
        )}
      >
        {title}
        {<Chevron color={color} />}
      </PopoverTrigger>

      <PopoverContent className="w-fit px-0 py-2 cursor-pointer bg-surface_container">
        {dropDownContent &&
          dropDownContent.map((item) =>
            item.link ? (
              <Link
                onClick={() => {
                  setBurger(false);
                  setOpen(false);
                }}
                className={cn(
                  "h-14 px-3 flex gap-3 items-center hover:bg-slate-300/50 transition-all"
                )}
                key={item.text}
                target={item.blank ? "_blank" : ""}
                to={item.link}
              >
                {item.text}
                {item.blank && <img src="/pdf.svg" />}
              </Link>
            ) : item.modal ? (
              <Modal
                key={item.text}
                title={item.text}
                contentClassName="!max-w-2xl"
              >
                <SubscribeForm className="" modal />
              </Modal>
            ) : (
              <div
                key={item.text}
                className={cn(
                  "h-14 px-3 flex items-center hover:bg-slate-300/50 transition-all"
                )}
                onClick={() => {
                  {
                    setBurger(false);
                    setOpen(false);
                  }
                  onMenu?.();
                }}
              >
                {item.text}
              </div>
            )
          )}
      </PopoverContent>
    </Popover>
  );
};
