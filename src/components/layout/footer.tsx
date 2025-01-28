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
    <footer className={cn("bg-primary_10 md:py-10 py-8", className)}>
      <Container className="flex flex-col gap-6 md:gap-0 md:flex-row items-center justify-between">
        <div>
          <img src="/logo.svg" alt="logo" className="md:size-auto h-[64px]" />
          <h5 className="text-sm text-on_primary mt-2 md:block hidden">
            ©2025. Все права защищены, Ашхабад, Туркменистан.
          </h5>
        </div>

        <div className="flex flex-col gap-10 md:w-[600px]">
          <div className="border-b hidden  text-on_primary pb-2 border-b-secondary_08 md:flex justify-between items-center">
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

        <hr className="md:hidden border-[#4A6A89] w-full" />

        <h5 className="text-sm text-on_primary mt-2 md:hidden text-center">
          ©2025. Все права защищены
        </h5>
      </Container>
    </footer>
  );
};
