import { Container, Cover } from "@/components/layout";
import { TitlePopup } from "@/components/shared";
import { DocumentDropdown } from "@/components/shared/document-dropdown";
import { usePresentations } from "@/services/hooks/use-presentaions";
import { usePresentationsCategories } from "@/services/hooks/use-presentaions-categories";
import { useLangStore } from "@/store/lang";
import { useEffect, useState } from "react";

export const Documents = () => {
  const lang = useLangStore((state) => state.lang);
  const { data: cats } = usePresentationsCategories();

  const [activeTitle, setActiveTitle] = useState<{
    name?: string;
    id?: number;
  }>({});

  useEffect(() => {
    if (cats && cats[0]) {
      setActiveTitle({ name: cats[0].name, id: cats[0].id });
    }
  }, [cats]);

  const { data } = usePresentations(activeTitle?.id ?? 1);

  const coverTitle = lang === "ru" ? "Документы" : "Documents";

  console.log(data);

  return (
    <section className="">
      <Cover title={coverTitle} />

      <Container className="page-padding">
        <TitlePopup
          setActiveTitle={setActiveTitle}
          activeTitle={activeTitle}
          triggerClassName="text-3xl mb-6"
          data={cats ?? []}
        />

        <div className="flex flex-col gap-6">
          {data?.presentations?.map((item, i) => (
            <DocumentDropdown {...item} key={i} />
          ))}
        </div>
      </Container>
    </section>
  );
};
