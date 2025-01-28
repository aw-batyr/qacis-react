import { cn } from "@/lib/utils";
import { FC } from "react";
import { Container } from "./";
import { Link } from "react-router-dom";
import { navData } from "@/data";
import { LangMenu } from "../shared";
import { Button } from "../ui";

interface Props {
  className?: string;
}

export const Header: FC<Props> = ({ className }) => {
  return (
    <header className={cn("h-20 md:h-[92px] bg-primary_10 py-2", className)}>
      <Container className="flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link to="/">
            <img
              src="/logo.svg"
              alt="logo"
              className="md:size-auto h-12 w-auto"
            />
          </Link>

          <div className="md:flex hidden items-center gap-6 text-sm text-on_primary">
            {navData.map(({ title, link }) => (
              <Link key={title} to={link}>
                {title}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-10">
          <div className="hidden md:flex items-center gap-6">
            <Link to={"/B2B-B2G"}>
              <Button
                size={"sm"}
                className="bg-reverse_primary text-on_primary_container hover:bg-reverse_primary/90 "
              >
                B2B | B2G встречи
              </Button>
            </Link>
            <Link to={"/B2B-B2G"}>
              <Button
                size={"sm"}
                className="bg-reverse_primary text-on_primary_container  hover:bg-reverse_primary/90  "
              >
                Официальная поддержка
              </Button>
            </Link>
          </div>
          <LangMenu />
        </div>
      </Container>
    </header>
  );
};
