import { Field, FormSuccesStatus } from "@/components/shared";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { AnimatePresence, motion } from "motion/react";
import {
  delegateDefaultValues,
  delegateFormSchema,
  DelegateFormType,
} from "@/lib/get-delegate-form-details";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { Loader } from "lucide-react";
import { Cover } from "@/components/layout";
import { postDelegate } from "@/services";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { Language, useLangStore } from "@/store/lang";
import { delegateData } from "@/data/delegate.data";
import { useTranslate } from "@/hooks/use-translate";
import { CheckboxField } from "@/components/shared/checkbox";

interface Props {
  className?: string;
}

export const Delegate: FC<Props> = ({ className }) => {
  useScrollTop();
  const lang = useLangStore((state) => state.lang);

  const [success, setSuccess] = useState(false);
  const form = useForm<DelegateFormType>({
    resolver: zodResolver(delegateFormSchema),
    defaultValues: delegateDefaultValues,
  });

  const onSubmit = async (data: DelegateFormType) => {
    try {
      const status = await postDelegate(data);

      if (status) setSuccess(true);
    } catch (error) {
      console.error("Become delegate post error", error);
    }
  };

  const { errors } = form.formState;

  return (
    <div className={className}>
      <Cover
        title={lang === Language.RU ? "Зарегистрироваться" : "Registration"}
      />

      <AnimatePresence>
        {!success && (
          <Form {...form}>
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-[828px] mx-auto px-5 mt-20 mb-[120px] flex flex-col sm:gap-8 gap-10"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <Field
                label={delegateData[useTranslate(lang)].company}
                name="company_name"
                control={form.control}
                error={errors.company_name}
              />
              <Field
                label={delegateData[useTranslate(lang)].name}
                name="rep_name"
                control={form.control}
                error={errors.rep_name}
              />
              <Field
                label={delegateData[useTranslate(lang)].job}
                name="job_title"
                control={form.control}
                error={errors.job_title}
              />
              <Field
                label={delegateData[useTranslate(lang)].country}
                name="country"
                control={form.control}
                error={errors.country}
              />
              <Field
                label={delegateData[useTranslate(lang)].email}
                name="email"
                control={form.control}
                error={errors.email}
              />
              <Field
                label={delegateData[useTranslate(lang)].phone}
                name="phone"
                control={form.control}
                error={errors.phone}
              />
              <Field
                label={delegateData[useTranslate(lang)].website}
                name="website"
                control={form.control}
              />

              <h2 className="text-xl">
                {delegateData[useTranslate(lang)].checkbox_title}
              </h2>

              <CheckboxField
                name="become_delegate"
                control={form.control}
                label={delegateData[useTranslate(lang)].checkbox_3}
              />

              <CheckboxField
                name="become_speaker"
                control={form.control}
                label={delegateData[useTranslate(lang)].checkbox}
              />

              <CheckboxField
                name="become_sponsor"
                control={form.control}
                label={delegateData[useTranslate(lang)].checkbox_2}
              />

              <FormField
                control={form.control}
                name="visa_support"
                render={({ field }) => (
                  <FormItem className="space-y-5">
                    <FormLabel className="text-xl">
                      {delegateData[useTranslate(lang)].visa}
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
                          <FormLabel className="text-base">
                            {delegateData[useTranslate(lang)].radio}
                          </FormLabel>
                        </FormItem>

                        <FormItem className="flex items-center space-x-5 space-y-0 ">
                          <FormControl>
                            <RadioGroupItem
                              value={"no"}
                              checked={field.value === "no"}
                            />
                          </FormControl>
                          <FormLabel className="text-base">
                            {delegateData[useTranslate(lang)].radio_2}
                          </FormLabel>
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
                  delegateData[useTranslate(lang)].button
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
