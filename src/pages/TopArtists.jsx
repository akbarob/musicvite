import React from "react";
import ArtistCard from "../components/ArtistCard";
import Error from "../components/Error";
import Loader from "../components/Loader";
import { SongCard } from "../components/SongCard";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

export default function TopArtists() {
  const { data, isFetching, error } = useGetTopChartsQuery();

  if (isFetching) return <Loader title="Loading Top Charts" />;
  if (error) return <Error />;
  return (
    <div className="flex flex-col">
      <h1 className="font-bold text3-xl text-white text-left mt-4 mb-10">
        Top Artists
      </h1>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((track, i) => {
          return <ArtistCard key={track.key} track={track} />;
        })}
      </div>
    </div>
  );
}
