export interface SpeakersType {
  status: string;
  data: Datum[];
}

export interface Datum {
  id: number;
  name: string;
  job_title: string;
  created_at: Date;
  updated_at: Date;
  main: number;
  sort_order: number;
  about_speaker: string;
  country: string;
  image: Image;
  image_country: Image | null;
}

export interface Image {
  id: number;
  disk_name: string;
  file_name: string;
  file_size: number;
  content_type: string;
  title: null;
  description: null;
  field: string;
  sort_order: number;
  created_at: Date;
  updated_at: Date;
  path: string;
  extension: string;
}
