import React from 'react';
import { Helmet } from 'react-helmet';

export default () => (
  <Helmet>
    <title>Andrew Sosa: homepage</title>
    <meta name="theme-color" content="#000" />
    <link rel="shortcut icon" href="/static/favicon.png"/>
    <meta property="og:title" content="Andrew Sosa: Software Engineer" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://andrewsosa.com" />
    <meta property="og:image" content="/static/preview.png" />
  </Helmet>
);
