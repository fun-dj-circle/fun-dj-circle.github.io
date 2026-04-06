"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface Release {
  date: string;
  title: string;
  image: string;
  url: string;
}

export default function Jacket() {
  const [releases, setReleases] = useState<Release[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReleases = async () => {
      try {
        const res = await fetch("/api/releases");
        const data: Release[] = await res.json();
        setReleases(data);
      } catch (error) {
        console.error("Failed to fetch releases:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReleases();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12 md:gap-24 max-w-6xl mx-auto px-4 py-16">
      {releases.map((release) => (
        <a
          key={release.date}
          href={release.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:opacity-80 transition-opacity"
        >
          <div className="relative aspect-square">
            <Image
              src={release.image}
              alt={release.title}
              fill
              className="object-cover"
            />
          </div>
          <p className="text-xl mt-2 text-start truncate text-black font-bold font-helvetica-lt-pro">{release.title}</p>
        </a>
      ))}
    </div>
  );
}
