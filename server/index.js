import  Express, {request, response}  from "express";
import {mongoDBURL, PORT} from "./config.js";
import mongoose from "mongoose";
import playlistRouter from "./routes/playlistsRoute.js";
import cors from "cors";


const app = Express();
app.use(Express.json());

app.use(cors());

//route
app.get("/", (req, res) => {
    return res.status(200).send("Hello World");
})

app.use("/playlists", playlistRouter);


//database
mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log("Database connected");
    })
    .catch((err) => {
        console.log(err);
    })


//server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})