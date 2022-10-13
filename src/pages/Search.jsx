import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Error from "../components/Error";
import Loader from "../components/Loader";
import { SongCard } from "../components/SongCard";
import { useGetSongsBySearchQuery } from "../redux/services/shazamCore";

export default function Search() {
  const { search } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const { data, isFetching, error } = useGetSongsBySearchQuery(search);
  console.log(data);
  const songs = data?.tracks.hits.map((item) => item.track);
  console.log(songs);

  if (isFetching) return <Loader title="Loading Top Charts" />;
  if (error) return <Error />;
  return (
    <div className="flex flex-col">
      <h1 className="font-bold text3-xl text-white text-left mt-4 mb-10">
        Results for :{" "}
        <span className="font-black text-green-600 text-xl">{search}</span>
      </h1>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {songs?.map((song, i) => {
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
