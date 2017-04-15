// locals.js
var locals = {};


locals.github = "http://github.com/";
locals.me = "andrewsosa";

locals.involvement = require('./json/involvement');

locals.footer = {
    blog: "http://medium.com/@andrewsosa001",
    contact: "mailto:andrew@andrewsosa.com",
    github: locals.github + locals.me,
    resume: "https://drive.google.com/open?id=0B035Fv5BTkCtTnM3WldfUHVhODg"
}

module.exports = locals;
