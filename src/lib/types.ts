import { StyleProp, TextStyle, ViewStyle } from "react-native";

export type Region =
  | "Asia"
  | "Europe"
  | "Africa"
  | "Oceania"
  | "Americas"
  | "Antarctic";
export type SubRegion =
  | "Southern Asia"
  | "Southern Europe"
  | "Northern Africa"
  | "Polynesia"
  | "Middle Africa"
  | "Caribbean"
  | ""
  | "South America"
  | "Western Asia"
  | "Australia and New Zealand"
  | "Western Europe"
  | "Eastern Europe"
  | "Central America"
  | "Western Africa"
  | "North America"
  | "Southern Africa"
  | "Eastern Africa"
  | "South-Eastern Asia"
  | "Eastern Asia"
  | "Northern Europe"
  | "Melanesia"
  | "Micronesia"
  | "Central Asia"
  | "Central Europe";

export type Lang =
  | "common"
  | "ces"
  | "cym"
  | "deu"
  | "fra"
  | "hrv"
  | "ita"
  | "jpn"
  | "nld"
  | "por"
  | "rus"
  | "slk"
  | "spa"
  | "fin"
  | "est"
  | "zho"
  | "pol"
  | "urd"
  | "kor";
export type Country = {
  currency: string[];
  callingCode: string[];
  region: Region;
  subregion: SubRegion;
  flag: string;
  name: { [Property in Lang]: string };
  countryCode: string;
};
export type SelectCountry = Country & {
  name: string;
};
export type Countries = { [key: string]: Country };

export type CountryPickerProps = {
  countryCode?: string;
  lang?: Lang;
  onSelect: (country: Country | SelectCountry) => any;
  region?: Region;
  placeholder?: string;
  placeholderTextStyle?: TextStyle;
  textInputStyle?: StyleProp<TextStyle>;
  textInputContainerStyle?: StyleProp<ViewStyle>;
  subRegion: SubRegion;
  orderBy?: "region" | "subregion";
  showFlag?: boolean;
  showCallingCodes?: boolean;
  showSearchInput?: boolean;
  searchInputPlaceholderText?: string;
  placeholderTextColor?: string;
  noResultText?: string;
  showRightIcon?: boolean;
  favoriteCountries?: string[];
};
