import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = async () => {
    const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-ixzujhq-shard-00-00.s6xdf9s.mongodb.net:27017,ac-ixzujhq-shard-00-01.s6xdf9s.mongodb.net:27017,ac-ixzujhq-shard-00-02.s6xdf9s.mongodb.net:27017/?ssl=true&replicaSet=atlas-13obc5-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
  }
}

export default Connection;