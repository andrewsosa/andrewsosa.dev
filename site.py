#!/usr/bin/env python

from flask import Flask, render_template, request
from flask_flatpages import FlatPages
from flask_bootstrap import Bootstrap
from flask_nav import Nav
from flask_nav.elements import *

# Init
app = Flask(__name__)
pages = FlatPages(app)
bootstrap = Bootstrap(app)


# Config
app.config['FLATPAGES_AUTO_RELOAD'] = True
app.config['FLATPAGES_EXTENSION'] = '.md'
app.url_map.strict_slashes = False


# Nav
topbar = Navbar('AndrewTheWizard',
    Link('Home', '#'),
    Link('About', '#about'),
    Subgroup('Projects',
        Link('Postcred', '#Postcred'),
    )
)

nav = Nav()
nav.register_element('top', topbar)
nav.init_app(app)


# Routes

@app.route('/')
def index():
    header = pages.get_or_404('header')
    about = pages.get('about')
    sections = [p for p in pages if 'app' in p.meta]
    return render_template('index.html',
        active=None,
        about=about,
        header=header,
        sections=sections)

@app.route('/<path:path>/')
def page(path):
    return pages.get_or_404(path).html

if __name__ == '__main__':
    app.run(port=8000, debug=True)
