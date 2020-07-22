/* eslint-disable react/prop-types */
import React from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import ResultDetail from "./ResultDetail";

const ResultList = ({ title, results, navigation }) => {
  const toRestaurantDetail = (item) => {
    navigation.navigate("DetailRestaurant", { id: item.id });
  };

  if (!results.length) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => toRestaurantDetail(item)}>
            <ResultDetail result={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default withNavigation(ResultList);

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 5,
    marginLeft: 15,
    textAlign: "center",
  },
});
