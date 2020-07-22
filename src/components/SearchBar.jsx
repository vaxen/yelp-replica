/* eslint-disable react-native/no-color-literals */
/* eslint-disable react/prop-types */
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ searchTerm, onSearchChange, onSubmit }) => {
  const onTextChange = (newSearch) => {
    onSearchChange(newSearch);
  };

  const onEndEditing = () => {
    onSubmit();
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
    borderRadius: 5,
    flexDirection: "row",
    height: 50,
    marginBottom: 10,
    marginHorizontal: 15,
    marginTop: 15,
  },
  iconStyle: {
    alignSelf: "center",
    marginHorizontal: 15,
  },
  inputStyle: {
    //borderColor: "black",
    //borderWidth: 1,
    flex: 1,
    fontSize: 20,
  },
});
