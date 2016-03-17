'use strict';

var browserSync = require('browser-sync').create(),
    path        = require('./paths.js');


// Browser Sync
browserSync.init({
    proxy: {
        target: 'localhost:8000',
        ws: false
    },
    ui: {
        port: 8080,
        weinre: {
            port: 9090
        }
    },
    // ghostMode: false,
    ghostMode: {
    	clicks: true,
    	forms: true,
    	scroll: true
    },
    notify: true,
    logLevel: 'info', // Can be either "info", "debug", "warn", or "silent"
    logPrefix: 'App',
    logConnections: true,
    logFileChanges: true,

    open: true,
    browser: ['google chrome canary', 'firefoxdeveloperedition'],
    // tunnel: 'Demo',

    online: true,
    reloadOnRestart: true,
    injectChanges: true,

    files: [
        path.to.stylus.compiled,
        path.to.scripts.bundle,
        path.to.images.output,
        path.to.fonts.output
    ],

    plugins: [
        {
            module: 'bs-html-injector',
            options: {
                files: path.to.jade.compiled
            }
        }
    ]
});
