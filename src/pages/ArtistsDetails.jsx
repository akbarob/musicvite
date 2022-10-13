import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Error from "../components/Error";
import Loader from "../components/Loader";

import { useGetArtistDetailsQuery } from "../redux/services/shazamCore";
import { DetailsHeader } from "../components/DetailsHeader";
import { RelatedSongs } from "../components/RelatedSongs";

export const ArtistsDetails = () => {
  const { artistId } = useParams();
  console.log(artistId);

  const {
    data: artistData,
    isFetching: isFetchingArtistsDetail,
    error,
  } = useGetArtistDetailsQuery(artistId);
  console.log(artistData);

  const { activeSong, isPlaying } = useSelector((state) => state.player);

  if (isFetchingArtistsDetail) return <Loader title="Searching song details" />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <DetailsHeader artistId={artistId} artistData={artistData} />

      <RelatedSongs
        data={Object.values(artistData?.songs)}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
    </div>
  );
};
