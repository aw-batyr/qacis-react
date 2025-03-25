import { FC } from "react";
import { cn } from "@/lib/utils";
import { Container, Cover } from "@/components/layout";
import { Dropdown, Loading } from "@/components/shared";
import { useFaq } from "@/services/hooks/use-faq";

interface Props {
  className?: string;
}

export const Faq: FC<Props> = ({ className }) => {
  const { data, isPending } = useFaq();

  if (isPending) return <Loading />;

  return (
    <div className={cn("", className)}>
      <Cover title="FAQ" />

      {isPending ? (
        <Loading />
      ) : (
        <Container className="md:mt-20 mt-10 md:mb-[120px] mb-20 gap-10 flex flex-col">
          {data?.map((item) => (
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
              <h2 className="h2">{item?.name}</h2>

              <div className="flex flex-col gap-4 md:gap-6">
                {item?.faqs.map((faq) => (
                  <Dropdown key={faq?.answer} {...faq} />
                ))}
              </div>
            </div>
          ))}
        </Container>
      )}
    </div>
  );
};
