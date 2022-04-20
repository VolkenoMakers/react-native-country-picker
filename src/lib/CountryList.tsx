import React from "react";
import { Image, SectionList, Text, TouchableOpacity, View } from "react-native";
import { Country, CountryPickerProps, Lang, Region, SubRegion } from "./types";

type CountryList = CountryPickerProps & {
  countries: Country[];
  regions: Region[];
  subRegions: SubRegion[];
  lang: Lang;
  searchString: string;
};
type Section = { title: Region | SubRegion; data: Country[] };
const CountryList = ({
  lang,
  orderBy = "region",
  subRegions,
  regions,
  countries,
  onSelect,
  showCallingCodes = true,
  showFlag = true,
  searchString,
  favoriteCountries,
  noResultText,
}: CountryList) => {
  const ref = React.useRef<SectionList>(null);
  const [sections, setSections] = React.useState<Section[]>([]);
  const [section, setSection] = React.useState<Section | null>(null);
  React.useEffect(() => {
    const sections: Section[] = [];
    let list = orderBy === "region" ? regions : subRegions;

    const trimed = searchString.trim().toLowerCase();
    for (let i of list) {
      const item = {
        title: i,
        data: countries.filter((c) => {
          const ok1 = c[orderBy === "region" ? "region" : "subregion"] === i;
          if (trimed) {
            return (
              ok1 &&
              (c.name[lang].toLowerCase().includes(trimed) ||
                c.countryCode === trimed ||
                c.callingCode.join(" ").includes(trimed))
            );
          }
          return ok1;
        }),
      };
      if (item.data.length > 0) {
        sections.push(item);
      } else {
        setSection(null);
      }
    }
    setSections(sections);
  }, [orderBy, regions, countries, subRegions, searchString]);

  React.useEffect(() => {
    if (favoriteCountries) {
      const trimed = searchString.trim().toLowerCase();
      const items = countries.filter((f) => {
        const ok1 = favoriteCountries
          .map((c) => c.toLowerCase())
          .includes(f.countryCode.toLowerCase());
        if (trimed) {
          return (
            ok1 &&
            (f.name[lang].toLowerCase().includes(trimed) ||
              f.countryCode === trimed ||
              f.callingCode.join(" ").includes(trimed))
          );
        }
        return ok1;
      });
      if (items.length > 0) {
        setSection({
          title: "",
          data: items,
        });
      }
    }
  }, [favoriteCountries, countries, searchString]);

  return (
    <SectionList
      keyExtractor={(item, index) => item.name[lang] + index}
      ref={ref}
      sections={section ? [section, ...sections] : sections}
      bounces={false}
      renderSectionHeader={({ section: { title } }) => {
        if (!title) return null;
        return (
          <View
            style={{
              paddingHorizontal: 15,
              backgroundColor: "#EEE",
              paddingVertical: 5,
            }}
          >
            <Text style={{ color: "rgba(0,0,0,.6)", fontWeight: "bold" }}>
              {title}
            </Text>
          </View>
        );
      }}
      SectionSeparatorComponent={SecSep}
      ListEmptyComponent={
        <View>
          <Text style={{ textAlign: "center", marginTop: 20 }}>
            {noResultText || "No results."}
          </Text>
        </View>
      }
      ItemSeparatorComponent={Sep}
      renderItem={({ item }) => {
        const name = item.name[lang];
        return (
          <TouchableOpacity onPress={() => onSelect(item)}>
            <View
              style={{
                paddingVertical: 10,
                paddingHorizontal: 15,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", flex: 1 }}
              >
                {showFlag && <Flag flag={item.flag} />}
                <Text style={{ fontWeight: "bold" }}>{name}</Text>
              </View>
              {showCallingCodes && (
                <View>
                  {item.callingCode.map((cc: number) => (
                    <Text style={{ fontWeight: "bold", fontSize: 12 }} key={cc}>
                      +{cc}
                    </Text>
                  ))}
                </View>
              )}
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export const Flag = ({ flag }: { flag: string }) => {
  return (
    <Image
      resizeMode="contain"
      source={{ uri: flag }}
      style={{ width: 30, height: 30, marginRight: 10 }}
    />
  );
};

export default CountryList;
const SecSep = () => {
  return (
    <View
      style={{
        height: 3,
      }}
    />
  );
};

const Sep = () => {
  return (
    <View
      style={{
        width: "100%",
        height: 1,
        backgroundColor: "rgba(0,0,0,.1)",
      }}
    />
  );
};
