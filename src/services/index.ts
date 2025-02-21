import axios from "axios";
import { NewsInnerType, NewsType } from "./types/news";
import { DelegateFormType } from "@/lib/get-delegate-form-details";
import { ContactsFormType } from "@/lib/get-contacts-form-details";
import { ContactsPageType } from "./types/contacts.type";
import { LangState } from "@/store/lang";
import { HomeContactsType } from "./types/home-contacts.type";
import { ExhibitionTimeType } from "./types/exhibition-time.type";
import { StaticType } from "./types/static-words.type";
import { PartnersType } from "./types/partners.type";

const URL = "https://qacis.turkmenexpo.com/app/api/v1";

export const axios_url = axios.create({
  baseURL: "https://qacis.turkmenexpo.com/app/api/v1",
});

export const getNews = async (lang: "ru" | "en") => {
  const data = axios.get<NewsType>(`${URL}/news`, {
    headers: {
      "Accept-Language": lang,
    },
  });

  return data;
};

export const getNewsInner = async (id: number, lang: string) => {
  const data = axios.get<NewsInnerType>(`${URL}/news/${id}`, {
    headers: {
      "Accept-Language": lang,
    },
  });

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

export const postSubscribe = async (data: { email: string }) => {
  const res = axios_url.post("subscribe_news_form", data);

  return (await res).status === 201;
};

export const getContacts = async (lang: LangState["lang"]) => {
  const data = axios_url<ContactsPageType>("contact_info", {
    headers: {
      "Accept-Language": lang,
    },
  });

  return data;
};

export const getHomeContacts = async (lang: LangState["lang"]) => {
  const data = axios_url<HomeContactsType>("contact_data", {
    headers: {
      "Accept-Language": lang,
    },
  });

  return data;
};

export const getExhibionTime = async (lang: LangState["lang"]) => {
  const data = axios_url<ExhibitionTimeType>("exhibition_time", {
    headers: {
      "Accept-Language": lang,
    },
  });

  return data;
};

export const getPartners = async () => {
  const data = axios_url<PartnersType>("partners");

  return data;
};

export const getStaticWords = async (lang: LangState["lang"], id: string) => {
  const data = axios_url<StaticType>("pages/" + id, {
    headers: {
      "Accept-Language": lang,
    },
  });

  return data;
};
