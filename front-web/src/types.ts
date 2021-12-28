export type Gender = 'MALE' | 'FEMALE' | 'OTHER';

export type SalesByGender = {
  gender: string;
  sum: number;
};

export type Stores = {
  id?: number;
  name?: string;
};

export type FilterData = {
  gender?: Gender;
  store?: Stores;
};

export type PieChartConfig = {
  labels: string[];
  series: number[];
};
