//http
const http = require('http');
//http is used to create a server
const server = http.createServer((request,response)=>{
    /* 
    this create a server that listens to the port 8080
    and when a request is made to the server
    it gets it in request and sends a response
    
    request is an object that contains the request made to the server
    and its pretty big dictionary
    but the main stuff is request.url
    which is the url of the request

    response is an object that is used to send the response to the request
    we send reponse based on the req we get
    */
    // response.write("Hello World");
    // response.end();
    console.log(request.url);
    if(request.url==='/'){
        response.write("Hello World");//this is home/main page when we visit 0.0.0.0
        response.end();
    }
    else if(request.url==='/about'){// this is 0.0.0.0/about
        response.write("About");
        response.end();
    }
    else{
        response.write("<h1>404 Not Found</h1>");//this returns 404 not found for any other url
        //yeah we can use html in response
        response.end();
    }
})
//1:52:56
server.listen(8080);