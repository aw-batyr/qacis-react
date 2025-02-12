export interface StaticType {
  status: string;
  data: Datum[];
}

export interface Datum {
  id: number;
  text: string;
  list: List[] | null;
  created_at: Date;
  updated_at: Date;
  key: string;
  pivot: Pivot;
}

export interface List {
  text_ru: string;
  text_en: string;
}

export interface Pivot {
  page_id: number;
  static_word_id: number;
}

export interface Pivot {
  page_id: number;
  static_word_id: number;
}
