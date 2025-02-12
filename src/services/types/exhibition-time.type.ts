export interface ExhibitionTimeType {
  status: string;
  data: Datum[];
}

export interface Datum {
  id: number;
  title: string;
  text: string;
  created_at: Date;
  updated_at: Date;
}
