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
import { SpeakersType } from "./types/speakers.type";
import { SponsorFormType } from "@/lib/get-sponsor-form-details";
import { FAQType } from "./types/faq.type";
import { ParticipantsType } from "./types/participants.type";
import { SponsorsType } from "./types/sponsors.type";
import { PhotoTypes } from "./types/photo.type";

export const axios_url = axios.create({
  baseURL: "https://qacis.turkmenexpo.com/app/api/v1/",
});

export const getNews = async (lang: "ru" | "en") => {
  const data = axios_url.get<NewsType>(`news?page=1&per_page=100`, {
    headers: {
      "Accept-Language": lang,
    },
  });

  return data;
};

export const getNewsInner = async (id: number, lang: string) => {
  const data = axios_url.get<NewsInnerType>(`news/${id}`, {
    headers: {
      "Accept-Language": lang,
    },
  });

  return data;
};

export const postDelegate = async (
  data: DelegateFormType,
  lang: LangState["lang"]
): Promise<boolean> => {
  const res = axios_url.post(`become_delegate`, data, {
    headers: {
      "Accept-Language": lang,
    },
  });

  return (await res).status === 201;
};

export const postB2b = async (
  data: FormData,
  lang: LangState["lang"]
): Promise<boolean> => {
  const res = axios.post(`form`, data, {
    headers: {
      "Accept-Language": lang,
    },
  });

  return (await res).status === 201;
};

export const postSponsor = async (
  data: SponsorFormType,
  lang: LangState["lang"]
): Promise<boolean> => {
  const res = axios_url.post(`become_sponsor`, data, {
    headers: {
      "Accept-Language": lang,
    },
  });

  return (await res).status === 201;
};

export const postContact = async (data: ContactsFormType) => {
  const res = axios_url.post(`contact_form`, data);

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

export const getMediaPartners = async () => {
  const data = axios_url<PartnersType>("media_partner");

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

export const getSpeakers = async (lang: LangState["lang"]) => {
  const data = axios_url<SpeakersType>("speakers", {
    headers: {
      "Accept-Language": lang,
    },
  });

  return data;
};

export const getSponsors = async (lang: LangState["lang"]) => {
  const data = axios_url<SponsorsType>("sponsors", {
    headers: {
      "Accept-Language": lang,
    },
  });

  return data;
};

export const getFaq = async (lang: LangState["lang"]) => {
  const data = axios_url.get<FAQType>("faqs", {
    headers: {
      "Accept-Language": lang,
    },
  });

  return data;
};

export const getParticipants = async (lang: LangState["lang"]) => {
  const data = axios_url<ParticipantsType>("participants", {
    headers: {
      "Accept-Language": lang,
    },
  });

  return data;
};

export const getPhotos = async (id: number) => {
  const data = axios_url<PhotoTypes>("photos/category/" + id, {});

  return data;
};

export const getVideos = async (lang: LangState["lang"]) => {
  const data = axios_url<PhotoTypes>("videos", {
    headers: {
      "Accept-Language": lang,
    },
  });

  return data;
};
