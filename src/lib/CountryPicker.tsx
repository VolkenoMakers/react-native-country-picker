import React from "react";
import {
  Image,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import countries_data from "../data/countries.json";
import regions_data from "../data/regions.json";
import subregions_data from "../data/subregions.json";
import CountryList, { Flag } from "./CountryList";
import {
  Country,
  CountryPickerProps,
  Region,
  SelectCountry,
  SubRegion,
} from "./types";

const CountryPicker = (props: CountryPickerProps) => {
  const {
    subRegion,
    region,
    lang = "common",
    placeholder = "Select country",
    placeholderTextStyle,
    textInputContainerStyle,
    showFlag = true,
    onSelect,
    textInputStyle,
    showSearchInput = true,
    showRightIcon = true,
    countryCode,
    searchInputPlaceholderText,
    placeholderTextColor = "rgba(0,0,0,.4)",
    favoriteCountries,
  } = props;

  const [normalizedCountries] = React.useState(
    Object.keys(countries_data).map((key: string) => ({
      //@ts-ignore
      ...(countries_data[key] as Country),
      countryCode: key,
    })) as Country[]
  );
  const [visible, setVisible] = React.useState(false);
  const [selected, setSelected] = React.useState<Country | null>(null);
  const [regions, setRegions] = React.useState(regions_data as Region[]);
  const [countries, setCountries] = React.useState<Country[]>([]);
  const [searchString, setSearchString] = React.useState("");
  const [subRegions, setSubRegions] = React.useState(
    subregions_data as SubRegion[]
  );
  React.useEffect(() => {
    if (region || subRegion) {
      let newCountries = [...normalizedCountries];
      if (region) {
        setRegions([region]);
        newCountries = newCountries.filter((f) => f.region === region);
      }
      if (subRegion) {
        setSubRegions([subRegion]);
        newCountries = newCountries.filter((f) => f.subregion === subRegion);
      }
      setCountries(newCountries);
    } else {
      setCountries(normalizedCountries);
    }
    if (!subRegion) {
      setSubRegions(subregions_data as SubRegion[]);
    }
    if (!region) {
      setRegions(regions_data as Region[]);
    }
  }, [region, subRegion]);
  React.useEffect(() => {
    if (countryCode) {
      const country = normalizedCountries.find(
        (c) => c.countryCode.toLowerCase() === countryCode.toLowerCase()
      );
      if (!country) {
        console.warn(`${countryCode} is not a valid countryCode`);
      } else {
        setSelected(country);
      }
    }
  }, [countryCode, normalizedCountries]);
  return (
    <View>
      <Modal
        visible={visible}
        onRequestClose={() => setVisible(false)}
        animationType="slide"
        presentationStyle="formSheet"
      >
        <SafeAreaView style={{ flex: 1 }}>
          <View
            style={{
              padding: 10,
            }}
          >
            <View style={{ alignSelf: "flex-end", marginBottom: 5 }}>
              <TouchableOpacity onPress={() => setVisible(false)}>
                <Image
                  source={require("../assets/times.png")}
                  style={{ width: 25, height: 25, tintColor: "#c0392b" }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
            {showSearchInput && (
              <TextInput
                placeholder={searchInputPlaceholderText || "Search..."}
                value={searchString}
                onChangeText={(val) => setSearchString(val)}
                placeholderTextColor={placeholderTextColor}
                style={[
                  defaultStyle.textInputContainerStyle,
                  textInputContainerStyle,
                ]}
              />
            )}
          </View>

          <CountryList
            {...props}
            countries={countries}
            regions={regions}
            subRegions={subRegions}
            lang={lang}
            onSelect={(item) => {
              setVisible(false);
              setSearchString("");
              setSelected(item);
              if (onSelect) {
                onSelect({ ...item, name: item.name[lang] } as SelectCountry);
              }
            }}
            favoriteCountries={favoriteCountries}
            searchString={searchString}
          />
        </SafeAreaView>
      </Modal>
      <TouchableOpacity onPress={() => setVisible(true)}>
        <View
          style={[
            defaultStyle.textInputContainerStyle,
            textInputContainerStyle,
            {
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            },
          ]}
        >
          <View>
            {!!selected && (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  flex: 1,
                }}
              >
                {showFlag && <Flag flag={selected.flag} />}
                <Text
                  numberOfLines={1}
                  style={[defaultStyle.textInputStyle, textInputStyle]}
                >
                  {selected.name[lang]}
                </Text>
              </View>
            )}
            {!selected && (
              <Text
                numberOfLines={1}
                style={[
                  defaultStyle.placeholderTextStyle,
                  { color: placeholderTextColor },
                  placeholderTextStyle,
                ]}
              >
                {placeholder}
              </Text>
            )}
          </View>
          {showRightIcon && (
            <Image
              source={require("../assets/Caret_down.png")}
              style={{
                width: 20,
                height: 20,
                tintColor: placeholderTextColor,
                marginHorizontal: 5,
              }}
            />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CountryPicker;

const defaultStyle = StyleSheet.create({
  placeholderTextStyle: {},
  textInputStyle: { color: "#000", width: "83%" },
  textInputContainerStyle: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#EEE",
    borderRadius: 7,
  },
});
