'use strict';

var lactate = require('lactate'),
    http    = require('http');

var env     = process.env.NODE_ENV,
    options = {},
    root,
    port;

switch (env) {
    case 'development':
        // Setup development config
        root = './_dist';
        options = {
            root: root,
            not_found: root + '/404.html',
            gzip: false,
            cache: false,
            debug: true
        };
        port = 8000;
        break;
    case 'production':
        // Setup production config
        root = '/var/www/app/_dist';
        options = {
            root: root,
            not_found: root + '/404.html',
            max_age: 'one week'
        };
        port = 8001;
        break;
}

var files = lactate.dir(root, options),
    server = new http.Server();

server.addListener('request', function(req, res) {
    if (req.url === '/') {
        files.serve('index.html', req, res);
    } else {
        files.serve(req, res);
    }
});

server.listen(port, function() {
    console.log('==> Lactate is listening on port ' + port);
});
