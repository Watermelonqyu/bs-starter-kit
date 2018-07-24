import browserSync from 'browser-sync';
import webpackConf from '../webpack.config.dev';
import webpack from 'webpack';
import chalk from 'chalk';

var bsServer = browserSync.create();

// Listen to change events on HTML and reload
bsServer.watch("*.html").on("change", bsServer.reload);

// Provide a callback to capture ALL events to CSS
// files - then filter for 'change' and reload all
// css files on the page.
bsServer.watch("css/*.css", function (event, file) {
    if (event === "change") {
        bsServer.reload("*.css");
    }
});

webpack(webpackConf, (err, stats) => {
    if (err || stats.hasErrors()) {
        // Handle errors here
        console.log(chalk.red(err, stats));
    }
    // Done processing
  });


// init starts the server
bsServer.init({
    // server: './app'
    // for production
    server: './devBuild'
});