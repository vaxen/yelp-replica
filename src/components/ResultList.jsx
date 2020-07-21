import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import ResultDetail from "./ResultDetail";

const ResultList = ({ title, results }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <ResultDetail result={item} />;
        }}
      />
      <Text>{results.length}</Text>
    </View>
  );
};

export default ResultList;

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
