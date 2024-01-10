import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connect from "./db/connect.js";
import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";

dotenv.config();



const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);

app.get("/", (req, res) => {
    res.send("Hello World!");
});


const startServer = () => {
    try {
        connect(process.env.MONGODB_URL);
        app.listen(4000, () => {
            console.log(`Server listening on port 4000`);
        });
    } catch (error) {
        console.log(error);
    }
}

startServer();