import mongoose from "mongoose";
import { app } from "./app";
const start = async () => {
  // if (!process.env.JWT_KEY) {
  //   throw new Error('JWT_KEY must be defined');
  // }

  try {
    //'mongodb://auth-mongo-srv:27017/auth'
    // 'mongodb://10.96.26.26:27017/auth
    await mongoose.connect("mongodb://127.0.0.1:27017/auth", {
      // useNewUrlParser: true,
      //useUnifiedTopology: true,
      // useCreateIndex: true
    });
    console.log("Connected to MongoDb");
  } catch (err) {
    console.error(err);
  }

  app.listen(3000, () => {
    console.log("Listening on port 3000!!!!!!!!");
  });
};

start();
