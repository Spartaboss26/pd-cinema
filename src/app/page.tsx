import Link from "next/link";
import GenreRow from "@/components/GenreRow";
import ShowCard from "@/components/ShowCard";
import {
  getMovies,
  getGenres,
  getByGenre,
  getShows,
  movieThumbnail,
} from "@/lib/movies";

export default function Home() {
  const movies = getMovies();
  const genres = getGenres();
  const featured = movies[0];
  const shows = getShows();

  return (
    <div>
      {/* Hero */}
      {featured && (
        <section className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={movieThumbnail(featured)}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
          <div className="relative px-4 sm:px-8 pb-12 max-w-3xl">
            <p className="text-red-500 font-semibold text-sm uppercase tracking-widest mb-2">
              100% free · Public domain · No signup
            </p>
            <h1 className="text-4xl sm:text-6xl font-black leading-tight">
              Classic cinema,
              <br />
              free forever.
            </h1>
            <p className="mt-4 text-neutral-300 max-w-xl">
              {movies.length} films and {shows.length} classic TV shows —
              horror, noir, sci-fi, silent classics and more. Stream instantly,
              no account needed.
            </p>
            <div className="mt-6 flex gap-4">
              <Link
                href="/browse"
                className="rounded bg-red-600 px-6 py-3 font-semibold hover:bg-red-700"
              >
                Start watching
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* TV shows row */}
      {shows.length > 0 && (
        <section className="mt-10">
          <div className="flex items-center justify-between px-4 sm:px-8 mb-4">
            <h2 className="text-xl font-bold">Classic TV</h2>
            <Link href="/shows" className="text-sm text-red-400 hover:underline">
              View all →
            </Link>
          </div>
          <div className="row-scroll flex gap-4 overflow-x-auto px-4 sm:px-8 pb-2 snap-x">
            {shows.map((s) => (
              <ShowCard key={s.id} show={s} />
            ))}
          </div>
        </section>
      )}

      {/* Genre rows */}
      <div className="pb-8">
        {genres.map((g) => (
          <GenreRow key={g} title={g} movies={getByGenre(g)} />
        ))}
      </div>
    </div>
  );
}
