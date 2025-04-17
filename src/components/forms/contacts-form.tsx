import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  ContactsFormType,
  contactsSchema,
  defaultValuesContacts,
} from "@/lib/get-contacts-form-details";
import { postContact } from "@/services/services";
import { Loader2 } from "lucide-react";
import { Field } from "../shared";
import { useTranslation } from "react-i18next";

interface Props {
  className?: string;
}

export const ContactsForm: FC<Props> = ({ className }) => {
  const { t } = useTranslation("contacts");

  const [success, setSuccess] = useState(false);
  const form = useForm({
    resolver: zodResolver(contactsSchema),
    defaultValues: defaultValuesContacts,
  });

  async function onSubmit(data: ContactsFormType) {
    try {
      const status = await postContact(data);

      setSuccess(status);
    } catch (error) {
      console.error("POST contact", error);
    }
  }

  const { errors } = form.formState;

  return (
    <div className={cn("bg-primary rounded-[8px] py-8 px-6 ", className)}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <h2 className="h2 !text-on_primary lg:mb-8 mb-6">{t("title")}</h2>

          <div
            className={cn(
              "flex flex-col gap-8",
              success && "opacity-50 pointer-events-none"
            )}
          >
            <Field
              onPrimary
              name="name"
              control={form.control}
              label={t("name")}
              error={errors.name}
            />

            <div className="flex flex-col lg:flex-row gap-6">
              <Field
                onPrimary
                name="email"
                control={form.control}
                label="Email"
                error={errors.email}
              />
              <Field
                onPrimary
                name="phone"
                control={form.control}
                label={t("phone")}
                error={errors.phone}
              />
            </div>

            <Field
              onPrimary
              name="company"
              control={form.control}
              label={t("company")}
              error={errors.company}
            />
            <Field
              onPrimary
              textArea
              name="msg"
              label={t("message")}
              control={form.control}
              error={errors.msg}
            />
            <Button
              disabled={form.formState.isSubmitting || success}
              className="w-full h-12 bg-reverse_primary text-on_primary_container hover:bg-reverse_primary/90 overflow-hidden"
              variant="secondary"
            >
              {success ? (
                t("submitted")
              ) : form.formState.isSubmitting ? (
                <Loader2 className="animate-spin text-white" />
              ) : (
                t("button")
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
