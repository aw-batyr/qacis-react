import axios from "axios";
import { NewsInnerType, NewsType } from "./types/news";

const URL = "https://qacis.turkmenexpo.com/app/api/v1";

export const getNews = async () => {
  const data = axios.get<NewsType>(`${URL}/news`);

  return data;
};

export const getNewsInner = async (id: number) => {
  const data = axios.get<NewsInnerType>(`${URL}/news/${id}`);

  return data;
};
