import feathers from "@feathersjs/feathers";
import socketio from "@feathersjs/socketio-client";
import rest from "@feathersjs/rest-client";
import auth from "@feathersjs/authentication-client";
import io from "socket.io-client";

const socket = io("http://35.238.131.108:3030");
const http = rest("http://35.238.131.108:3030");
const app = feathers();

app.configure(socketio(socket));
// app.configure(http.fetch(window.fetch));

app.configure(
  auth({
    storage: window.localStorage
  })
);

app.on("authenticated", e => {
  user = e;
});

app.on("logout", () => (user = null));

export const getUser = async () => {
  const jwt = await app.passport.getJWT();
  return app.passport.verifyJWT(jwt);
};

export let user = null;
export const loans = app.service("loans");
export const payments = app.service("payments");
export const agreements = app.service("agreements");
export default app;
