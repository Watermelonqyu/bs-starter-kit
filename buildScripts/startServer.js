import browserSync from 'browser-sync';

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


// init starts the server
bsServer.init({
    server: './app'
});