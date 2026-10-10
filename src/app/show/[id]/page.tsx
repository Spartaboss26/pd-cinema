import Link from "next/link";
import { notFound } from "next/navigation";
import ShowPlayer from "@/components/ShowPlayer";
import { getShow, getShows } from "@/lib/movies";

export default async function ShowPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const show = getShow(id);
  if (!show) notFound();

  return (
    <div className="px-4 sm:px-8 py-8 max-w-6xl mx-auto">
      <Link href="/shows" className="text-sm text-neutral-400 hover:text-red-400">
        ← Back to shows
      </Link>

      <h1 className="mt-4 text-3xl sm:text-4xl font-black">{show.showTitle}</h1>
      <p className="mt-2 text-neutral-400">
        {show.episodes.length} episode{show.episodes.length === 1 ? "" : "s"} ·{" "}
        {show.genre}
      </p>
      {show.description && (
        <p className="mt-3 text-neutral-300 max-w-3xl">{show.description}</p>
      )}
      <p className="mt-3 inline-block rounded bg-green-900/40 border border-green-700 px-3 py-1 text-sm text-green-300">
        Public domain — free to watch
      </p>

      <ShowPlayer show={show} />
    </div>
  );
}

export function generateStaticParams() {
  return getShows().map((s) => ({ id: s.id }));
}
