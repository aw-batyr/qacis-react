import { cn } from "@/lib/utils";
import { FC } from "react";
import { Container } from "../layout";
import { Loading, SpeakerCard } from "../shared";
import { Button } from "../ui";
import { useSpeakers } from "@/services/hooks/use-speakers";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface Props {
  className?: string;
  section?: boolean;
}

export const SpeakersSection: FC<Props> = ({ className, section = false }) => {
  const { data, isPending } = useSpeakers();

  const sortedItems = [...(data ?? [])].sort(
    (a, b) => a?.sort_order - b?.sort_order
  );

  const { t } = useTranslation("home");

  if (isPending) return <Loading />;

  return (
    <section className={cn("my-20", className)}>
      <Container className="flex flex-col gap-6">
        {section && <h2 className="text-3xl">{t("speakers.title")}</h2>}
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {sortedItems?.map((item, i) => (
            <SpeakerCard key={i} {...item} />
          ))}
        </div>

        {section && (
          <Link to="/speakers" className="mx-auto">
            <Button variant="outline" className="text-on_surface">
              {t("speakers.btn")}
            </Button>
          </Link>
        )}
      </Container>
    </section>
  );
};
