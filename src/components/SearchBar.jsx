import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ searchTerm, onSearchChange, onEndSearchEdit }) => {
  const onTextChange = (newSearch) => {
    onSearchChange(newSearch);
  };

  const onEndEditing = () => {
    onEndSearchEdit();
  };

  return (
    <View style={styles.backgroundStyle}>
      <Feather style={styles.iconStyle} name="search" size={30} />
      <TextInput
        style={styles.inputStyle}
        placeholder={"Search"}
        value={searchTerm}
        onChangeText={onTextChange}
        onEndEditing={onEndEditing}
        autoCorrect={false}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    marginTop: 15,
    marginBottom: 10
  },
  inputStyle: {
    //borderColor: "black",
    //borderWidth: 1,
    flex: 1,
    fontSize: 20,
  },
  iconStyle: {
    alignSelf: "center",
    marginHorizontal: 15,
  },
});
