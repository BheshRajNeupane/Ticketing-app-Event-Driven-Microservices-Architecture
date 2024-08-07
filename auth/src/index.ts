import mongoose from "mongoose";
import { app } from "./app";
const start = async () => {
  console.log("Starting up..")
  // if (!process.env.JWT_KEY) {
  //   throw new Error('JWT_KEY must be defined');
  // }
  //   if (!process.env.MONGO_URI) {
  //   throw new Error('MONGO_URI must be defined');
  // }

  try {
    await mongoose.connect(
      // process.env.MONGO_URI
      "mongodb://127.0.0.1:27017/auth",
      {
        useNewUrlParser: true,
        //useUnifiedTopology: true,
        // useCreateIndex: true
      }
    );
    console.log("Connected to MongoDb");
  } catch (err) {
    console.error(err);
  }
const port = 3000;

  app.listen(port, () => {
    console.log(`Listening on port ${port}!!!!!!!!`);
  });
};

start();
