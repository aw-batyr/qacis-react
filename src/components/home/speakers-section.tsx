import { cn } from "@/lib/utils";
import { FC } from "react";
import { Container } from "../layout";
import { Loading, SpeakerCard, SpeakerModal } from "../shared";
import { Button } from "../ui";
import { useSpeakers } from "@/services/hooks/use-speakers";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Modal } from "../shared/modal";

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
    <section className={cn("md:my-20 mt-10 mb-20", className)}>
      <Container className="flex flex-col gap-6">
        {section && <h2 className="text-3xl">{t("speakers.title")}</h2>}
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {section
            ? sortedItems?.slice(0, 8).map((item, i) => (
                <Modal
                  className="!h-auto !px-0 !items-start hover:!bg-none "
                  triggerChildren={
                    <SpeakerCard key={i} {...item} className="h-full" />
                  }
                >
                  <SpeakerModal
                    info={item?.about_speaker}
                    img={item?.image?.path ?? ""}
                  />
                </Modal>
              ))
            : sortedItems.map((item, i) => (
                <Modal
                  className="!h-auto !px-0 overflow-auto !items-start hover:!bg-none"
                  contentClassName="overflow-auto"
                  triggerChildren={
                    <SpeakerCard key={i} {...item} className="h-full" />
                  }
                >
                  <SpeakerModal
                    info={item?.about_speaker}
                    img={item?.image?.path ?? ""}
                  />
                </Modal>
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
