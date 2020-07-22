import { useState, useEffect } from "react";
import yelp from "../services/yelp";

export default () => {
  const [restaurants, setRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState();

  const onEndSearchEdit = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "new york",
        },
      });
      setRestaurants(response.data.businesses);
      setErrorMessage();
    } catch (error) {
      setErrorMessage("Something went wrong");
      setRestaurants([]);
    }
  };

  useEffect(() => {
    onEndSearchEdit("pasta");
  }, []);

  return [restaurants, onEndSearchEdit, errorMessage];
};
