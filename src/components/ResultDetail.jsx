/* eslint-disable react/prop-types */
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const ResultDetail = ({ result }) => (
  <View style={styles.container}>
    <Image style={styles.image} source={{ uri: result.image_url }} />
    <Text style={styles.name}>{result.name}</Text>
    <Text>
      {result.rating} Stars, {result.review_count} Review
    </Text>
  </View>
);

export default ResultDetail;

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    borderRadius: 4,
    height: 120,
    marginBottom: 5,
    width: 250,
  },
  name: {
    fontSize: 15,
    fontWeight: "bold",
  },
});
