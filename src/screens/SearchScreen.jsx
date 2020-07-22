import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useRestaurants from "../hooks/useRestaurants";
import ResultList from "../components/ResultList";

const SearchScreen = () => {
  const [term, setTerm] = useState();

  const [restaurants, onEndSearchEdit, errorMessage] = useRestaurants();

  const onSearchChange = (newTerm) => {
    setTerm(newTerm);
  };

  const filterResultByPrice = (price) => {
    // price $ || $$ || $$$
    return restaurants.filter((result) => result.price === price);
  };

  return (
    <>
      <SearchBar
        searchTerm={term}
        onSearchChange={onSearchChange}
        onSubmit={() => onEndSearchEdit(term)}
      />
      <ScrollView>
        <ResultList title="Cheap" results={filterResultByPrice("$")} />
        <ResultList title="Mid" results={filterResultByPrice("$$")} />
        <ResultList title="Big Spender" results={filterResultByPrice("$$$")} />
        {errorMessage && <Text>{errorMessage}</Text>}
      </ScrollView>
    </>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
