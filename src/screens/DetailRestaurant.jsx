import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, ScrollView } from 'react-native'
import yelp from '../services/yelp';
import JSONTree from "react-native-json-tree";
import { config } from '../config/dev';

const DetailRestaurant = ({navigation}) => {
  const id = navigation.getParam("id");
  const [result, setResult] = useState();

  const getResult = async (id) =>{
    try {
      const response = await yelp.get(`/${id}`);
      setResult(response.data);
      console.log(response.data);
    } catch (error) {
      setErrorMessage("Something went wrong");
      console.log(error);
    }
  }

  useEffect(() => {
    getResult(id);
  }, []);

    return (
      <>
        <ScrollView>
          <Text>{result && result.name}</Text>
          {config.debugMode && <JSONTree data={result} invertTheme={false} />}
        </ScrollView>
      </>
    );
}

export default DetailRestaurant

const styles = StyleSheet.create({})
