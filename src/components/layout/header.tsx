import { cn } from "@/lib/utils";
import { FC } from "react";
import { Container } from "./";
import { Link } from "react-router-dom";
import { navData } from "@/data";
import { Burger, LangMenu } from "../shared";
import { Button } from "../ui";

interface Props {
  className?: string;
}

export const Header: FC<Props> = ({ className }) => {
  return (
    <header className={cn("h-20 lg:h-[92px] bg-primary_10 py-2", className)}>
      <Container className="flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link to="/">
            <img
              src="/logo.svg"
              alt="logo"
              className="lg:size-auto h-12 w-auto"
            />
          </Link>

          <div className="lg:flex hidden items-center gap-6 text-sm text-on_primary">
            {navData.map(({ title, link }) => (
              <Link key={title} to={link}>
                {title}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-10">
          <div className="hidden lg:flex items-center gap-6">
            <Link to={"/B2B-B2G"}>
              <Button
                size={"sm"}
                className="bg-alternative text-on_alternative hover:bg-alternative/90 "
              >
                B2B | B2G встречи
              </Button>
            </Link>
            <Link to={"/B2B-B2G"}>
              <Button
                size={"sm"}
                className="bg-alternative text-on_alternative  hover:bg-alternative/90  "
              >
                Официальная поддержка
              </Button>
            </Link>
          </div>
          <LangMenu />
          <Burger />
        </div>
      </Container>
    </header>
  );
};
