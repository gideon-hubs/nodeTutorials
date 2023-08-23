const http = require("http");

const handleRequest = (request, response) => {
  let clientUrl = request.clientUrl;
  if (clientUrl === "/register") {
    response.write(" <h1>This is the registration page</h1> ");
  } else if (clientUrl === "/login") {
    response.write("<h1>This is the login page</h1>");
  } else {
    response.write("<h1>This is the login page</h1>");
  }
  response.write("you are welcome");
  response.end();
  console.log(request);
};

//create avariable, to create an http server

const server = http.createServer(handleRequest);
let PORT = 8080;

//create a port dedicated for the server
//server.listen(3000,)

server.listen(PORT, () => {
  console.log("server is ready and listening on " + PORT);
});

//GO TO TERMINAL AND DO node index.js - you get he information server is ready
//go to your brower and type localhost:8080 and it will load

// go to package.json file and insde the script add a new object "start": "node index.js" with this you dont do node index.js in the terminal before it starts. you only do npm start

// express js package
// go to package.json file and insde the script add a new object "start": "node index.js" with this you dont do node index.js in the terminal before it starts. you only do npm start