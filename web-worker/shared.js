const name = self.name ? `with name ${self.name}` : "unnamed";
console.log(`I am worker ${name}`);

const ports = [];
self.addEventListener("connect", event => {
  ports.push(event.port);
  console.log("new connection");
});
