import { cn } from "@/lib/utils";
import { FC } from "react";
import { Container } from "../layout";
import { Loading, SpeakerCard } from "../shared";
import { Button } from "../ui";
import { useSpeakers } from "@/services/hooks/use-speakers";
import { useTranslation } from "react-i18next";

interface Props {
  className?: string;
}

export const Speakers: FC<Props> = ({ className }) => {
  const { data, isPending } = useSpeakers();

  const { t } = useTranslation("home");

  if (isPending) return <Loading />;

  return (
    <section className={cn("my-20", className)}>
      <Container className="flex flex-col gap-6">
        <h2 className="text-3xl md:text-center">{t("speakers.title")}</h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {data?.map((item, i) => (
            <SpeakerCard key={i} {...item} />
          ))}
        </div>

        <Button variant="outline" className="text-on_surface mx-auto">
          {t("speakers.btn")}
        </Button>
      </Container>
    </section>
  );
};
