import ShowCard from "@/components/ShowCard";
import { getShows } from "@/lib/movies";

export default function Shows() {
  const shows = getShows();
  return (
    <div className="px-4 sm:px-8 py-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-black mb-2">Classic TV</h1>
      <p className="text-neutral-400 mb-8">
        Public domain episodes from television's golden age — free to watch.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
        {shows.map((s) => (
          <ShowCard key={s.id} show={s} />
        ))}
      </div>
    </div>
  );
}
