'use strict';

var path = require('path');

var tasks = __dirname,
    root = path.dirname(tasks); // Return the directory name of a path /tasks/.

var client = root + '/client/',
    server = root + '/server/',
    dist   = root + '/_dist/';

// Export path object
module.exports = {
    to: {
        client: client,
        modules: client + 'modules',
        server: server,
        dist: dist,
        jade: {
            main: client + 'index.jade',
            modules: client + 'modules/**/*.jade',
            compiled: dist + 'index.html',
            dist: dist
        },
        stylus: {
            main: client + 'main.styl',
            modules: client + 'modules/**/*.styl',
            compiled: dist + 'main.css',
            dist: dist
        },
        scripts: {
            main: client + 'main.js',
            modules: client + 'modules/**/*.js',
            bundle: dist + 'main.js',
            dist: dist
        },
        images: {
            source: client + 'assets/images/**/*.*',
            dir: client + 'assets/images',
            favicon: client + 'assets/images/favicon.png',
            output: dist + 'img/**/*.*',
            dist: dist + 'img'
        },
        fonts: {
            source: client + 'assets/fonts/**/*.{eot,svg,ttf,woff,woff2}',
            dir: client + 'assets/fonts',
            output: dist + 'font/**/*.{eot,svg,ttf,woff,woff2}',
            dist: dist + 'font'
        },
        files: {
            client: client + '*.*',
            config: client + 'config.xml',
            dist: {
                root: root + '/_dist/',
                www: dist
            }
        }
    }
};
