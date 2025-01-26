import { cn } from "@/lib/utils";
import { FC } from "react";
import {
  HomeHero,
  HomeAbout,
  Speakers,
  Sponsors,
  News,
  Partners,
  Contacts,
} from "../components/home";

interface Props {
  className?: string;
}

export const Home: FC<Props> = ({ className }) => {
  return (
    <div className={cn("pb-[120px]", className)}>
      <HomeHero />
      <HomeAbout />
      <Speakers />
      <Sponsors />
      <News />
      <Partners />
      <Contacts />
    </div>
  );
};
