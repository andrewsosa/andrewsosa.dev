import React from "react";
import { Link } from "gatsby";

const Navbar = () => (
  <header>
    <nav>
      <ul>
        <li>
          <code>andrew sosa</code>
        </li>
      </ul>
    </nav>
    <nav>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/">about</Link>
        </li>
        <li>
          <Link to="/">blog</Link>
        </li>
        <li>
          <a href="https://github.com/andrewsosa">github</a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
