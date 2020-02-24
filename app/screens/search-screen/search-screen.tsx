import React, { useState } from "react"
import { TextInput, View, Text } from "react-native"
import { useDebounce } from "../../utils/debounce"
import { useSearchArtist } from "../../utils/search-artist"
import { getAccessToken } from "../../utils/authenticate"

export const SearchScreen: React.FunctionComponent<{}> = () => {
  const [search, setSearch] = useState("Thomas")
  const debouncedValue = useDebounce(search)
  const token = getAccessToken(search)
  // const artists = useSearchArtist(debouncedValue)

  return (
    <View style={{ paddingTop: 50 }}>
      <TextInput
        style={{ height: 44, borderColor: "black", borderWidth: 1, textAlign: "center" }}
        onChangeText={text => {
          setSearch(text)
        }}
        value={search}
      ></TextInput>
      {/* {artists.map((artist: any, index: any) => (
        <Text key={index}>{artist}</Text>
      ))} */}
    </View>
  )
}
