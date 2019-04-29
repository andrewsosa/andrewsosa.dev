import React from 'react';

const NavItem = ({ link, text }) => (
  <div className="dib mr3">
    <a href={link} className="link">
      {text}
    </a>
  </div>
);

const Spacer = () => <li class="dib mr3 accent-color">x</li>;

const Navbar = () => {
  return (
    <div className="w-100 db">
      <div className="tl w-80">
        <div className="list dib ma0 pa0">
          <NavItem text={'Home'} link={'/'} />
          <Spacer />
          <NavItem text={'About'} link={'/about/'} />
          <Spacer />
          <NavItem text={'Projects'} link={'/projects/'} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
