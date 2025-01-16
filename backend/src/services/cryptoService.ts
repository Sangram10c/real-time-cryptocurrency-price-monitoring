import axios from "axios";
import { setCache, getCache } from "../utils/cache";

const BASE_URL = "https://api.coingecko.com/api/v3";

export const getCryptoPrice = async (crypto: string): Promise<number | null> => {
  const cacheKey = `price_${crypto}`;
  const cachedPrice = await getCache(cacheKey);

  if (cachedPrice) {
    return parseFloat(cachedPrice);
  }

  const response = await axios.get(`${BASE_URL}/simple/price`, {
    params: { ids: crypto, vs_currencies: "usd" },
  });

  const price = response.data[crypto]?.usd || null;
  if (price !== null) {
    setCache(cacheKey, price.toString(), 60); // Cache for 60 seconds
  }
  return price;
};
