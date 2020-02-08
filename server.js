const http = require("http");
const server = http.createServer((r,s)=> s.end("Hello world\n"));
server.listen("4242",()=> console.log("server up and runnig"));
