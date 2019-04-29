import React from 'react';

const links = [
  ['Github', 'https://github.com/andrewsosa'],
  ['LinkedIn', 'https://www.linkedin.com/in/andrew-sosa'],
  ['StackOverflow', 'https://stackoverflow.com/story/andrewsosa'],
  ['Email', 'mailto:andrew@andrewsosa.com'],
];

const FooterItem = ({ link, text }) => (
  <div className="dib mr3 mr4-ns mb2">
    <a href={link} className="link">
      {text}
    </a>
  </div>
);

const Footer = () => (
  <div className="w-100 mt6 db">
    <div className="tl">
      <div className="list dib ma0 pa0">
        {links.map(link => (
          <FooterItem text={link[0]} link={link[1]} />
        ))}
      </div>
    </div>
  </div>
);

export default Footer;
