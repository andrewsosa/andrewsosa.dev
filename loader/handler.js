module.exports = {
    run: () => {
        const https = require('https');

        https.get('https://www.andrewsosa.com', (resp) => {
            console.log("Yep, still working.");
        }).on('error', (err) => {
            console.log("Error: " + err.message);
        })
    },
};
