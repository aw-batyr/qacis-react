import { Field, FormSuccesStatus } from "@/components/shared";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import axios from "axios";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { AnimatePresence, motion } from "motion/react";
import {
  delegateDefaultValues,
  delegateFormSchema,
  DelegateFormType,
} from "@/lib/get-delegate-form-details";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Loader } from "lucide-react";

interface Props {
  className?: string;
}

export const Delegate: FC<Props> = ({ className }) => {
  const [success, setSuccess] = useState(false);
  const form = useForm<DelegateFormType>({
    resolver: zodResolver(delegateFormSchema),
    defaultValues: delegateDefaultValues,
  });

  const onSubmit = async (data: DelegateFormType) => {
    const res = await axios.post(
      "https://qacis.turkmenexpo.com/app/api/v1/become_delegate",
      data
    );

    if (res.status === 201) setSuccess(true);
  };

  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  }, [success]);

  const { errors } = form.formState;

  return (
    <div className={className}>
      <div className="relative flex items-center h-[216px] w-full justify-center">
        <img
          src="/cover.png"
          className="-z-10 absolute size-full object-cover top-0 left-0"
        />
        <h1 className="text-on_primary text-5xl">Стать делегатом</h1>
      </div>

      <AnimatePresence>
        {!success && (
          <Form {...form}>
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-[808px] mx-auto mt-20 mb-[120px] flex flex-col gap-8"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <Field
                label="Название компании/организации"
                name="company_name"
                control={form.control}
                error={errors.company_name}
              />
              <Field
                label="Имя представителя"
                name="rep_name"
                control={form.control}
                error={errors.rep_name}
              />
              <Field
                label="Название должности/позиция"
                name="job_title"
                control={form.control}
                error={errors.job_title}
              />
              <Field
                label="Страна"
                name="country"
                control={form.control}
                error={errors.country}
              />
              <Field
                label="E-mail адрес"
                name="email"
                control={form.control}
                error={errors.email}
              />
              <Field
                label="Номер телефона"
                name="phone"
                control={form.control}
                error={errors.phone}
              />
              <Field label="Вебсайт" name="website" control={form.control} />

              <FormField
                control={form.control}
                name="visa_support"
                render={({ field }) => (
                  <FormItem className="space-y-5">
                    <FormLabel className="text-xl">
                      Визовая поддержка:
                    </FormLabel>

                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-4 ml-3"
                      >
                        <FormItem className="flex items-center space-x-5 space-y-0">
                          <FormControl>
                            <RadioGroupItem
                              value={"yes"}
                              checked={field.value === "yes"}
                            />
                          </FormControl>
                          <FormLabel className="text-base">Да</FormLabel>
                        </FormItem>

                        <FormItem className="flex items-center space-x-5 space-y-0 ">
                          <FormControl>
                            <RadioGroupItem
                              value={"no"}
                              checked={field.value === "no"}
                            />
                          </FormControl>
                          <FormLabel className="text-base">Нет</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />

              <Button disabled={form.formState.isSubmitting} className="mt-5">
                {form.formState.isSubmitting ? (
                  <Loader className="animate-spin" />
                ) : (
                  "Отправить"
                )}
              </Button>
            </motion.form>
          </Form>
        )}
      </AnimatePresence>

      {success && <FormSuccesStatus delay={0.3} />}
    </div>
  );
};
