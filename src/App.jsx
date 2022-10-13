import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import MusicPlayer from "./components/MusicPlayer";
import { SearchBar } from "./components/SearchBar";
import { SideBar } from "./components/SideBar";
import { TopPlay } from "./components/TopPlay";
import AroundYou from "./pages/AroundYou";
import { ArtistsDetails } from "./pages/ArtistsDetails";
import { Discover } from "./pages/Discover";
import Search from "./pages/Search";
import { SongDetails } from "./pages/SongDetails";
import TopArtists from "./pages/TopArtists";
import TopCharts from "./pages/TopCharts";

function App() {
  const { activeSong } = useSelector((state) => state.player);

  return (
    <div className="flex relative h-screen">
      <SideBar />
      <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]">
        <SearchBar />
        <div className="px-6 h-[100vh] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <Routes>
              <Route path="/" element={<Discover />} />
              <Route path="/songs/:songid" element={<SongDetails />} />
              <Route path="/artists/:artistId" element={<ArtistsDetails />} />
              <Route path="around-you" element={<AroundYou />} />
              <Route path="top-charts" element={<TopCharts />} />
              <Route path="top-artists" element={<TopArtists />} />
              <Route path="/search/:search" element={<Search />} />
            </Routes>
          </div>
          <div className="xl:sticky relative top-0 h-fit">
            <TopPlay />
          </div>
        </div>
        {activeSong?.title && (
          <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
            <MusicPlayer />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
