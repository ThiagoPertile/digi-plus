import express from "express";
import Playlist from "../models/playlistModel.js";

const router = express.Router();

//endpoint

//get all playlists
router.get("/", async (req, res) => {
    try {
        const playlists = await Playlist.find({});
        return res.status(200).json({
            count: playlists.length,
            data: playlists
        });
        console.log(playlists);
    } catch (error) {
        console.log(error);
    }
    
})

//get single playlist
router.get("/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const playlist = await Playlist.findById(id);
        return res.status(200).json({
            data: playlist
        });
        console.log(playlist);
    } catch (error) {
        console.log(error);
    }
})

//create playlist
router.post("/", async (req, res) => {
    try {
        if (
            !req.body.playlistName ||
            !req.body.playlistOwner 
        ) {
            return res.status(400).send("All fields are required");
        }
        const newPlaylist = {
            playlistName: req.body.playlistName,
            playlistOwner: req.body.playlistOwner,
            playlistAbout: req.body.playlistAbout,
            playlistProducts: req.body.playlistProducts,
            playlistBanner: req.body.playlistBanner
        }
        console.log(newPlaylist);

        const playlist = await Playlist.create(newPlaylist);
        console.log(playlist);

        return res.status(200).send(playlist);
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
})

//update playlist
router.put("/:id", async (req, res) => {
    try {
        if (
            !req.body.playlistName ||
            !req.body.playlistOwner 
        ) {
            return res.status(400).send("All fields are required");
        }
        const {id} = req.params;
        const result = await Playlist.findByIdAndUpdate(id, req.body);
        console.log(result);
        
        if(!result) {
            return res.status(404).json("Playlist not found");
        }
        return res.status(200).send({message: "Playlist updated"});
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
})

//delete playlist
router.delete("/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const result = await Playlist.findByIdAndDelete(id);
        console.log(result);
        
        if(!result) {
            return res.status(404).json("Playlist not found");
        }
        return res.status(200).send({message: "Playlist deleted"});
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
})

export default router