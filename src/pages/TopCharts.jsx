import React from "react";
import { useSelector } from "react-redux";
import Error from "../components/Error";
import Loader from "../components/Loader";
import { SongCard } from "../components/SongCard";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

export default function TopCharts() {
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const { data, isFetching, error } = useGetTopChartsQuery();

  if (isFetching) return <Loader title="Loading Top Charts" />;
  if (error) return <Error />;
  return (
    <div className="flex flex-col">
      <h1 className="font-bold text3-xl text-white text-left mt-4 mb-10">
        Discover Top Charts
      </h1>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, i) => {
          return (
            <SongCard
              key={song.key}
              song={song}
              isPlaying={isPlaying}
              activeSong={activeSong}
              data={data}
              i={i}
            />
          );
        })}
      </div>
    </div>
  );
}
