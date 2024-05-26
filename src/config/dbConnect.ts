import mongoose from "mongoose";
import { MONGO_HOST, MONGO_PORT } from "./config";

export const connectMongoDb = async () => {
  try {
    await mongoose.connect(`mongodb://${MONGO_HOST}:${MONGO_PORT}/usersDB`);
    console.log("MongoDB connected");
    // }
  } catch (error) {
    console.log(error);
  }
  mongoose.connection.on("error", (err) => {
    console.log(err);
  });
  mongoose.connection.on("disconnected", () => {
    console.log("Mongo disconnected");
  });
};
