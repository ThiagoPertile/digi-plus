import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";


const Home = () => {
  const [playlists, setPlaylists] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:3333/playlists")
      .then((res) => {
        setPlaylists(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  return (
    <div className="container mx-auto mt-8">
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold tracking-tight text-blue-500">
                playlists digitaliza.ai
              </h2>
              <Link to="/playlist/create">
                <IoIosAddCircle className="text-amber-500 text-4xl"/>
              </Link>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8" >
              {playlists.map((playlist, index) => (
                <div key={playlist._id} className="bg-neutral-50 group relative  drop-shadow-md hover:drop-shadow-xl">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                      src={playlist.playlistBanner}
                      alt={`banner ${playlist.playlistName}`}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className=" flex justify-between p-2">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-sm text-gray-700">
                          <a href={`playlist/${playlist._id}`}>
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            />
                            {playlist.playlistName}
                          </a>
                        </h3>
                        <div className="flex items-center gap-1">
                          <FaRegUserCircle  className="mt-1 text-sm text-gray-500"/> 
                          <p className="mt-1 text-sm text-gray-500">{playlist.playlistOwner}</p>
                        </div>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        {playlist.playlistAbout.substring(0, 150) + "..."}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
