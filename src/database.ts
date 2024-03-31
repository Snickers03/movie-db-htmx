import { MongoClient, type Db } from "mongodb";

let cachedDb: Db | null = null;

export async function connectToDatabase(uri: string) {
  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(uri);

  const dbName = "movie-db";

  const db = await client.db(dbName);

  cachedDb = db;
  return db;
}