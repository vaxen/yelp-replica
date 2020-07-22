/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, ScrollView, Image, FlatList } from "react-native";
import JSONTree from "react-native-json-tree";
import yelp from "../services/yelp";
import { config } from "../config/dev";

const DetailRestaurant = ({ navigation }) => {
  const id = navigation.getParam("id");
  const [result, setResult] = useState();

  const getResult = async (id) => {
    try {
      const response = await yelp.get(`/${id}`);
      setResult(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <>
      <ScrollView>
        <Text>{result.name}</Text>
        <ScrollView>
          <FlatList
            horizontal
            data={result.photos}
            keyExtractor={(pic) => pic}
            renderItem={({ item }) => <Image style={styles.image} source={{ uri: item }} />}
          />
        </ScrollView>
        {config.debugMode && <JSONTree data={result} invertTheme={false} />}
      </ScrollView>
    </>
  );
};

export default DetailRestaurant;

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 200,
  },
});
