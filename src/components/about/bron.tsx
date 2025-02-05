import { cn } from "@/lib/utils";
import { FC } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Container } from "../layout";
import { useTranslation } from "react-i18next";

interface Props {
  className?: string;
}

export const Bron: FC<Props> = ({ className }) => {
  const { t } = useTranslation("about");

  return (
    <section
      className={cn("md:py-20 py-10 relative overflow-hidden", className)}
    >
      <img
        src="/CTA.png"
        className="absolute top-0 left-0 size-full -z-10 object-cover"
      />

      <Container>
        <h2 className="h2 text-center container !text-on_primary md:mb-6 mb-1.5">
          {t("invation.title")}
        </h2>
        <p className="text-center md:text-lg text-sm md:text-primary_02 text-primary_02/60 max-w-[808px] mx-auto mb-10">
          {t("invation.text")}
        </p>

        <div className="flex flex-col md:flex-row items-center gap-6">
          <Link to={"/become-delegate"} className="w-full">
            <Button className="w-full bg-white text-primary hover:bg-white/90 ">
              {t("invation.delegate_button")}
            </Button>
          </Link>
          <Link to={"/B2B-B2G"} className="w-full">
            <Button className="w-full bg-white text-primary hover:bg-white/90">
              {t("invation.b2b_button")}
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};
