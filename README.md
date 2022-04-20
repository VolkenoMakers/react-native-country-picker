# @volkenomakers/react-native-country-picker

![Usage](https://raw.githubusercontent.com/VolkenoMakers/react-native-country-picker/files/demo.gif)

## Add it to your project

- Using NPM
  `npm install @volkenomakers/react-native-country-picker`
- or:
- Using Yarn
  `yarn add @volkenomakers/react-native-country-picker`

## Usage

```javascript
import React from "react";
import { Text, View } from "react-native";
import CountryPicker from "@volkenomakers/react-native-country-picker";
export function CountryPickerModule() {
  return (
    <View style={{ flex: 1, padding: 15 }}>
      <View style={{ marginVertical: 10 }}>
        <Text style={{ marginBottom: 5 }}>Default style</Text>
        <CountryPicker
          onSelect={(country) => {
            console.log("name", country.name);
            console.log("calling codes", country.callingCode);
            console.log("country code", country.countryCode);
            console.log("currencies", country.currency);
          }}
        />
      </View>

      <View style={{ marginVertical: 10 }}>
        <Text style={{ marginBottom: 5 }}>Default country</Text>
        <CountryPicker
          countryCode="sn"
          onSelect={(country) => {
            console.log("name", country.name);
            console.log("calling codes", country.callingCode);
            console.log("country code", country.countryCode);
            console.log("currencies", country.currency);
          }}
        />
      </View>
      <View style={{ marginVertical: 10 }}>
        <Text style={{ marginBottom: 5 }}>Changing language</Text>
        <CountryPicker
          countryCode="sn"
          lang="kor"
          onSelect={(country) => {
            console.log("name", country.name);
            console.log("calling codes", country.callingCode);
            console.log("country code", country.countryCode);
            console.log("currencies", country.currency);
          }}
        />
      </View>

      <View style={{ marginVertical: 10 }}>
        <Text style={{ marginBottom: 5 }}>favorites countries</Text>
        <CountryPicker
          countryCode="sn"
          favoriteCountries={["sn", "fr", "US"]}
          onSelect={(country) => {
            console.log("name", country.name);
            console.log("calling codes", country.callingCode);
            console.log("country code", country.countryCode);
            console.log("currencies", country.currency);
          }}
        />
      </View>
      <View style={{ marginVertical: 10 }}>
        <Text style={{ marginBottom: 5 }}>Filter by region</Text>
        <CountryPicker region="Africa" />
      </View>

      <View style={{ marginVertical: 10 }}>
        <Text style={{ marginBottom: 5 }}>Filter by sub region</Text>
        <CountryPicker orderBy="subregion" subRegion="Eastern Africa" />
      </View>
      <View style={{ marginVertical: 10 }}>
        <Text style={{ marginBottom: 5 }}>hide calling codes</Text>
        <CountryPicker showCallingCodes={false} />
      </View>
    </View>
  );
}
```

## Properties

- `countryCode?`: string
- `placeholder?`: string
- `onSelect`: [Function](https://github.com/VolkenoMakers/react-native-country-picker/blob/6806e968c773f8f9722a9edf148d7809d83c99bf/src/lib/types.ts#L73)
- `lang?`: [Lang](https://github.com/VolkenoMakers/react-native-country-picker/blob/6806e968c773f8f9722a9edf148d7809d83c99bf/src/lib/types.ts#L36)
- `region?`: [Region](https://github.com/VolkenoMakers/react-native-country-picker/blob/6806e968c773f8f9722a9edf148d7809d83c99bf/src/lib/types.ts#L3)
- `subRegion?`: [SubRegion](https://github.com/VolkenoMakers/react-native-country-picker/blob/6806e968c773f8f9722a9edf148d7809d83c99bf/src/lib/types.ts#L10)
- `orderBy?`: `"region" | "subregion"`
- `placeholderTextStyle?`: `TextStyle`
- `textInputStyle?`: `StyleProp<TextStyle>`
- `textInputContainerStyle?`: `StyleProp<TextStyle>`
- `showFlag?`: boolean
- `showCallingCodes?`: boolean
- `showSearchInput?`: boolean
- `showRightIcon?`: boolean
- `favoriteCountries?`: string[]
- `searchInputPlaceholderText?`: string
- `placeholderTextColor?`: string
- `noResultText?`: string

**ISC Licensed**
