const { processRequest } = require('./helpers/processRequest');

const http = require('http');
const port = 80;

const server = http.createServer((request, response) => {
    try {
        processRequest(request, response);
    }   catch (error) {
        console.log('Der er sket en fejl:' + error);
    }
});

server.listen(port, () => {console.log('Server er live');})