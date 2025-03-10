export interface SpeakersType {
  status: string;
  data: Datum[];
}

export interface Datum {
  id: number;
  name: string;
  job_title: string;
  created_at: string;
  updated_at: string;
  main: number;
  sort_order: number;
  image: Image | null;
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
  path: string;
}
