import axios from "axios";
import * as AxiosLogger from "axios-logger";

const yelp = axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer OZmeHtsV3WLtMTp5SPIhFcsOP4djRqGA_W3HPLtFCmLGdyaoVOm1Gvk7FIuQ90qxyzjpQLfQ17zHGyNP-lrxzkNaWX3A06KM7MEGxWYSEmtNt6cGN6RQ9kAGCToSX3Yx",
  },
});


yelp.interceptors.request.use(
  AxiosLogger.requestLogger,
  AxiosLogger.errorLogger
);

export default yelp;