import { AnimatePresence, motion } from "motion/react";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import {
  defaultValuesOfB2b,
  formSchema,
  FormType,
} from "@/lib/get-b2b-form-details";
import { Form } from "../ui/form";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { Stage, Stage2, Stage3 } from "./";

interface Props {
  stage: number;
  setStage: (i: number | any) => void;
}

export const B2bForm: FC<Props> = ({ stage, setStage }) => {
  const [success, setSuccess] = useState(false);

  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValuesOfB2b,
    mode: "onChange",
  });

  const getFieldsForStage = (currentStage: number): (keyof FormType)[] => {
    switch (currentStage) {
      case 1:
        return [
          "type",
          "company_name",
          "representative_name",
          "job_title",
          "participants_number",
          "country",
          "email_address",
          "phone_number",
          "website",
        ];
      case 2:
        return [
          "meeting_objective",
          "proposal_description",
          "government_agency",
          "sector_industry",
          "key_services",
          "government_experience",
        ];
      case 3:
        return [
          "preferred_meeting_datetime",
          "meeting_mode",
          "language_preference",
          "technical_requirements",
          "company_profile",
          "proposal_presentation",
          "relevant_certification",
        ];
      default:
        return [];
    }
  };

  const handleNext = async () => {
    const fieldsToValidate = getFieldsForStage(stage);
    const isValid = await form.trigger(fieldsToValidate);

    if (isValid) {
      setStage((prev: number) => prev + 1);
    }
  };

  const onSubmit = async (values: FormType) => {
    try {
      const formData = new FormData();

      // Перебираем все поля
      Object.entries(values).forEach(([key, value]) => {
        if (value instanceof File) {
          console.log(`Добавляем файл: ${key}`, value); // Отладочный вывод
          formData.append(key, value);
        } else if (value !== undefined) {
          console.log(`Добавляем поле: ${key}`, value); // Отладочный вывод
          formData.append(key, value as string);
        }
      });

      // Отправляем запрос
      const res = await axios.post(
        "https://qacis.turkmenexpo.com/app/api/v1/form",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (res.status === 201) {
        console.log("Форма успешно отправлена!");
        setSuccess(true);
      }
    } catch (error) {
      console.error("Ошибка при отправке формы:", error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="relative">
          <AnimatePresence>
            {stage === 1 && <Stage handleNext={handleNext} />}
          </AnimatePresence>
          <AnimatePresence>
            {stage === 2 && <Stage2 handleNext={handleNext} />}
          </AnimatePresence>
          <AnimatePresence>
            {stage === 3 && success === false && <Stage3 />}
          </AnimatePresence>

          {success && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col gap-8 mt-20"
            >
              <h3 className="text-3xl text-center ">
                Форма успешно отправлена!
              </h3>
              <Link className="w-fit mx-auto" to="/">
                <Button variant={"outline"}>Вернуться на главную</Button>
              </Link>
            </motion.div>
          )}
        </div>
      </form>
    </Form>
  );
};
