import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Error from "../components/Error";
import Loader from "../components/Loader";

import { playPause, setActiveSong } from "../redux/features/playerSlice";
import {
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} from "../redux/services/shazamCore";
import { DetailsHeader } from "./DetailsHeader";
import { RelatedSongs } from "./RelatedSongs";

export const SongDetails = () => {
  const { songid } = useParams();
  console.log(songid);
  const {
    data: songData,
    isFetching: isFetchingSongData,
    error,
  } = useGetSongDetailsQuery({ songid });
  const { data: relatedSong, isFetching: isFetchingRelatedSong } =
    useGetSongRelatedQuery({ songid });
  console.log(songData);

  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  if (isFetchingSongData && isFetchingRelatedSong)
    return <Loader title="Searching song details" />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <DetailsHeader songData={songData} />
      {/* artistId={a}  */}
      <div className="mb-10">
        <h2 className="text-white text3-xl font-bold">lyrics:</h2>
        <div className="mt-5">
          {songData?.sections[1].type === "LYRICS" ? (
            songData?.sections[1].text.map((line, i) => (
              <p className="text-gray-400 my-1  text-base">{line}</p>
            ))
          ) : (
            <p>Sorry, No Lyrics Found!</p>
          )}
        </div>
      </div>
      <RelatedSongs />
    </div>
  );
};
