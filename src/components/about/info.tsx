import { cn } from "@/lib/utils";
import { FC } from "react";
import { Container } from "../layout";
import { useTranslation } from "react-i18next";
import { useStaticWords } from "@/services/hooks/use-static-words";
import { CloudCog } from "lucide-react";
import { Loading } from "../shared";

interface Props {
  className?: string;
}

export const Info: FC<Props> = ({ className }) => {
  const { data, isPending } = useStaticWords("2");

  console.log(data);

  const about_1 = data?.find((item) => item.key === "about_1")?.text;
  const about_2 = data?.find((item) => item.key === "about_2")?.text;
  const about_3 = data?.find((item) => item.key === "about_3")?.text;
  const about_4 = data?.find((item) => item.key === "about_4")?.text;

  if (isPending) return <Loading />;

  return (
    <section className={cn("md:py-20 py-10", className)}>
      <Container className="flex flex-col md:gap-16 gap-8">
        <div className="flex flex-col gap-6">
          <h2 className="h2">{about_1}</h2>
          <div
            dangerouslySetInnerHTML={{ __html: about_2 ?? "" }}
            className="flex flex-col gap-3 p"
          />
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="h2">{about_3}</h2>
          <div
            dangerouslySetInnerHTML={{ __html: about_4 ?? "" }}
            className="flex flex-col gap-3 p"
          />
        </div>
      </Container>
    </section>
  );
};
