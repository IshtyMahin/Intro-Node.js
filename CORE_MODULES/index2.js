// local module
const other = require('./other');

// const res =other.substract(5,4)
// console.log(res)

// core module

const http = require('http');
const { stringify } = require('querystring');

const server = http.createServer((req, res) => {
    // res.end('hello node.js');
    // console.log(req.url)
    if(req.url=='/'){
        res.writeHead(200,{'Content_Type':'text/html'})
        res.write('<p> This is Home page</p>')
        res.end()
    }
    else if(req.url=='/contact'){
        res.writeHead(200,{'Content_Type':'application/json'})
        res.write(JSON.stringify({course:"ACC"}))
        res.end()
    }
    else if(req.url=='/about'){
        res.writeHead(200,{'Content_Type':'text/html'})
        res.write('<p> This is About page</p>')
        res.end()
    }
});
const PORT = 5000;
server.listen(PORT);
console.log(`server is running at ${PORT}`);
