export type ApiResponseType = {
  fields: string[];
  layer_name: string;
  nb_results: number;
  table_href: string;
  values: ToiletType[];
};

export type ToiletType = {
  acceshandi: boolean;
  adresse: string;
  codinsee: string;
  enfants: boolean;
  femmes: boolean;
  gid: 1;
  hommes: null;
  infoloc: null;
  lat: number;
  lon: number;
  payant: boolean;
  provenance: string;
  unisexe: boolean;
  web: string;
  openinghoursspecification: OpeningHoursType[];
};

type OpeningHoursType = {
  closes: string;
  opens: string;
  dayOfWeek: string[];
};
