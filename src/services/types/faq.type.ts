export interface FAQType {
  status: string;
  data: Datum[];
}

export interface Datum {
  id: number;
  name: string;
  created_at: Date;
  updated_at: Date;
  faqs: FAQ[];
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
  created_at: Date;
  updated_at: Date;
  faq_category_id: number;
}
