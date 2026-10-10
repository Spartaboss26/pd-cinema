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

export interface Episode {
  id: string;
  title: string;
  seasonEpisode: string;
  year: number | null;
  archiveId: string;
  embedUrl: string;
}

export interface Show {
  id: string;
  showTitle: string;
  genre: string;
  description: string;
  episodes: Episode[];
}

interface Catalog {
  movies: Movie[];
  shows: Show[];
}

const data = catalog as Catalog;

export function getMovies(): Movie[] {
  return data.movies;
}

export function getMovie(id: string): Movie | undefined {
  return data.movies.find((m) => m.id === id);
}

export function getGenres(): string[] {
  const set = new Set(data.movies.map((m) => m.genre));
  return Array.from(set).sort();
}

export function getByGenre(genre: string): Movie[] {
  return data.movies.filter((m) => m.genre === genre);
}

export function searchMovies(q: string): Movie[] {
  const needle = q.trim().toLowerCase();
  if (!needle) return data.movies;
  return data.movies.filter(
    (m) =>
      m.title.toLowerCase().includes(needle) ||
      m.director.toLowerCase().includes(needle) ||
      m.genre.toLowerCase().includes(needle) ||
      String(m.year ?? "").includes(needle)
  );
}

export function getShows(): Show[] {
  return data.shows;
}

export function getShow(id: string): Show | undefined {
  return data.shows.find((s) => s.id === id);
}

export function thumbnailUrl(archiveId: string): string {
  return `https://archive.org/services/img/${archiveId}`;
}

export function movieThumbnail(m: Movie): string {
  return thumbnailUrl(m.archiveId);
}
