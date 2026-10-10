import Link from "next/link";
import { notFound } from "next/navigation";
import MovieCard from "@/components/MovieCard";
import { getMovie, getMovies, getByGenre, thumbnailUrl } from "@/lib/movies";

export default async function MoviePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const movie = getMovie(id);
  if (!movie) notFound();

  const related = getByGenre(movie.genre)
    .filter((m) => m.id !== movie.id)
    .slice(0, 10);

  return (
    <div className="px-4 sm:px-8 py-8 max-w-6xl mx-auto">
      <Link href="/browse" className="text-sm text-neutral-400 hover:text-red-400">
        ← Back to browse
      </Link>

      <div className="mt-6 grid md:grid-cols-[280px_1fr] gap-8">
        {/* Poster */}
        <div className="mx-auto w-56 md:w-full">
          <div className="aspect-[2/3] overflow-hidden rounded-lg bg-neutral-800">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={thumbnailUrl(movie)}
              alt={movie.title}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Info */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-black">{movie.title}</h1>
          <p className="mt-2 text-neutral-400">
            {movie.year ?? "Year unknown"} · {movie.genre}
            {movie.director ? ` · Dir. ${movie.director}` : ""}
          </p>
          <p className="mt-4 text-neutral-300 leading-relaxed">
            {movie.description}
          </p>
          <p className="mt-4 inline-block rounded bg-green-900/40 border border-green-700 px-3 py-1 text-sm text-green-300">
            Public domain — free to watch
          </p>
        </div>
      </div>

      {/* Player */}
      <div className="mt-10">
        <h2 className="text-xl font-bold mb-4">Watch now</h2>
        <div className="aspect-video w-full overflow-hidden rounded-lg bg-black border border-neutral-800">
          <iframe
            src={movie.embedUrl}
            className="h-full w-full"
            allowFullScreen
            title={movie.title}
          />
        </div>
        <p className="mt-2 text-xs text-neutral-500">
          Stream provided by the Internet Archive.
        </p>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-bold mb-4">More {movie.genre}</h2>
          <div className="row-scroll flex gap-4 overflow-x-auto pb-2 snap-x">
            {related.map((m) => (
              <MovieCard key={m.id} movie={m} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export function generateStaticParams() {
  return getMovies().map((m) => ({ id: m.id }));
}
