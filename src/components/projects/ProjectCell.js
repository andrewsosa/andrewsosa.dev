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

const ProjectCell = ({ title, image, url }: IProjectCell) => (
  <Link to={url} className={gridCell}>
    <Img className="br2 ba b--black-10" fluid={image} />
    <div className="flex flex-column justify-center items-start alipa3">
      <span className="f5 black no-underline code mv2">{title}</span>
    </div>
  </Link>
);

export default ProjectCell;
