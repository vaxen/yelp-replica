import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
import useRestaurants from "../hooks/useRestaurants";
import ResultList from "../components/ResultList";

const SearchScreen = () => {
  const [term, setTerm] = useState();
  const [restaurants, onEndSearchEdit, errorMessage] = useRestaurants(term);

  const onSearchChange = (newTerm) => {
    setTerm(newTerm);
  };

  const filterResultByPrice = (price) => {
    // price $ || $$ || $$$
    return restaurants.filter((result) => result.price === price);
  };

  return (
    <View>
      <SearchBar
        searchTerm={term}
        onSearchChange={onSearchChange}
        onEndSearchEdit={onEndSearchEdit}
      />
      <ResultList title="Cheap" results={filterResultByPrice("$")} />
      <ResultList title="Mid" results={filterResultByPrice("$$")} />
      <ResultList title="Big Spender" results={filterResultByPrice("$$$")} />
      <Text>We've found {restaurants.length} results</Text>
      {errorMessage && <Text>{errorMessage}</Text>}
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
