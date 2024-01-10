import mongoose from "mongoose";

const connect = (url) => {
    mongoose.set("strictQuery", true);
    mongoose.connect(url).then(() => {
        console.log("Connected to MongoDB");
    }).catch((error) => {
        console.log("Error connecting to MongoDB");
        console.log(error);
    });
};

export default connect;