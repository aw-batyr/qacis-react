import { Bron, Info, Place, Program, Theme, Time } from "@/components/about";
import { Cover } from "@/components/layout";
import { cn } from "@/lib/utils";
import { FC, useEffect } from "react";

interface Props {
  className?: string;
}

export const About: FC<Props> = ({ className }) => {
  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  }, []);

  return (
    <div className={cn("", className)}>
      <Cover title="О конференции" />
      <Info />
      <Theme />
      <Program />
      <Time />
      <Place />
      <Bron />
    </div>
  );
};
