import React from "react";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

export const PlayPause = ({
  isPlaying,
  activeSong,
  song,
  handlePause,
  handlePlay,
}) => {
  return isPlaying && activeSong?.title === song.title ? (
    <FaPauseCircle size={35} className="text-red-400" onClick={handlePause} />
  ) : (
    <FaPlayCircle size={35} className="text-blue-800" onClick={handlePlay} />
  );
};
