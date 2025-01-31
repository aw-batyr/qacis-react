import axios from "axios";
import { NewsInnerType, NewsType } from "./types/news";
import { DelegateFormType } from "@/lib/get-delegate-form-details";
import { ContactsFormType } from "@/lib/get-contacts-form-details";

const URL = "https://qacis.turkmenexpo.com/app/api/v1";

export const getNews = async () => {
  const data = axios.get<NewsType>(`${URL}/news`);

  return data;
};

export const getNewsInner = async (id: number) => {
  const data = axios.get<NewsInnerType>(`${URL}/news/${id}`);

  return data;
};

export const postDelegate = async (
  data: DelegateFormType
): Promise<boolean> => {
  const res = axios.post(`${URL}/become_delegate`, data);

  return (await res).status === 201;
};

export const postB2b = async (data: FormData): Promise<boolean> => {
  const res = axios.post(`${URL}/form`, data);

  return (await res).status === 201;
};

export const postSponsor = async (data: DelegateFormType): Promise<boolean> => {
  const res = axios.post(`${URL}/become_sponsor`, data);

  return (await res).status === 201;
};

export const postContact = async (data: ContactsFormType) => {
  const res = axios.post(`${URL}/contact_form`, data);

  return (await res).status === 201;
};
