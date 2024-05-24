import nats from "node-nats-streaming";

const stan = nats.connect("ticketing", "abc", {
  url: "http://localhost:4222",
}); // client -->stan connection

stan.on("connect", () => {
  console.log("Punlisher connected to NATS !");

  const data = JSON.stringify({
    id: "12",
    title: "concert",
    price: "20",
  });

  stan.publish("ticket:created", data, () => {
    console.log("Event published !");
  });
});
