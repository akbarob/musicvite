import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { PlayPause } from "./PlayPause";

export const SongCard = ({ song, isPlaying, activeSong, data, i }) => {
  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };
  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };
  return (
    <div className="flex flex-col w-[150px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slidedown cursor-pointer rounded-xl mx-auto">
      <div className="relative w-full  group">
        <div
          className={`absolute inset-0 justify-center items-center bg-teal-400 bg-opacity-50 group-hover:flex ${
            activeSong?.title === song.title
              ? "flex bg-red-500 bg-opacity-30"
              : "hidden"
          }`}
        >
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePlay={handlePlayClick}
            handlePause={handlePauseClick}
          />
        </div>
        <img alt="song_img" src={song.images.coverart} />
      </div>
      <div className="mt-2 flex flex-col">
        <p className="font-semibold text-lg text-white truncate">
          <Link to={`/songs/${song?.key}`}>{song.title}</Link>
        </p>
        <p className="text-sm truncate text-gray-400 mt-2">
          <Link
            to={
              song.artists
                ? `/artist/${song?.artists[0]?.adamid}`
                : "/top-artists"
            }
          >
            {song.subtitle}
          </Link>
        </p>
      </div>
    </div>
  );
};
