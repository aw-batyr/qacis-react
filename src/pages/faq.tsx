import { FC } from "react";
import { cn } from "@/lib/utils";
import { Container, Cover } from "@/components/layout";
import { Dropdown } from "@/components/shared";
import { useFaq } from "@/services/hooks/use-faq";

interface Props {
  className?: string;
}

export const Faq: FC<Props> = ({ className }) => {
  const { data } = useFaq();

  return (
    <div className={cn("", className)}>
      <Cover title="FAQ" />

      <Container className="md:mt-20 mt-10 md:mb-[120px] mb-20 flex flex-col gap-10 md:gap-[120px]">
        {data?.map((item) => (
          <div className="">
            <h2 className="h2 mb-6">{item?.name}</h2>

            {item?.faqs.map((faq) => (
              <Dropdown {...faq} />
            ))}
          </div>
        ))}
      </Container>
    </div>
  );
};
