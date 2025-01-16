import redis from "redis";

const redisClient = redis.createClient();

redisClient.on("error", (err: any) => {
  console.error("Redis error:", err);
});

export const setCache = (key: string, value: string, ttl: number) => {
  redisClient.set(key, value, "EX", ttl);
};

export const getCache = (key: string): Promise<string | null> => {
  return new Promise((resolve, reject) => {
    redisClient.get(key, (err: any, data: string | PromiseLike<string | null> | null) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

export default redisClient;
