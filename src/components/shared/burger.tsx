import { FC, useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui";
import { Link } from "react-router-dom";
import { navData } from "@/data";

interface Props {
  className?: string;
}

export const Burger: FC<Props> = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet onOpenChange={() => setOpen(!open)} open={open}>
      <SheetTrigger>
        <div className="flex flex-col gap-1 lg:hidden items-center justify-center size-10">
          <div className="w-[18px] h-0.5 bg-white rounded-[2px]" />
          <div className="w-[18px] h-0.5 bg-white rounded-[2px]" />
          <div className="w-[18px] h-0.5 bg-white rounded-[2px]" />
        </div>
      </SheetTrigger>

      <SheetContent className="overflow-y-auto">
        <SheetClose />

        <SheetHeader className="mt-16 flex flex-col gap-4">
          <Link to="">
            <Button className="text-base w-full" variant="secondary">
              Официальная поддержка
            </Button>
          </Link>

          <Link to="/B2B-B2G" onClick={() => setOpen(false)}>
            <Button className="text-base w-full bg-reverse_primary hover:bg-reverse_primary/90 text-primary_10">
              B2B | B2G встречи
            </Button>
          </Link>
        </SheetHeader>

        <hr className="opacity-50 mt-10 " />

        <div className="my-5 flex flex-col gap-4"></div>

        <div className="flex flex-col gap-6">
          {navData.map((item) => (
            <Link
              onClick={() => setOpen(false)}
              className="h-10 text-white"
              key={item.title}
              to={item.link}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};
