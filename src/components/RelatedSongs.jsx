import React from "react";
import { SongBar } from "./SongBar";

export const RelatedSongs = ({
  data,
  isPlaying,
  activeSong,
  handlePlayClick,
  handlePauseClick,
  artistId,
}) => {
  console.log(data);

  return (
    <div>
      <h1 className="font-old text-white">Related Songs: </h1>

      <div className="mt-6 w-full flex flex-col"></div>
      {data?.map((song, i) => {
        return (
          <SongBar
            key={`${song.key}-${artistId}`}
            song={song}
            i={i}
            artistId={artistId}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePauseClick={handlePauseClick}
            handlePlayClick={handlePlayClick}
          />
        );
      })}
    </div>
  );
};
