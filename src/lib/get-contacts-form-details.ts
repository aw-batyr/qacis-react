import { z } from "zod";

export type ContactsFormType = z.infer<typeof contactsSchema>;

export const contactsSchema = z.object({
  name: z.string().min(2, "required"), // "required" is the message shown when validation fails, can be customized
  email: z.string().email(),
  phone: z.string().min(8, "required"), // "required" is the message shown when validation fails, can be customized,
  company: z.string().min(2, "required"), // "required" is the message shown when validation fails, can be customized"),
  msg: z.string().min(5, "required"), // "required" is the message shown when validation fails, can be customized
});

export const defaultValuesContacts = {
  name: "",
  email: "",
  phone: "",
  company: "",
  msg: "",
};
