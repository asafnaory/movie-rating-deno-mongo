import { Movie } from "../controllers/movie-class.ts";
import { Movies } from "../db/mongo.ts";
import { MovieDTO } from "./movie-dto.ts"

export const allMovies = async () => await Movies.find();

export const movieById = async (c: any) => {
  const ret = await Movies.findOne({ _id: { "$oid": c.params.id } });
  return ret;
};

export const createMovie = async (c: any) => {
  console.dir(c);
  const { name, rating, actor } = await c.body as MovieDTO;
  const newMovie = new Movie(name, rating, actor);
  return await Movies.insertOne(newMovie);
};

export const updateMovie = async ({
  body,
  params,
}: any) => {
  const { id } = params;
  const { name, rating, actor } = await body;

  const fetchedMovie = await Movies.findOne({ _id: { $oid: id } });
  if (fetchedMovie) {
    return await Movies.updateOne(
      { _id: { $oid: id } },
      { $set: { name, rating, actor } },
    );
  }
};

export const deleteMovie = async (c: any) => {
  await Movies.deleteOne({ _id: c.id });
}