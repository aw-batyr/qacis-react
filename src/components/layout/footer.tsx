import { cn } from "@/lib/utils";
import { FC } from "react";
import { Container } from "../layout";
import { Link } from "react-router-dom";
import { Facebook, Instagram } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Language, useLangStore } from "@/store/lang";

interface Props {
  className?: string;
}

export const Footer: FC<Props> = ({ className }) => {
  const lang = useLangStore((state) => state.lang);
  const { t } = useTranslation("header");

  const nav = t("nav.data", { returnObjects: true }) as Array<{
    title: string;
    link: string;
  }>;

  return (
    <footer className={cn("bg-primary_10 md:py-10 py-8", className)}>
      <Container className="flex flex-col gap-6 md:gap-0 md:flex-row items-center justify-between">
        <div>
          <img src="/logo.svg" alt="logo" className="md:size-auto h-[64px]" />
          <h5 className="text-sm text-on_primary mt-2 md:block hidden">
            {lang === Language.RU
              ? "©2025 Все права защищены"
              : "All rights reserved"}
          </h5>
        </div>

        <div className="flex flex-col gap-10 md:w-[600px]">
          <div className="border-b hidden  text-on_primary pb-2 border-b-secondary_08 md:flex justify-between items-center">
            {nav.map(({ title, link }) => (
              <Link key={title} to={link}>
                {title}
              </Link>
            ))}
          </div>
          <div className="text-white flex items-center justify-end gap-6">
            <Link
              to="https://www.facebook.com/profile.php?id=61567254728028"
              target="_blank"
            >
              <Facebook />
            </Link>
            <Link
              to="https://www.instagram.com/turkmenexpo_tm?igsh=bnhkOWpmNWcwcHBq"
              target="_blank"
            >
              <Instagram />
            </Link>
            <Link
              to="https://www.linkedin.com/company/turkmen-expo"
              target="_blank"
            >
              <img src="/in.svg" alt="linkedin" />
            </Link>

            <Link
              to="https://x.com/turkmenexpo?t=D-XSa8d0AC8GAv5peAzteA&s=09"
              target="_blank"
            >
              <img src="/x.svg" alt="X" />
            </Link>
          </div>
        </div>

        <hr className="md:hidden border-[#4A6A89] w-full" />

        <h5 className="text-sm text-on_primary mt-2 md:hidden text-center">
          {lang === Language.RU
            ? "©2025 Все права защищены"
            : "All rights reserved"}
        </h5>
      </Container>
    </footer>
  );
};
