import React from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import ResultDetail from "./ResultDetail";
import { withNavigation } from "react-navigation";

const ResultList = ({ title, results, navigation }) => {
  
  const toRestaurantDetail = (item) =>{
    navigation.navigate("DetailRestaurant", { id: item.id });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => toRestaurantDetail(item)} >
              <ResultDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default withNavigation(ResultList);

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
    marginLeft: 15,
    marginBottom: 5
  },
  container: {
    marginBottom: 5
  },
});
