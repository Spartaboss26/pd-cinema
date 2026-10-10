"use client";

import Link from "next/link";
import { useState } from "react";
import { Show, thumbnailUrl } from "@/lib/movies";

export default function ShowPlayer({ show }: { show: Show }) {
  const [currentId, setCurrentId] = useState(show.episodes[0]?.id);
  const current = show.episodes.find((e) => e.id === currentId);

  return (
    <div>
      {current && (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-1">{current.title}</h2>
          <p className="text-sm text-neutral-500 mb-4">
            {current.seasonEpisode}
            {current.year ? ` · ${current.year}` : ""}
          </p>
          <div className="aspect-video w-full overflow-hidden rounded-lg bg-black border border-neutral-800">
            <iframe
              key={current.id}
              src={current.embedUrl}
              className="h-full w-full"
              allowFullScreen
              title={current.title}
            />
          </div>
          <p className="mt-2 text-xs text-neutral-500">
            Stream provided by the Internet Archive.
          </p>
        </div>
      )}

      <div className="mt-10">
        <h2 className="text-xl font-bold mb-4">Episodes</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {show.episodes.map((ep) => (
            <button
              key={ep.id}
              onClick={() => setCurrentId(ep.id)}
              className={`flex gap-4 rounded-lg border p-3 text-left transition-colors ${
                ep.id === currentId
                  ? "bg-neutral-800 border-red-600"
                  : "bg-neutral-900 border-neutral-800 hover:border-red-600"
              }`}
            >
              <div className="w-32 shrink-0 aspect-video overflow-hidden rounded bg-neutral-800 relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={thumbnailUrl(ep.archiveId)}
                  alt={ep.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                {ep.id === currentId && (
                  <span className="absolute bottom-1 left-1 rounded bg-red-600 px-1.5 py-0.5 text-[10px] font-bold">
                    PLAYING
                  </span>
                )}
              </div>
              <div className="min-w-0">
                <p className="font-medium text-sm leading-tight clamp-2">
                  {ep.title}
                </p>
                <p className="text-xs text-neutral-500 mt-1">
                  {ep.seasonEpisode}
                  {ep.year ? ` · ${ep.year}` : ""}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
