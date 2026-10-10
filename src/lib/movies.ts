import catalog from "@/data/catalog.json";

export interface Movie {
  id: string;
  title: string;
  year: number | null;
  genre: string;
  director: string;
  description: string;
  archiveId: string;
  embedUrl: string;
}

export function getMovies(): Movie[] {
  return catalog as Movie[];
}

export function getMovie(id: string): Movie | undefined {
  return getMovies().find((m) => m.id === id);
}

export function getGenres(): string[] {
  const set = new Set(getMovies().map((m) => m.genre));
  return Array.from(set).sort();
}

export function getByGenre(genre: string): Movie[] {
  return getMovies().filter((m) => m.genre === genre);
}

export function searchMovies(q: string): Movie[] {
  const needle = q.trim().toLowerCase();
  if (!needle) return getMovies();
  return getMovies().filter(
    (m) =>
      m.title.toLowerCase().includes(needle) ||
      m.director.toLowerCase().includes(needle) ||
      m.genre.toLowerCase().includes(needle) ||
      String(m.year ?? "").includes(needle)
  );
}

export function thumbnailUrl(m: Movie): string {
  return `https://archive.org/services/img/${m.archiveId}`;
}
