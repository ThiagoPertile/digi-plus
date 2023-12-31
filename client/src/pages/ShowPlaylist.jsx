import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import { FaRegUserCircle } from "react-icons/fa";


const ShowPlaylist = () => {

  const [playlist, setPlaylist] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const { id } = useParams()


  useEffect(() => {
    axios
      .get(`http://localhost:3333/playlists/${id}`)
      .then((res) => {
        setPlaylist(res.data.data)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])	

  return (
    <div className='container mx-[auto] mt-8'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Lado Esquerdo (Título e Subtítulo) */}
        <div className="p-4">
          <div className='flex gap-2 items-center'>
            <h1 className="text-2xl font-bold mb-2">{playlist.playlistName}</h1>
            <FaRegUserCircle  className="mb-1 text-md text-gray-500"/>
          </div>
          <p className="text-lg text-gray-600">{playlist.playlistAbout}</p>
        </div>
  
        {/* Lado Direito (Banner) */}
        <div className="p-4">
          <div className="max-w-full h-[250px] overflow-hidden">
            <img className="w-full h-full object-cover" src={playlist.playlistBanner} alt="Banner"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowPlaylist