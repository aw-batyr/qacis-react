import { cn } from "@/lib/utils";
import { FC, useEffect } from "react";
import {
  HomeHero,
  HomeAbout,
  News,
  Partners,
  Contacts,
} from "../components/home";

interface Props {
  className?: string;
}

export const Home: FC<Props> = ({ className }) => {
  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  }, []);

  return (
    <div className={cn("pb-20", className)}>
      <HomeHero />
      <HomeAbout />
      <Partners />
      {/* <Speakers /> */}
      {/* <Sponsors /> */}
      <News />
      <Contacts />
    </div>
  );
};
