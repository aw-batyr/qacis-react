import { Cover } from "@/components/layout";
import { B2bForm, B2bFormProgress } from "@/components/shared";
import { FC, useEffect, useState } from "react";

interface Props {
  className?: string;
}

export const B2b: FC<Props> = () => {
  const [stage, setStage] = useState(3);
  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  }, [stage]);

  return (
    <div className={"pb-[120px]"}>
      <Cover title="B2B | B2G встречи" />

      {stage !== 0 && <B2bFormProgress stage={stage} />}

      <div className="max-w-[828px] px-5 mx-auto">
        <B2bForm stage={stage} setStage={setStage} />
      </div>
    </div>
  );
};
