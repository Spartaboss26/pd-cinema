import Link from "next/link";
import { Show, thumbnailUrl } from "@/lib/movies";

export default function ShowCard({ show }: { show: Show }) {
  const firstEp = show.episodes[0];
  return (
    <Link
      href={`/show/${show.id}`}
      className="group shrink-0 w-64 snap-start"
    >
      <div className="relative aspect-video overflow-hidden rounded-lg bg-neutral-800">
        {firstEp && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={thumbnailUrl(firstEp.archiveId)}
            alt={show.showTitle}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="inline-block rounded bg-red-600 px-2 py-1 text-xs font-semibold">
            ▶ {show.episodes.length} episodes
          </span>
        </div>
      </div>
      <h3 className="mt-2 text-sm font-medium leading-tight clamp-2 group-hover:text-red-400">
        {show.showTitle}
      </h3>
      <p className="text-xs text-neutral-500">
        {show.episodes.length} episode{show.episodes.length === 1 ? "" : "s"} ·{" "}
        {show.genre}
      </p>
    </Link>
  );
}
