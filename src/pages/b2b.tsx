import { Cover } from "@/components/layout";
import { B2bForm, B2bFormProgress } from "@/components/shared";
import { useLang } from "@/hooks/use-lang";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { FC, useState } from "react";

interface Props {
  className?: string;
}

export const B2b: FC<Props> = () => {
  useScrollTop();
  const [stage, setStage] = useState(1);

  return (
    <div className={"pb-[120px]"}>
      <Cover title={useLang("B2B | B2G встречи", "B2B | B2G meetings")} />

      {stage !== 0 && <B2bFormProgress stage={stage} />}

      <div className="max-w-[828px] px-5 mx-auto">
        <B2bForm stage={stage} setStage={setStage} />
      </div>
    </div>
  );
};
