import { cn } from "@/lib/utils";
import { FC } from "react";
import { Container } from "../layout";
import { Link } from "react-router-dom";
import { navData } from "@/data";
import { Facebook, Instagram } from "lucide-react";

interface Props {
  className?: string;
}

export const Footer: FC<Props> = ({ className }) => {
  return (
    <footer className={cn("bg-primary_10 py-10", className)}>
      <Container className="flex items-center justify-between">
        <div>
          <img src="/logo.svg" alt="" />
          <h5 className="text-sm text-on_primary mt-2">
            ©2025. Все права защищены, Ашхабад, Туркменистан.
          </h5>
        </div>

        <div className="flex flex-col gap-10 w-[600px]">
          <div className="border-b text-on_primary pb-2 border-b-secondary_08 flex justify-between items-center">
            {navData.map(({ title, link }) => (
              <Link key={title} to={link}>
                {title}
              </Link>
            ))}
          </div>
          <div className="text-white flex items-center justify-end gap-6">
            <Facebook className="" />
            <Instagram />
            <img src="/in.svg" alt="linkedin" />
            <img src="/x.svg" alt="X" />
          </div>
        </div>
      </Container>
    </footer>
  );
};
