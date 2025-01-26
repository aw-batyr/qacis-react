import { cn } from "@/lib/utils";
import { FC } from "react";
import { Container } from "./";
import { Link } from "react-router-dom";
import { navData } from "@/data";
import { LangMenu } from "../shared";

interface Props {
  className?: string;
}

export const Header: FC<Props> = ({ className }) => {
  return (
    <header className={cn("h-[92px] bg-primary_10 py-2", className)}>
      <Container className="flex items-center justify-between">
        <div className="flex-[0_0_681px] flex items-center justify-between">
          <Link to="/">
            <img src="/logo.svg" alt="logo" />
          </Link>

          <div className="flex items-center gap-6 text-sm text-on_primary">
            {navData.map(({ title, link }) => (
              <Link key={title} to={link}>
                {title}
              </Link>
            ))}
          </div>
        </div>

        <LangMenu />
      </Container>
    </header>
  );
};
