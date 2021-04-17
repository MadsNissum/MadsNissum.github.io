const { homehtml } = require('../homehtml');

function processRequest(request, response) {
    const baseURL = 'http://' + request.headers.host + '/';
    const theURL = new URL(request.url, baseURL);
    const queryPath = decodeURIComponent(theURL.pathname);
    const pathElements = queryPath.split('/');
    
    console.log(pathElements);

    switch (request.method) {
        case 'GET':
            switch (pathElements[1]) {
                case '':
                    response.setHeader('Content-Type', 'text/html');
                    response.write(homehtml());
                    response.end();
                    break;
            }
            break;
    }
}

module.exports = { processRequest };