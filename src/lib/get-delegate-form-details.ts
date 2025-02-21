import { z } from "zod";

export type DelegateFormType = z.infer<typeof delegateFormSchema>;

export const delegateFormSchema = z.object({
  company_name: z
    .string()
    .min(3, { message: "Название компании должно быть не менее 3 символов" }),

  rep_name: z
    .string()
    .min(3, { message: "Имя представителя должно быть не менее 3 символов" }),

  job_title: z
    .string()
    .min(3, { message: "Должность должна быть не менее 3 символов" }),

  country: z
    .string()
    .min(3, { message: "Название страны должно быть не менее 3 символов" }),

  email: z.string().email({ message: "Укажите корректный email" }),

  phone: z
    .string()
    .min(8, { message: "Номер телефона должен быть не менее 8 символов" }),

  website: z.string().optional(),

  become_speaker: z.boolean(),

  become_sponsor: z.boolean(),

  visa_support: z.string().optional(),
});

export const delegateDefaultValues = {
  company_name: "",
  rep_name: "",
  job_title: "",
  country: "",
  email: "",
  phone: "",
  website: "",
  become_speaker: false,
  become_sponsor: false,
  visa_support: "",
};
