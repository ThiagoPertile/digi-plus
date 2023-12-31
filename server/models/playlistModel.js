import mongoose from "mongoose";

const playlistSchema = new mongoose.Schema({
    playlistName: {
        type: String,
        required: true
    },
    playlistBanner: {
        type: String,
        default: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    playlistOwner: {
        type: String,
        required: true
    },
    playlistAbout: {
        type: String,
        default: ""
    },
    playlistProducts: {
        type: Array,
        default: []
    }
});

export default mongoose.model("Playlist", playlistSchema);
