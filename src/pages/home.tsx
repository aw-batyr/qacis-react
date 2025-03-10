import { cn } from "@/lib/utils";
import { FC } from "react";
import {
  HomeHero,
  HomeAbout,
  News,
  Partners,
  Contacts,
  HomeOffers,
  SpeakersSection,
} from "../components/home";
import { useScrollTop } from "@/hooks/use-scroll-top";

interface Props {
  className?: string;
}

export const Home: FC<Props> = ({ className }) => {
  useScrollTop();

  return (
    <div className={cn("pb-20", className)}>
      <HomeHero />
      <HomeAbout />
      <HomeOffers />
      <Partners />
      <SpeakersSection section />
      {/* <Sponsors /> */}
      <News />
      <Contacts />
    </div>
  );
};
