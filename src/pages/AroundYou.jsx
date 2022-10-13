import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Error from "../components/Error";
import Loader from "../components/Loader";
import { SongCard } from "../components/SongCard";
import { useGetSongsByCountryQuery } from "../redux/services/shazamCore";

export default function AroundYou() {
  const [country, setCountry] = useState();
  const [loading, setLoading] = useState();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  console.log(country);
  const { data, isFetching, error } = useGetSongsByCountryQuery(country);
  console.log(data);
  useEffect(() => {
    // fetch(
    //   "https://geo.ipify.org/api/v2/country?apiKey=at_5Wv0Pzx0WiS7ALIJ9TNo0wI8XTmLb"
    // )
    //   .then((response) => console.log(response?.data?.location.country))
    //   .catch((error) => console.log(error))
    //   .finally(() => setLoading(false));
    fetch(
      "https://geo.ipify.org/api/v2/country?apiKey=at_5Wv0Pzx0WiS7ALIJ9TNo0wI8XTmLb"
    )
      .then((response) => response.json())
      //   .then((data) => console.log(data))
      .then((data) => setCountry(data.location.country))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [country]);
  if (isFetching && loading) return <Loader title="Loading Songs Around You" />;
  if (error && country) return <Error />;
  return (
    <div className="flex flex-col">
      <h1 className="font-bold text3-xl text-white text-left mt-4 mb-10">
        Around You
        <span className="font-black"> : {country}</span>
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
