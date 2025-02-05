import { Bron, Info, Place, Program, Theme, Time } from "@/components/about";
import { Cover } from "@/components/layout";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { useLangStore } from "@/store/lang";
import { FC } from "react";

interface Props {
  className?: string;
}

export const About: FC<Props> = ({ className }) => {
  useScrollTop();
  const lang = useLangStore((state) => state.lang);

  return (
    <div className={cn("", className)}>
      <Cover title={lang === "ru" ? "О конференции" : "About Conference"} />
      <Info />
      <Theme />
      <Program />
      <Time />
      <Place />
      <Bron />
    </div>
  );
};
