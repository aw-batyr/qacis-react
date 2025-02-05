import { cn } from "@/lib/utils";
import { FC } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Container } from "../layout";
import { ContactCard } from "../shared";
import { useTranslation } from "react-i18next";

interface Props {
  className?: string;
}

export const Contacts: FC<Props> = ({ className }) => {
  const { t } = useTranslation("home");

  // Получаем контакты из локализации
  const contacts = t("contacts.data", { returnObjects: true }) as Array<{
    suptitle: string;
    title: string;
  }>;

  return (
    <section className={cn("bg-surface_high pt-20 pb-10", className)}>
      <Container>
        <div className="flex flex-col gap-6">
          <div className="md:p-10 md:bg-surface_container flex flex-col md:flex-row items-center gap-6">
            {contacts.map((item, i) => (
              <ContactCard
                img={
                  i === 0
                    ? "/location.svg"
                    : i === 1
                    ? "/mail.svg"
                    : "/mobile.svg"
                }
                {...item}
                key={item.suptitle}
                className="w-full"
              />
            ))}
          </div>

          <Link to="/become-delegate" className="flex justify-center w-full">
            <Button className="md:w-fit w-full">{t("contacts.button")}</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};
