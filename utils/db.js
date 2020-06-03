import mongoose from "mongoose";
import config from "../config.json";

export const connect = (url = config.dbUrl, opts = {}) => {
  console.log("MongoDB Database Connected");
  return mongoose.connect(url, {
    ...opts,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
};
