import mongoose from "mongoose";
import { app } from "./app";
import { natsWrapper } from "./nats-wrapper";
import { TicketUpdatedListener } from './events/listeners/ticket-updated-listener';

import { TicketCreatedListener } from './events/listeners/ticket-created-listener'
const start = async () => {
  // if (!process.env.JWT_KEY) {
  //   throw new Error('JWT_KEY must be defined');
  // }
  // if (!process.env.MONGO_URI) {
  //   throw new Error('MONGO_URI must be defined');
  // }

  try {
    // await natsWrapper.connect('ticketing','asdfsd' , 'http://10.110.137.71:4222')
    await natsWrapper.connect("ticketing", "asdfsd", "http://127.0.0.1:4222");
    natsWrapper.client.on("close", () => {
      console.log("NATS connection closed...!");
    });
    process.on("SIGINT", () => natsWrapper.client.close());
    process.on("SIGTERM", () => natsWrapper.client.close());

    new TicketCreatedListener(natsWrapper.client).listen();
    new TicketUpdatedListener(natsWrapper.client).listen();

    await mongoose.connect(
      //process.env.MONGO_URI
      "mongodb://127.0.0.1:27017/tickets",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
      }
    );
    console.log("Connected to MongoDb");
  } catch (err) {
    console.error(err);
  }

  const port = 3001;

  app.listen(port, () => {
    console.log(`Listening on port ${port}!!!!!!!!`);
  });
};
start();
