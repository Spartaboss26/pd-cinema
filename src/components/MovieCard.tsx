import Link from "next/link";
import { Movie, thumbnailUrl } from "@/lib/movies";

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <Link
      href={`/movie/${movie.id}`}
      className="group shrink-0 w-40 sm:w-48 snap-start"
    >
      <div className="relative aspect-[2/3] overflow-hidden rounded-lg bg-neutral-800">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={thumbnailUrl(movie)}
          alt={movie.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="inline-block rounded bg-red-600 px-2 py-1 text-xs font-semibold">
            ▶ Watch free
          </span>
        </div>
      </div>
      <h3 className="mt-2 text-sm font-medium leading-tight clamp-2 group-hover:text-red-400">
        {movie.title}
      </h3>
      <p className="text-xs text-neutral-500">
        {movie.year ?? "—"} · {movie.genre}
      </p>
    </Link>
  );
}
