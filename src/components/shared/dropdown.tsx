import { FC, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface Props {
  className?: string;
  question: string;
  answer: string;
}

export const Dropdown: FC<Props> = ({ className, question, answer }) => {
  const [active, setActive] = useState(false);

  return (
    <div className={cn("rounded-[8px]", className)}>
      <div
        onClick={() => setActive(!active)}
        className="flex items-center cursor-pointer bg-surface_container  justify-between p-6"
      >
        <h2 className="md:text-lg">{question}</h2>

        <div className="size-12 flex items-center justify-center relative">
          <span className="bg-on_surface w-3 h-0.5 rounded rotate-180" />
          <motion.span
            initial={{ opacity: 0 }}
            animate={!active ? { opacity: 1 } : {}}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 rounded -translate-y-1/2 bg-on_surface w-3 h-0.5 rotate-90"
          />
        </div>
      </div>

      <motion.div
        initial={{
          maxHeight: 0,
          opacity: 0,
          paddingBottom: 0,
          paddingTop: 0,
          pointerEvents: "none",
          marginBottom: 0,
        }}
        animate={
          active
            ? {
                maxHeight: "fit-content",
                opacity: 1,
                paddingTop: 24,
                paddingBottom: 24,
                pointerEvents: "all",
                marginBottom: 24,
              }
            : {}
        }
        transition={{ type: "tween", duration: 0.2 }}
        className="bg-[#E0E6EB] px-6 overflow-hidden"
      >
        <div
          className="news-inner text-base"
          dangerouslySetInnerHTML={{ __html: answer ?? "" }}
        />
      </motion.div>
    </div>
  );
};
