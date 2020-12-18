import { Application } from "https://deno.land/x/abc@v1.2.2/mod.ts";

import { createMovie, allMovies, movieById, updateMovie, deleteMovie } from "./controllers/movies.ts"

const app = new Application();

app
  .get("/movies", allMovies)
  .get("/movies/:id", movieById)
  .post("/movies", createMovie)
  .put("/movies/:id", updateMovie)
  .delete("/movies/:id", deleteMovie)
  .start({ port: 8080 });
  