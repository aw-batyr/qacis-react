import { Container, Cover } from "@/components/layout";
import { DocumentDropdown } from "@/components/shared/document-dropdown";
import { useLangStore } from "@/store/lang";

export const Documents = () => {
  const lang = useLangStore((state) => state.lang);

  const coverTitle = lang === "ru" ? "Документы" : "Documents";

  return (
    <section>
      <Cover title={coverTitle} />

      <Container className="page-padding">
        <h2 className="mb-10 text-3xl">QACIS 2025 (presentations)</h2>

        <div className="flex flex-col gap-6">
          {[...Array(4)].map((_, i) => (
            <DocumentDropdown
              key={i}
              data={[
                { text: "Стандарты, сертификация и инвестиционные потоки" },
                {
                  text: "Стандарты, сертификация и инвестиционные потоки в глобальной «креативной экономике» — др Мартин Смит",
                },
              ]}
              title={
                "1 сессия: Роль международных стандартов в развитии торговли и инвестиций"
              }
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
