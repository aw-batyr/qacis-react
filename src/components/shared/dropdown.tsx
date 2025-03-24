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
    <div className={cn("", className)}>
      <div
        onClick={() => setActive(!active)}
        className="flex items-center cursor-pointer bg-surface_container gap-6 justify-between  p-6"
      >
        <h2 className="md:text-lg">{question}</h2>

        <div className="size-12 flex items-center justify-center relative">
          <span className="bg-on_surface w-3 h-0.5 rounded" />
          <motion.span
            initial={{ opacity: 0 }}
            animate={active ? { opacity: 1 } : {}}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 rounded -translate-y-1/2 bg-on_surface w-3 h-0.5 rotate-90"
          />
        </div>
      </div>

      <motion.div
        initial={{
          height: 0,
          opacity: 0,
          paddingTop: 0,
          pointerEvents: "none",
        }}
        animate={
          active
            ? {
                height: "100%",
                opacity: 1,
                paddingTop: 24,
                pointerEvents: "all",
              }
            : {}
        }
        className="bg-[#E0E6EB] p-6"
      >
        <div
          className="news-inner"
          dangerouslySetInnerHTML={{ __html: answer ?? "" }}
        />
      </motion.div>
    </div>
  );
};
