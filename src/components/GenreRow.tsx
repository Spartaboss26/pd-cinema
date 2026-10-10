import MovieCard from "./MovieCard";
import { Movie } from "@/lib/movies";

export default function GenreRow({
  title,
  movies,
}: {
  title: string;
  movies: Movie[];
}) {
  if (movies.length === 0) return null;
  return (
    <section className="mt-10">
      <h2 className="px-4 sm:px-8 text-xl font-bold mb-4">{title}</h2>
      <div className="row-scroll flex gap-4 overflow-x-auto px-4 sm:px-8 pb-2 snap-x">
        {movies.map((m) => (
          <MovieCard key={m.id} movie={m} />
        ))}
      </div>
    </section>
  );
}
