import React from 'react';

const ContentLink = ({ link, text }) => (
  <li className=" mt4 db">
    <a href={link}>{text}</a>
  </li>
);

const ContentList = ({ children }) => (
  <ul className="mt4 db list pa0">{children}</ul>
);

export { ContentList, ContentLink };
