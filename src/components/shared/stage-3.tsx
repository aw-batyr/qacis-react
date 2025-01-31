import { FC } from "react";
import { motion } from "motion/react";
import { FieldError, useFormContext } from "react-hook-form";
import { Field } from "./";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";

interface Props {
  className?: string;
}

export const Stage3: FC<Props> = () => {
  const { control, formState } = useFormContext();

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.3 } }}
      transition={{ duration: 1 }}
    >
      <h3 className="text-3xl mb-8">
        Логистика встречи:
        {/* Meeting Logistics */}
      </h3>

      <div className="flex flex-col gap-6">
        <Field
          control={control}
          name={"preferred_meeting_datetime"}
          error={formState.errors.preferred_meeting_datetime as FieldError}
          placeholder=""
          label="Предпочтительная дата и время "
          // label="Preferred date and time for the meeting"
        />
        <Field
          control={control}
          name={"preferred_mode"}
          error={formState.errors.preferred_mode as FieldError}
          placeholder=""
          label="Предпочтительный способ проведения встречи (лично, виртуально (через zoom/ teams/другое), гибридный)"
          // label="Preferred mode of meeting (in-person, virtual (via zoom/teams/other), hybrid)"
        />
        <Field
          control={control}
          name={"language_preference"}
          error={formState.errors.language_preference as FieldError}
          placeholder=""
          label="Предпочитаемый язык (английский, туркменский, русский, другой)"
          // label="Additional technical or logistical requirements (e.g. AV equipment, interpreters, etc)"
        />

        <Field
          control={control}
          name={"additional_technical"}
          error={formState.errors.additional_technical as FieldError}
          placeholder=""
          label="Дополнительные технические или логистические требования (например, аудио-видео оборудование, переводчики и т.д.)"
          // label="Additional technical or logistical requirements (e.g. AV equipment, interpreters, etc)"
        />
      </div>

      <div className="flex flex-col gap-8">
        <div className="">
          <h3 className="text-3xl mt-10">Приложения:</h3>
          <h5 className="text-on_surface_v">
            (Пожалуйста приложите следующие документы, если это необходимо)
          </h5>
        </div>

        <Field
          control={control}
          name="company_profile"
          label="Название компании/организации"
          type="file"
          textDark
        />
        <Field
          control={control}
          name="proposal_presentation"
          label="Предложение/презентация"
          type="file"
          textDark
        />
        <Field
          control={control}
          name="relevant_certification"
          label="Соответствующие сертификаты/лицензии"
          type="file"
          textDark
        />
      </div>

      <Button
        disabled={formState.isSubmitting}
        type="submit"
        className="w-full mt-10"
      >
        {formState.isSubmitting ? (
          <Loader className="animate-spin" />
        ) : (
          "Отправить"
        )}
      </Button>
    </motion.div>
  );
};
