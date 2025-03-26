import { cn } from "@/lib/utils";
import { FC } from "react";
import { Container } from "./";
import { Link } from "react-router-dom";
import { Burger, LangMenu, Menu } from "../shared";
import { Button } from "../ui";
import { useTranslation } from "react-i18next";

interface Props {
  className?: string;
}

export const Header: FC<Props> = ({ className }) => {
  const { t } = useTranslation("header");

  const navData = t("nav.data", { returnObjects: true }) as Array<{
    title: string;
    link: string;

    drop?: true;
    dropDownContent?: {
      text: string;
      link?: string;
    }[];
  }>;

  const b2b = t("b2b");

  const support = t("support", { returnObjects: true }) as {
    text: string;
    link: string;
  };

  return (
    <header className={cn("h-20 lg:h-[92px] bg-primary_10 py-2", className)}>
      <Container className="flex md:items-center items-end justify-between">
        <div className="flex items-center xl:gap-10 gap-4">
          <Link to="/">
            <img
              src="/logo.svg"
              alt="logo"
              className="lg:size-auto h-12 w-auto"
            />
          </Link>

          <div className="lg:flex hidden items-center gap-6 text-sm text-on_primary">
            {navData.map((item) =>
              !item.drop ? (
                <Link key={item.title} to={item.link}>
                  {item.title}
                </Link>
              ) : (
                <Menu
                  key={item.title}
                  title={item.title}
                  dropDownContent={item.dropDownContent}
                />
              )
            )}
          </div>
        </div>

        <div className="flex items-center xl:gap-10 gap-4">
          <div className="hidden lg:flex items-center gap-3 xl:gap-6">
            <Link to={"/B2B-B2G"}>
              <Button
                size={"sm"}
                className="bg-alternative text-on_alternative hover:bg-alternative/90 "
              >
                {b2b}
              </Button>
            </Link>
            <Link to={support.link} target="_blank">
              <Button
                size={"sm"}
                className="bg-alternative text-on_alternative  hover:bg-alternative/90  "
              >
                {support.text}
              </Button>
            </Link>
          </div>
          <LangMenu />
          <div className="lg:hidden">
            <Burger />
          </div>
        </div>
      </Container>
    </header>
  );
};
