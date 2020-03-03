import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

import { gridCell } from "./ProjectCell.module.scss";

interface IProjectCell {
  title: string;
  date: string;
  image: string;
  url: string;
}

const ProjectCell = ({ title, date, image, url }: IProjectCell) => (
  <Link to={url} className={gridCell}>
    {/* <img className="br2 ba b--black-10 " src={image} loading="lazy" /> */}
    <Img className="br2 ba b--black-10" fluid={image} />
    <div className="flex flex-column justify-center pa3">
      <span className="f5 black no-underline code">{title}</span>
    </div>
  </Link>
);

export default ProjectCell;
