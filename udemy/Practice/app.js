const http=require("http");
// console.log(http);

//Callback function to be executed after user makes a request to the 
//server
const respond=(request,response)=>{
    console.log(request.url);
    response.end("<html><body><h1>My server head</h1></body></html>");

}

const port=3000;


const hostname="127.0.0.1";

//Create a server
const server=http.createServer(respond);

//Listen to user request
server.listen(port,hostname,()=>console.log("Listenening port "));


