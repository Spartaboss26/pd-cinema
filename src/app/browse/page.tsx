"use client";

import { useMemo, useState } from "react";
import MovieCard from "@/components/MovieCard";
import { getMovies, getGenres, searchMovies } from "@/lib/movies";

export default function Browse() {
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState("All");
  const genres = useMemo(() => ["All", ...getGenres()], []);

  const results = useMemo(() => {
    let list = searchMovies(query);
    if (genre !== "All") list = list.filter((m) => m.genre === genre);
    return list;
  }, [query, genre]);

  return (
    <div className="px-4 sm:px-8 py-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-black mb-6">Browse films</h1>

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search title, director, year…"
          className="flex-1 rounded bg-neutral-900 border border-neutral-700 px-4 py-3 outline-none focus:border-red-600"
        />
        <select
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="rounded bg-neutral-900 border border-neutral-700 px-4 py-3 outline-none"
        >
          {genres.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
      </div>

      {results.length === 0 ? (
        <p className="text-neutral-500">No films match your search.</p>
      ) : (
        <>
          <p className="text-sm text-neutral-500 mb-4">
            {results.length} film{results.length === 1 ? "" : "s"}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-8">
            {results.map((m) => (
              <MovieCard key={m.id} movie={m} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
