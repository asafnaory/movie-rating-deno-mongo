import { MongoClient } from "https://deno.land/x/mongo@v0.12.1/mod.ts";

// import { Movie } from "/Users/an488q/Desktop/lab/deno mongodb/controllers/movie-class.ts"

const client = new MongoClient();
client.connectWithUri("mongodb://localhost:27017");

// Defining schema interface
interface MovieSchema {
  _id: { $oid: string }; // mongo id
  name: string;
  rating: number;
  actor: string;
}

//select database
const db = client.database("test");
const Movies = db.collection<MovieSchema>("movies");

export { db, Movies };
